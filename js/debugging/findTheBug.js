// function sumTo(n) {
//     let s = 0;
//     for (let i = 1; i < n; i++) {
//         s += i;
//     }
//     return s;
// }
// console.log(sumTo(5)); // should be 15

// function maxOrNull(arr) {
//     let max = 0;
//     for (const x of arr) if (x > max) max = x;
//     return arr.length ? max : null;
// }
// console.log(maxOrNull([-5, -2, -9])); // should be -2


const posts = [{ title: "A" }, { title: "B" }];
function archiveCopy(list) {
    const copy = list.slice();        // shallow copy
    copy.forEach(p => p.title += " (archived)");
    return copy;
}
const archived = archiveCopy(posts);
console.log(posts[0].title); // should stay "A"


// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => console.log(i), i * 1000);
// }
// // should log 1,2,3 (not 4,4,4)


// const nums = [2, 10, 3];
// nums.sort();
// console.log(nums); // should be [2,3,10]
