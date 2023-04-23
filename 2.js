function countSmileys(arr) {
    console.log("input:", arr)
    let s = '';
    let l = ')';
    let D = 'D';
    let a = 0;
    let index = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= 3 && !arr[i].includes('_')) {
            if (arr[i].includes(':') || arr[i].includes(';')) {
                console.log("i:", i)
                s += arr[i].slice(-1);
                console.log("s:", s)
            }
        }
        index = arr.indexOf(i);
        if (index > -1) {
            array.splice(index, 1);
        }
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