let regUser = document.getElementById("reg-user");
const userForm = document.getElementById("registration");
userForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (regUser.value.trim() === "") {
    window.alert("The username field cannot be blank!");
    return;
  }
  const uniqSet = new Set(regUser.value);
  if (uniqSet.size < 2) {
    window.alert("You need more unique characters!");
    return;
  }
  const specSet = /[^a-zA-Z0-9\-\/]/;
  if (specSet.test(regUser.value)) {
    window.alert("Username must not include special characters or whitespace!");
    return;
  }
  // EMAIL VALIDATION
  const regEmail = document.getElementById("reg-email");
  const badEmail = "example.com";
  if (regEmail.value.includes(badEmail)) {
    window.alert("The domain example.com is not allowed!");
    return;
  }
  const regPw = document.getElementById("reg-pw");
  const upCase = /[A-Z]/;
  const lowCase = /[a-z]/;
  const numCheck = /[0-9]/;
  if (!upCase.test(regPw.value)) {
    window.alert("Password must contain an uppercase letter!");
    return;
  }
  if (!lowCase.test(regPw.value)) {
    window.alert("Password must contain a lowercase letter!");
    return;
  }
  if (!numCheck.test(regPw.value)) {
    window.alert("Password must contain a number!");
    return;
  }
  if (!specSet.test(regPw.value)) {
    window.alert("Password must contain a special character!");
    return;
  }
  const passCheck = document.getElementById("pass-check");
  const badPw = "password";
  if (regPw.value !== passCheck.value) {
    window.alert("Passwords must match!");
    return;
  }
  if (regPw.value.includes(badPw)) {
    window.alert("The word 'password' cannot be inside your password!");
    return;
  }
  const termsAndCon = document.getElementById("terms")
  let isChecked = termsAndCon.checked;
  if ((isChecked == false)) {
    window.alert("You must accept the Terms and Conditions!");
    return;
  }
  function saveData(){
  localStorage.setItem("username", regUser.value.toLowerCase)
  localStorage.setItem("password", regPw.value)
  localStorage.setItem("email", regEmail.value)
}
saveData()
console.log(localStorage.getItem("username"))
});
// Login Form
let loginForm = document.getElementById("login")
loginForm.addEventListener("submit", (e) => {
  e.preventDefault()
  let userLog = document.getElementById("log-user")
  let pwLog = document.getElementById("log-pw")
  if(userLog.value == ""){
    window.alert("Please fill this field with a username!")
    return
  }
  if(pwLog.value == ""){
    window.alert("Please fill this field with a password!")
    return
  }
function findUsername(username, password){
    for(let i = 0; i < localStorage.length; i++){
      let storedName = localStorage.key(i)
      let storedPW = localStorage.getItem(storedName)
      if(storedName == username){
         alert("Login successful!")
        return storedPW === password;
        // Here is where I would place the routing to another page.
      } else{
        alert("This username or password is not recognized.")
        return
      }
    }
    return false
}
findUsername(userLog.value, pwLog.value)
})