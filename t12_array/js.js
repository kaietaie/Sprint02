let moons = [   "Phobos",
                "Deimos",
                "Io",
                "Europa",
                "Callisto"];

function arrReader(arr, n) {
    newarr = arr.slice( 0, n );
    return newarr;
    
}

console.log(arrReader(moons,0))