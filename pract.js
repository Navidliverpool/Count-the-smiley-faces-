// Demonstration purpose function.
function countSmileys(arr) {
    console.log("arr", arr)
    for (let i = 0; i < arr.length; i++) {
        console.log("arr[i] length:", arr[i].length)
    }
}
let array = ([':-)', ';~D', ':-D', ':_D']);
console.log(countSmileys(array))