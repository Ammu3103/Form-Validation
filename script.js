
let Form = document.querySelector('form');
Form.addEventListener("submit", validation);
//to clear
function clear() {
  errors = document.getElementsByClassName('error');
  for (let item of errors) {
    item.innerHTML = "";
  }
}
//to set error messages
function seterrors(id, message) {
  let x = document.getElementById(id);
  x.getElementsByClassName('error')[0].innerHTML = message;
}

//condition to set errors
function validation(e) {
  e.preventDefault();
  let Value = true;
  clear();
  var name = document.getElementById('fullname').value;
  if (name.length < 5) {
    seterrors('name', "**Full Name can not be less than 5 characters");
    Value = false;
  }
  
  var phn = document.getElementById('phonenumber').value;
  if (phn.length !== 10) {
    seterrors('phn', '**Enter correct Phone Number');
    Value = false;
  }
  if (/[a-zA-Z]/.test(phn)) {
    seterrors('phn', '**Only digits are permitted to enter');
    Value = false;
  }


  var email = document.getElementById('InputEmail').value;
  if (!email.includes('@')) {
    seterrors('email', '**Invalid email id');
    Value = false;
  }
  if(/[A-Z]/.test(email)){
    seterrors('email', '**Invalid email id');
    Value = false;
  }

  var pass = document.getElementById('InputPassword1');
  if (pass.value.length < 8) {
    seterrors('pass', '**Weak password');
    Value = false;
  }

  if (pass.value.toLowerCase() === 'password') {
    seterrors('pass', '**Password can not be password');
    Value = false;
  }

  if (pass.value === name) {
    seterrors('pass', '**Password can not be username');
    Value = false;
  }

  var cpass = document.getElementById('cInputPassword1');
  if (cpass.value !== pass.value) {
    seterrors('cpass', '**Password and Confirm Password should match');
    Value=false;
  }
  if(Value){
    Form.submit();
  }
}
//password visibility function
const showPass = document.getElementById('show');
const passInput = document.getElementById('InputPassword1');
const confirmpass = document.getElementById('cInputPassword1');

const PasswordVisibility = () => {
  let passwordType = showPass.checked ? 'text' : 'password';
  passInput.type = passwordType;
  confirmpass.type = passwordType;
};

showPass.addEventListener('change', PasswordVisibility);
