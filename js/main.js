// 81. Berilgan stringdagi yagona (takrorlanmaydigan) so'zlarni toping.

function uniqueWords(s) {
    // Code here
}

// Test case
console.log(uniqueWords("this is a test this is only a test")); // Output: ["only"]
console.log(uniqueWords("hello world hello")); // Output: ["world"]




// 82. Berilgan objectdagi barcha qiymatlarni to'plab, bir massivda qaytaring.

function collectValues(obj) {
    // Code here
}

// Test case
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};
console.log(collectValues(obj)); // Output: [1, 2, 3, 4]



// 83. Berilgan stringdagi har bir so'zning birinchi va oxirgi harfini o'zgartiring.


function swapFirstLast(s) {
    // Code here
}

// Test case
console.log(swapFirstLast("hello world")); // Output: "oellh dlorw"
console.log(swapFirstLast("a quick brown fox")); // Output: "a kuicq nrowb fxo"


// 84. Berilgan raqamlar ro'yxatidagi eng katta elementning indeksini toping.


function indexOfMax(arr) {
    // Code here
}

// Test case
console.log(indexOfMax([1, 3, 7, 1, 2, 5, 7])); // Output: 2


// 85. Berilgan raqamlar ro'yxatidagi barcha elementlarning kvadrat ildizlarini hisoblang.


function sqrtElements(arr) {
    // Code here
}

// Test case
console.log(sqrtElements([1, 4, 9, 16, 25])); // Output: [1, 2, 3, 4, 5]




// 86. Berilgan raqamlar ro'yxatidagi juft va toq sonlarni alohida ro'yxatlar sifatida qaytaring.



function separateEvenOdd(arr) {
    // Code here
}

// Test case
console.log(separateEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7, 9] }


// 87. Berilgan raqamlar ro'yxatidagi tub sonlarni toping.


function gcd(a, b) {
    // Code here
}

// Test case
console.log(findCoprimePairs([2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]



// 88. Berilgan raqamlar ro'yxatidagi barcha elementlarni k qadam bosib aylanma tartibda o'ngga suring.


function rotateArray(arr, k) {
    // Code here
}

// Test case
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]


// 89. Berilgan raqamlar ro'yxatidagi o'rtacha qiymatni toping, faqat ikkita eng kichik va ikkita eng katta qiymatni hisobga olmasdan.


function trimmedMean(arr) {
    // Code here
}

// Test case
console.log(trimmedMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: 5.5



// 90. Berilgan raqamlar ro'yxatidagi barcha polindrom sonlarni toping.


function findPalindromes(arr) {
    // Code here
}

// Test case
console.log(findPalindromes([121, 123, 202, 345, 454])); // Output: [121, 202, 454]



// 91. Berilgan raqamlar ro'yxatidagi hamma elementlar bir xil qiymatga ega ekanligini tekshiring.


function allElementsEqual(arr) {
    // Code here
}

// Test case
console.log(allElementsEqual([1, 1, 1, 1])); // Output: true
console.log(allElementsEqual([1, 2, 1, 1])); // Output: false


// 92. Berilgan ikkita ro'yxatning bir xil elementlarni o'z ichiga olishini tekshiring, tartibini hisobga olmasdan.


function arraysHaveSameElements(arr1, arr2) {
    // Code here
}

// Test case
console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 1])); // Output: true
console.log(arraysHaveSameElements([1, 2, 3], [3, 2, 2])); // Output: false



// 93. Berilgan raqamlar ro'yxatidagi elementlarning to'plam (duplikat bo'lmasligi) bo'lishini tekshiring.


function isUniqueSet(arr) {
    // Code here
}

// Test case
console.log(isUniqueSet([1, 2, 3, 4])); // Output: true
console.log(isUniqueSet([1, 2, 3, 3])); // Output: false

// 94. Berilgan raqamlar ro'yxatida ketma-ket uchta toq yoki juft son bor-yo'qligini tekshiring.


function hasThreeConsecutiveEvenOrOdd(arr) {
    // Code here
}

// Test case
console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 5, 6, 7])); // Output: false
console.log(hasThreeConsecutiveEvenOrOdd([1, 2, 3, 4, 6, 8, 7])); // Output: true



// 95. Berilgan raqamlar ro'yxatidagi elementlar ketma-ket o'sib yoki kamayib borayotganini tekshiring.


function isMonotonic(arr) {
    // Code here
 }
 
 // Test case
 console.log(isMonotonic([1, 2, 2, 3])); // Output: true
 console.log(isMonotonic([6, 5, 4, 4])); // Output: true
 console.log(isMonotonic([1, 3, 2])); // Output: false
 