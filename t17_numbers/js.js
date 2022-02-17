let beginRange = +prompt("Enter number of the begining of a range"),
    endRange = +prompt("Enter number of end  of a range");

function checkDivision(beginRange , endRange){
    let str1 = " is even",
        str2 = "is a multiple of 3",
        str3 = "is a multiple of 10";

    for (let i = beginRange; i <= endRange; i++) {
        let result0 = i%2,
            result1 = i%3,
            result2 = i%10;
        if( result1 == 0 && result2 !== 0 && result0 !== 0) console.log( i + " " + str2)
        if( result1 == 0 && result2 !== 0 && result0 == 0) console.log( i + str1 + ', ' + str2)
        if( result2 == 0 && result1 !== 0) console.log( i + str1 + ', ' + str3)
        if( result1 == 0 && result2 == 0) console.log( i + str1 + ', ' + str2 + ', ' + str3)
        if( result0 == 0 && result1 !==0 && result2 !== 0) console.log( i + str1)
        if( result0 !== 0 && result1 !==0 && result2 !== 0) console.log( i + '-')
        
    }


    
    
}

checkDivision(beginRange , endRange)