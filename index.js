let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenN = [];
let oddN=[];
for (let i = 0; i <arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenN=evenN+arr[i]+" "
    }else{
        oddN=oddN+arr[i]+" "
    }
}
console.log(evenN);
console.log(oddN);

const n = 5;
 for (let i = 1; i <=n; i++) {
     let bag= "";
    for (let j = 1; j <= i; j++) {
         bag += "*";
     }
     console.log(bag);
 }