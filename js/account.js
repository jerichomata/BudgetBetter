// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4yfts8CSlHDEpsEXpp7UBUnMSWHmKVgs",
  authDomain: "hackcwru-2022.firebaseapp.com",
  databaseURL: "https://hackcwru-2022-default-rtdb.firebaseio.com",
  projectId: "hackcwru-2022",
  storageBucket: "hackcwru-2022.appspot.com",
  messagingSenderId: "311088466895",
  appId: "1:311088466895:web:bdd0617921c98edb0e60ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

if( window.location.pathname == '/register.html')
{
  signUp.addEventListener("click", (e) => {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        set(ref(database, "users/" + user.uid), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        });

        alert("-- user created --");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // ..
      });
  });
}

if( window.location.pathname == '/index.html')
{
  login.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    console.log(email)
    var password = document.getElementById('pass').value;
    console.log(password)

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.id), {
          last_login: dt
        })

          alert('-- user logged in --')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });

  });
}