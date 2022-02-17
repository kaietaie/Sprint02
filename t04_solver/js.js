let a = +prompt("Please, write a number"), 
    b = +prompt("Please, write a number" ), 
    c = +prompt("Please, write a number"), 
    d = +prompt("Please, write a number"), 
    e = +prompt("Please, write a number");


function solver( a, b, c, d, e ) {
    if ( +a.toFixed() &&
            +b.toFixed() &&
            +c.toFixed() &&
            +d.toFixed() &&
            +e.toFixed() ) {
    x = Math.pow(a , 2) - 5 * b * c + d / 3 + e; 
    } else {
        x = "Wrong input!";
    }
    return x ;

};

alert(solver(a, b, c, d, e));