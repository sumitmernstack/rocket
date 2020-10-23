function clothStore( n, arr ) {
// sorting the value
    let sorted_array = arr.sort( (a,b) => a - b);
    let flag = 0;
//finding occurance
    for (let i = 0; i < n - 1; i++) {
        if ( sorted_array[i] === sorted_array[i + 1]) {
            flag++;
            i += 1;
        }
    }

    return flag;
}

const socks = [10,10,10,10,20,30,30,30,30,30,30,30,40,40,40,40,40];
const n = socks.length;
let result= clothStore(n, socks)
console.log(`There is a total of ${result} pairs`);

