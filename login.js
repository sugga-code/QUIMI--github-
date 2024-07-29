
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk3UuOOfbQdrEQvrlRR6eB4yit662MagI",
  authDomain: "quimii.firebaseapp.com",
  projectId: "quimii",
  storageBucket: "quimii.appspot.com",
  messagingSenderId: "985736314088",
  appId: "1:985736314088:web:9a5ec1a1386448affddd5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


login.addEventListener('click', (e) => {
    var email = document.getElementById('emaillog').value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
        alert("Has iniciado correctamente la sesión");
        console.log(cred.user);
    }).catch(error => {
        const errorCode = error.code;

        if(errorCode == 'auth/invalid-email')
            alert('El correo no es valido');
        else if(errorCode == 'auth/user-disabled')
            alert('El usuario ha sido deshabilitado');
        else if(errorCode == 'auth/user-not-found')
            alert('El usuario no existe');
        else if(errorCode == 'auth/wrong-password')
            alert('Contraseña incorrecta');
    });
});

cerrar.addEventListener('click', (e) => {
    auth.signOut().then(() => {
        alert('Sesion cerrada');
    }).catch((error) => {
        alert('Error al cerrar seesion');
    });
})

firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            // Inicio de sesión exitoso
            // Redirige a la página principal
            window.location.href = '/home/index.html';
        })

