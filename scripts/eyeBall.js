const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#pword");

togglePassword.addEventListener("click", function (e) {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  this.classList.toggle("fa-eye-slash");
});

function checkUsername() {                      
  var fname = el.value;                        
  if (fname.length < 6) {                      
    elMsg.className = 'warning';                  
    elMsg.textContent = 'Is that your full name?';
  } else {                                       
    elMsg.textContent = '';                       
  }
}

function tipUsername() {                          // Declare function
  elMsg.className = 'tip';                        // Change class for message
  elMsg.innerHTML = 'Please enter your full name.'; // Add message
}

var el = document.getElementById('fname');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message

// When the username input gains / loses focus call functions above:
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false);// blur call checkUsername()

function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);

