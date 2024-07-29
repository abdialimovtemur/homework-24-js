//  Berilgan stringdagi yagona (takrorlanmaydigan) so'zlarni toping.
function uniqueWords(s = "") {
    let arr = s.split(" ").filter((item) => {
      return s.indexOf(item) === s.lastIndexOf(item)
    } )
    return arr.join()
}
console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
console.log(uniqueWords("hello world hello")); // Output: ["world"]







//  Berilgan objectdagi barcha qiymatlarni to'plab, bir massivda qaytaring.
function collectValues(obj) {
let arr = [];
for (let key in obj) {
  if (typeof obj[key] === "number") {
    arr.push(obj[key]);
  } else if (typeof obj[key] === "object") {
    arr = arr.concat(collectValues(obj[key]));
  }
}
return arr;
}
const obj = {
a: 1,
b: {
  c: 2,
  d: {
    e: 3,
    f: {
      g: 4,
    },
  },
},
};
console.log(collectValues(obj)); // Output: [1, 2, 3, 4]





// Berilgan stringdagi har bir so'zning birinchi va oxirgi harfini o'zgartiring.
function swapFirstLast(s) {
let arr = s.split(" ");
for(let i = 0; i < arr.length; i++){
  arr[i] = arr[i][0] + arr[i].slice(1, arr[i].length - 1) + arr[i][arr[i].length - 1] 
}
return arr
 
}
// Test case
console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo"






// Berilgan raqamlar ro'yxatidagi eng katta elementning indeksini toping.

function indexOfMax(arr) {
let max = arr[0];
let index = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
    index = i;
  }
}
return index;
}

// Test case
console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2





//  Berilgan raqamlar ro'yxatidagi barcha elementlarning kvadrat ildizlarini hisoblang.
function sqrtElements(arr) {
let newarr = arr.map((num) => Math.sqrt(num));
return newarr
}

// console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]




//  Berilgan raqamlar ro'yxatidagi juft va toq sonlarni alohida ro'yxatlar sifatida qaytaring.

function separateEvenOdd(arr) {
let arr1 = arr.filter((num) => num % 2 === 0);
let arr2 = arr.filter((num) => num % 2 !== 0);
return { even: arr1, odd: arr2 };
}

// Test case
console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }





//  Berilgan raqamlar ro'yxatidagi tub sonlarni toping.

function gcd(a){
let res = []
for(let i = 0; i < a.length; i++){
  let count = 0
  for(let j = 0; j <= a[i]; j++){
    if(a[i] % j == 0){
      count++
    }
  }
  if( count == 2){
    res.push(a[i])
}
}
return res
}

console.log(gcd([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]





//  Berilgan raqamlar ro'yxatidagi barcha elementlarni `k` qadam bosib aylanma tartibda o'ngga suring.

function rotateArray(arr, k) {
let newArr = arr.slice();
for (let i = 0; i <= k; i++) {
  newArr.push(newArr.shift());
}
return newArr;
}

// Test case
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]





// Berilgan raqamlar ro'yxatidagi o'rtacha qiymatni toping, faqat ikkita eng kichik va ikkita eng katta qiymatni hisobga olmasdan.

function trimmedMean(arr) {
let sum = 0;
for (let i = 1; i < arr.length - 1; i++) {
  sum += arr[i];
}
return sum / (arr.length - 2);
}

// Test case
console.log(trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5





//  Berilgan raqamlar ro'yxatidagi barcha polindrom sonlarni toping.

function findPalindromes(arr) {
let palindromes = [];
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let str = num.toString();
  if (str === str.split("").reverse().join("")) {
    palindromes.push(num);
  }
}
return palindromes;
}

// Test case
console.log(findPalindromes([121, 123, 202, 345, 454])); // Output: [121, 202, 454]






//  Berilgan raqamlar ro'yxatidagi hamma elementlar bir xil qiymatga ega ekanligini tekshiring.

function allElementsEqual(arr) {
    let element = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== element) {
        return false;
      }
    }
    return true;
  }
  
  // Test case
  // console.log(allElementsEqual([1, 1, 1, 1])); // Output: true
  // console.log(allElementsEqual([1, 2, 1, 1])); // Output: false
  





  //  Berilgan ikkita ro'yxatning bir xil elementlarni o'z ichiga olishini tekshiring, tartibini hisobga olmasdan.
  
  function arraysHaveSameElements(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return set1.size === set2.size;
  }
  
  // Test case
  // console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 1])); // Output: true
  // console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 2])); // Output: false
  
  // 1. Berilgan raqamlar ro'yxatidagi elementlarning to'plam (duplikat bo'lmasligi) bo'lishini tekshiring.
  function isUniqueSet(arr) {
    let set = new Set(arr);
    return arr.length === set.size;
  }
  
  // Test case
  // console.log(isUniqueSet([1, 2, 3, 4])); // Output: true
  // console.log(isUniqueSet([1, 2, 3, 3])); // Output: false
  






  // Berilgan raqamlar ro'yxatida ketma-ket uchta toq yoki juft son bor-yo'qligini tekshiring.
  
  function hasThreeConsecutiveEvenOrOdd(arr) {
     for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 == 0){
         return false 
      }
      }
      if(arr[i] % 2 !== 0){
    return true
     }
      
  }
  console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 5, 6, 7])); // Output: false
  console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 6, 8, 7])); // Output: true
  





  
  // Berilgan raqamlar ro'yxatidagi elementlar ketma-ket o'sib yoki kamayib borayotganini tekshiring.
  
  function isMonotonic(arr) {
    let increasing = true;
    let decreasing = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
          decreasing = false;
      } else if (arr[i] < arr[i - 1]) {
          increasing = false;
      }
  }
  return increasing || decreasing;
  }
  console.log(isMonotonic([1, 2, 2, 3,])); // Output: true
  // console.log(isMonotonic([6, 5, 4, 4])); // Output: true
  // console.log(isMonotonic([1, 3, 2])); // Output: false
  


