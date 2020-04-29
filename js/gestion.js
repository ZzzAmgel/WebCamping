observador();

function observador() {
    firebase.auth().onAuthStateChanged(function (user) {

        if (user) {
            // User is signed in.
            console.log('Existe usuario activo');
            console.log(user);
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            var contenido = document.getElementById('btnshow');
            if (user.emailVerified) {
                contenido.innerHTML = `
    <p>Bienvenido</p>
    <button onclick="writeUserData()">Enviar</button>`;
            }
            // ...
        } else {

            console.log('No existe usuario activo');
        }
    });
}


function cambiarFecha() {
    var fechaalta = document.getElementById('fechatempalta').value;

    if (fechaalta == "") {
        toastr["warning"]('Alguno de los campos esta vacio, compruebalos.', {
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        });
        return 0;
    }

    alert("Yeee");
    firebase.auth().onAuthStateChanged(function (user) {
        firebase.database().ref('Fechas').set({
            FechaTempAlta: fechaalta
            //ya lo vere mañana
        });
        toastr.info('Se ha cambiado la fecha con exito.');
    });
}



function writeUserData() {

    var tituloevento = document.getElementById('tituloevento').value;
    var descripcionevento = document.getElementById('descripcionevento').value;
    var fechaevento = document.getElementById('fechaevento').value;
    var urlevento = document.getElementById('urlevento').value;

    var allContent = tituloevento + "\n" + descripcionevento + "\n" + fechaevento;
    if (allContent == "" || urlevento == "") {
        toastr["warning"]('Alguno de los campos esta vacio, compruebalos.', {
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        });
        return 0;
    }
    firebase.auth().onAuthStateChanged(function (user) {
        firebase.database().ref('/uploads').push({
            mImageUrl: urlevento,
            mName: allContent,
        });
        toastr.info('Se ha cambiado la fecha con exito.');
    });
}

function writeGasto() {
    var nombreproducto = document.getElementById('nombreproducto').value;
    var precioproducto = document.getElementById('precioproducto').value;
    var fechaproducto = document.getElementById('fechaproducto').value;
    if (nombreproducto == "" || precioproducto == "" || fechaproducto == "") {
        toastr["warning"]('Alguno de los campos esta vacio, compruebalos.', {
            "newestOnTop": true,
            "progressBar": true,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"

        });
        return 0;
    }
    firebase.auth().onAuthStateChanged(function (user) {
        firebase.database().ref('/uploads').push({
            FechaGasto: fechaproducto,
            NombreGasto: nombreproducto,
            Precio: precioproducto
        });
        toastr.info('Se ha cambiado la fecha con exito.');
    });

}


var rootRef = firebase.database().ref().child("Gastos");
rootRef.on("child_added", snap => {
    var fechagasto1 = snap.child("FechaGasto").val();
    var nombregasto1 = snap.child("NombreGasto").val();
    var preciogasto1 = snap.child("Precio").val();

    $("#tablebody").append(`
    <tr>
    <td>${nombregasto1}</td>
    <td><a>${preciogasto1}</a></td>
    <td><a>${fechagasto1}</a></td>
    </tr>
    `)
});

function myFunction() {
    var x = document.getElementById("1st");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction1() {
    var x = document.getElementById("2st");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("3st");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementById("4st");
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.width = "300rem";
    } else {
        x.style.display = "none";
    }
}

var rootRef1 = firebase.database().ref().child("Reservas");
rootRef1.on("child_added", snap => {
    var casa = snap.child("Casa").val();
    var dni = snap.child("DNI").val();
    var email = snap.child("Email").val();
    var fechafin = snap.child("FechaFin").val();
    var fechainicio = snap.child("FechaInicio").val();
    var numadultos = snap.child("NumAdultos").val();
    var numninos = snap.child("NumNinos").val();
    var numtelefono = snap.child("NumeroTelefono").val();
    var nombretitular = snap.child("Titulo").val();

    $("#tablebody1").append(`
    <tr>
    <td>${nombretitular}</td>
    <td><a>${dni}</a></td>
    <td><a>${email}</a></td>
    <td><a>${casa}</a></td>
    <td>${fechafin}</td>
    <td><a>${fechainicio}</a></td>
    <td><a>${numadultos}</a></td>
    <td>${numninos}</td>
    <td><a>${numtelefono}</a></td>
    </tr>
    `)
});