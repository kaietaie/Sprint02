const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];

function sortEvenOdd(arr) {
    for (i = 0; i < arr.length; i++) {
        let current = arr[i],
            j = i - 1;
        while ( j>=0 && arr[j]%2 !== 0) {
            arr[j+1] =  arr[j];
            j--; 
             }
             arr[j+1] = current;
         } 
        
    }
   

console.log("before " +arr);
sortEvenOdd(arr);
console.log("after " + arr)