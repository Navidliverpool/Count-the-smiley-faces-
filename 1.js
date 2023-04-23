//  This method works but what it does is different than what the instruction of this pseudocode is asking.
// Demonstration purpose function.
function countSmileys(arr) {
    let s = '';
    let l = ')';
    let D = 'D';
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log("i:", i)
        s += arr[i].slice(-1);
        console.log("s:", s)
    }
    let ss = s.split('');
    console.log("ss:", ss)
    for (let t of ss) {
        if (t == l || t == D) {
            a++;
        }
    }
    return a;
}
let array = ([':-)', ';~D', ':-D', ':_D']);
console.log(countSmileys(array))