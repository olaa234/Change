const firebaseConfig = {
  apiKey: "AIzaSyAMjAcGFnl-Z5PImmDB_JAAoXrnM-CEDl4",
  authDomain: "boostrap-deaa6.firebaseapp.com",
  databaseURL: "https://boostrap-deaa6-default-rtdb.firebaseio.com",
  projectId: "boostrap-deaa6",
  storageBucket: "boostrap-deaa6.appspot.com",
  messagingSenderId: "309179269256",
  appId: "1:309179269256:web:b362fb83de3db29d29df3d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference messages collection
// const registrationFormDB = firebase.database().ref("registerForm");
var registrationFormDB = firebase.database().ref("contactUs");

document.getElementById("contactUs").addEventListener("submit", submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var fullName = getElementVal("fullName");
  var email = getElementVal("email");
  var message = getElementVal("message");
  var phone = getElementVal("phone");

  // save message
  saveMessages(fullName, email, message, phone);

  // enable alert message
  document.querySelector(".alert").style.display = "block";

  // remove alert message
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";

    // reset the form
    document.getElementById("contactUs").reset();
  }, 2000);
}

// to get form values

// save message to firebaseConfig
const saveMessages = (fullName, email, message, phone) => {
  var newRegisterForm = registrationFormDB.push();
  newRegisterForm.set({
    fullName: fullName,
    phone: phone,
    message: message,
    email: email,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
