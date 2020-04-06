

observador();

function observador(){
    firebase.auth().onAuthStateChanged(function(user) {
        
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
  if(user.emailVerified){
  contenido.innerHTML = `
    <p>Bienvenido</p>
    <button onclick="writeUserData()">Enviar</button>`;
  }
          // ...
        } else {
            contenido.innerHTML = `
            <p>Debe verificar su dirección de correo electrónico</p>`;
          console.log('No existe usuario activo');
        }
      });
}




function writeUserData() {

    var nombrereserva = document.getElementById('nombrereserva').value;
    var dni = document.getElementById('dni').value;
    var fechaentrada = document.getElementById('fechaentrada').value;
    var fechasalida = document.getElementById('fechasalida').value;
    var numeroadultos = document.getElementById('numeroadultos').value;
    var numeroninos = document.getElementById('numeroninos').value;
    var numerotelefono = document.getElementById('numerotelefono').value;
    var casa = "N/C"
    alert("Yeee");
    console.log(numeroadultos);
    firebase.auth().onAuthStateChanged(function(user) {

        var email = user.email;
    
    
    
    firebase.database().ref('/Reservas').push({
        Titulo : nombrereserva,
        DNI : dni,
        FechaInicio : fechaentrada,
        FechaFin : fechasalida,
        NumAdultos : numeroadultos,
        NumNinos : numeroninos,
        NumeroTelefono : numerotelefono,
        Casa : casa,
        Email : email
        
    });
});
  }
