function iniciar(){


    var ingresoemail = document.getElementById('ingresoemail').value;
    var ingresopass = document.getElementById('ingresopass').value;


    firebase.auth().signInWithEmailAndPassword(ingresoemail, ingresopass).then(function(){
        enviar();
        
        })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Usuario inexistente");

        console.log(errorCode);
        console.log(errorMessage);
        
        // ...
      });      
        }

function enviar(){
    alert("Todo esta correcto");
    window.location.href = "index.html"
  }