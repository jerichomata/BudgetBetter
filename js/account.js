// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  update,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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
const dbRef = ref(getDatabase());
const auth = getAuth();

if (window.location.pathname == "/register.html") {
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
    var password = document.getElementById('pass').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      var dt = new Date();
      update(ref(database, 'users/' + user.uid), {
          last_login: dt
        })
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            window.location.href = 'main.html'
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        // ...
      } else {
        // User is signed out
        // ...
        console.log('not logged in')
      }
    });
  });

}

if( window.location.pathname != '/main.html')
{
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('no user logged in')
  }).catch((error) => {
    // An error happened.
  });
}
