let num = prompt("Enter a number from 1 to 4:"),
    exp = /^[1-4]+$/;

function special(num) {

    if( num <= 0 || num >= 5 || !num.match(exp)) {
        return alert("Wrong input!");
    }
    else if( num == 1) {
        alert( num*2/"a");
    }
    else if( num == 2) {
        alert( num-num/0);
    } 
    else if( num == 3) {
        alert( 0*Infinity);
    }
    else if( num == 4) {
        alert( (num * 40000000) < Infinity )
    }

}

special(num)