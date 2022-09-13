const firebaseConfig = {
  apiKey: "AIzaSyDY6XogKkzpa7eHZLmoPYCk207Gah71P0k",
  authDomain: "registrationform-7aae5.firebaseapp.com",
  databaseURL: "https://registrationform-7aae5-default-rtdb.firebaseio.com",
  projectId: "registrationform-7aae5",
  storageBucket: "registrationform-7aae5.appspot.com",
  messagingSenderId: "406221870969",
  appId: "1:406221870969:web:a761b7c11f6190d25d01a8",
  measurementId: "G-EB7SW2TYG3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// reference messages collection
// const registrationFormDB = firebase.database().ref("registerForm");
var registrationFormDB = firebase.database().ref("registerForm");

document.getElementById("registerForm").addEventListener("submit", submitForm);

// submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var firstname = getElementVal("firstname");
  var middlename = getElementVal("middlename");
  var lastname = getElementVal("lastname");
  var phone = getElementVal("phone");
  var address = getElementVal("address");
  var email = getElementVal("email");

  // save message
  saveMessages(firstname, middlename, lastname, phone, address, email);
}

// enable alert message

document.querySelector(".alert").style.display = "block";

// remove alert message

setTimeout(() => {
  document.querySelector(".alert").style.display = "none";
}, 3000);

// reset the form

document.getElementById("registerForm").reset();

// to get form values

// save message to firebaseConfig
const saveMessages = (
  firstname,
  middleName,
  lastname,
  phone,
  address,
  email
) => {
  var newRegisterForm = registrationFormDB.push();
  newRegisterForm.set({
    firstname: firstname,
    middleName: middleName,
    lastname: lastname,
    phone: phone,
    address: address,
    email: email,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
