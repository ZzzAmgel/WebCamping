// Empty JS for your own code to be here



function ingreso(){


    var ingresoemail = document.getElementById('ingresoemail').value;
    var ingresopass = document.getElementById('ingresopass').value;

    firebase.auth().signInWithEmailAndPassword(ingresoemail, ingresopass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
      aparece();
}

function aparece(user){
 
  var user = user;
  var contenido = document.getElementById('contenido');
  if(user.emailVerified){
  contenido.innerHTML = `
    <p>Bienvenido</p>
    <button onclick="cerrar()">Cerrarsesion</button>`;
  }
  
}


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

          var contenido = document.getElementById('contenido');
  if(user.emailVerified){
  contenido.innerHTML = `
    <p>Bienvenido</p>
    <button onclick="cerrar()">Cerrarsesion</button>`;
  }
          // ...
        } else {
          // User is signed out.
          console.log('No existe usuario activo');
        }
      });
}
observador();

function cerrar(){
  firebase.auth().signOut()
  .then(function(){
    alert('Cerraste sesión');
  })
  .catch(function(error){
    alert('Algo salió mal');
  });
}


function registrar(){
  var nombreregistro = document.getElementById('nombreregistro').value;
  var email = document.getElementById('email').value;
  var contrasena = document.getElementById('contrasena').value;
  var contrasenaC = document.getElementById('contrasenaC').value;
  var espacios = false;
  var cont = 0;

  console.log("boton pulsado");

  while (!espacios && (cont < contrasena.length)) {
if (contrasena.charAt(cont) == " ")
espacios = true;
cont++;
}

if (espacios) {
alert ("La contraseña no puede contener espacios en blanco");
return false;
}

if (contrasena != contrasenaC) {
alert("Las passwords deben de coincidir");
return false;
} else {
  
firebase.auth().createUserWithEmailAndPassword(email, contrasena).then(function(){
verificar();
alert("Todo esta correcto");
}).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);
      // ...
        });

        firebase.database().ref('/Users').push({
          correo : email,
          nombre : nombreregistro
                 
      });

        
      }
  
  }

function verificar(){
var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('Enviando correo...');
  
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
}

function alerta(){
  alert('Eres un pringao y siempre te va a fallar todo');
}



