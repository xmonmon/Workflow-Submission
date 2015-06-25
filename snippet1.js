var times = prompt("how many beers");
for ( var count = times ; count >= 0 ; count--){
    if (count > 0){
    console.log(count + " bottles of beer on the wall");
    console.log(count + " bottles of beer!");
    console.log("Take one down and pass it around,");
    }
else if (beer === 0){
    console.log("No more")
}
}

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

