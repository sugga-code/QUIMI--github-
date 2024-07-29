// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Asegúrate de que el DOM esté completamente cargado antes de agregar el event listener
document.addEventListener('DOMContentLoaded', () => {
    const registro = document.getElementById('registro');
    
    registro.addEventListener('click', () => {
        const email = document.getElementById('emailreg').value;
        const password = document.getElementById('passwordreg').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Usuario creado");
                return sendEmailVerification(userCredential.user);
            })
            .then(() => {
                alert('Se ha enviado un correo de verificación');
            })
            .catch((error) => {
                console.error("Error:", error); // Registra el error en la consola para depuración
                const errorCode = error.code;

                if (errorCode === 'auth/email-already-in-use') {
                    alert('El correo ya está en uso');
                } else if (errorCode === 'auth/invalid-email') {
                    alert('El correo no es válido');
                } else if (errorCode === 'auth/weak-password') {
                    alert('La contraseña debe tener al menos 6 caracteres');
                } else {
                    alert('Error desconocido: ' + error.message);
                }
            });
    });
});
