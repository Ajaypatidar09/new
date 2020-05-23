const firebaseConfig = {
  apiKey: "AIzaSyBXhPU2lLTMouoMj0mjqaoTB7aqXUmCysU",
  authDomain: "sureshchandawanii.firebaseapp.com",
  databaseURL: "https://sureshchandawanii.firebaseio.com",
  projectId: "sureshchandawanii",
  storageBucket: "sureshchandawanii.appspot.com",
  messagingSenderId: "137031026157",
  appId: "1:137031026157:web:9b1f4d99fdf8d1543013e4",
  measurementId: "G-S19HB4QZX5"
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}




