var userLogin = {
   userName: "Monika",
   password: "12234"
}
var password;

password = prompt("I sorta need you to enter your password now...");
if (password === userLogin["password"]){
   console.log("Passwords Match!")
}
else {
   console.log("WELP, that password was SO wrong. TRY AGAIN!")
}