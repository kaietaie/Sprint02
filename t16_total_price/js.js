let addCount,
    addPrice,
    currentTotal = 0;

function total( addCount, addPrice, currentTotal) {
    currentTotal = typeof currentTotal !== 'undefined' ? currentTotal : 0;
    cTotal = addCount * addPrice + currentTotal;
    
  console.log("v foo " + currentTotal);    
    return cTotal; 
        
}

let sum = total(1,0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
sum = total(2, 2, sum);
console.log(sum)