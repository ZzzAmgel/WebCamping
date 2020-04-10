

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

    var tituloevento = document.getElementById('tituloevento').value;
    var descripcionevento = document.getElementById('descripcionevento').value;
    var fechaevento = document.getElementById('fechaevento').value;
    var urlevento = document.getElementById('urlevento').value;

    var allContent = tituloevento + "\n" + descripcionevento + "\n" + fechaevento;
    alert("Yeee");
    firebase.auth().onAuthStateChanged(function(user) { 
    firebase.database().ref('/uploads').push({
        mImageUrl : urlevento,
        mName : allContent,        
    });
});
  }
