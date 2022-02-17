let fullname = prompt("Enter your first and last name:"),
    exp = /^[a-zA-Z]+ [a-zA-Z]+$/;

if(fullname == null || fullname =="" || !fullname.match(exp)) {
    console.log("Please try again");
    alert("Please try again");
} 

let Nam = fullname.split(" ")[0].charAt(0).toUpperCase() + fullname.split(" ")[0].toLowerCase().slice(1);
let Sur = fullname.split(" ")[1].charAt(0).toUpperCase() + fullname.split(" ")[1].toLowerCase().slice(1);

console.log("Hello " + Sur + " " + Nam +"!");
alert("Hello " + Sur + " " + Nam +"!");