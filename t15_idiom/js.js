// function testInput() {
//     let num = prompt("Enter a number from 1 to 10:"),
//         exp = /^[1-10]+$/;
//     if (num.match(exp)) {
//         return input = +num;
//     } else return alert("Wrong input");
    
// }
let input = +prompt("Enter a number from 1 to 10:");

function idiom(input) {

   switch( input ) {
    case 1 :
        alert("Back to suare 1");
        break;
    case 2 :
        alert("Goody 2-shoes");
        break;
    case 3 : 
    case 6 :
        alert("Two's company, three's a crowd");
        break;
    case 4 :
    case 9 :
        alert("Counting sheep");
        break;
    case 5 :
        alert("Take five");
        break;
    case 7 :
        alert("Seventh heaven");
        break;
    case 8 :
        alert("Behind the eight-ball");
        break;
    case 10 :
        alert("Cheaper by the dozen");
        break;
    default :
        alert("Wrong input!");

   }
    
}

// testInput();

idiom(input)