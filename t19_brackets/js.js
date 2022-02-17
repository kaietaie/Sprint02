let str = "87654)()()()"; 
let count = 0,
    dual = 0,
    x ;

function checkBrackets(str) {
    if ( typeof str !== "string" ) {
        return x = console.log("-1");}

    if (!str.includes(')') &&
        !str.includes('(') )
         {
           return x = console.log("Wrong string!");
        }
   
    for ( i = 0; i < str.length; i++){
        if ( str[i] == ')' || str[i] == '(') {
            
        } 
        else if (str[i] !== ')' || str[i] !== '(') {
                        count += 1;
        } 
                    
    }
    return console.log(count) 
}

checkBrackets(str)