// count even numbers from 1 to 100
let count = 0;
for (let i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    count++;
  }
}
console.log(`The number of even numbers from 1 to 100 is ${count}`);
// The number of even numbers from 1 to 100 is 49

// Print Fizz for even and Buzz for odd number between 1-100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("FIZZ");
  } else {
    console.log("BUZZ");
  }
}

// How to use continue for loops?
for (let i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    continue; //skip even numbers
  }
  console.log(i); //print odd numbers
}

//   Multiple table of any number
function multiplication(num1, num2) {
  for (let i = 0; i <= num2; i++) {
    console.log(`${num1}x${i}=${num1 * i}`);
  }
}
multiplication(2, 5);

// Functions
function Name(name, age, soo) {
  console.log("my name is " + name);
  console.log("i am " + age + " old");
  console.log("I am from " + soo + " state,Nigeria");
}

Name("kenny", "25", "Imo");

// Program that encode an alphabet with corresponding alphabet in reverse order
alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const reverse = (alpha) => {
  rIndex = 25 - alphabet.indexOf(alpha);
  return alphabet[rIndex];
};
function reverseWord(word) {
  wordOutput = "";
  for (const element of word) {
    if (alphabet.includes(element)) {
      wordOutput += reverse(element);
    } else wordOutput += element;
  }
  return wordOutput;
}

console.log(reverseWord("how are you"));

// decoded function
const decodeReversedWord = (word) => {
  decodedOutput = "";
  for (const element of word) {
    if (alphabet.includes(element)) {
      decodedOutput += reverse(element);
    } else {
      decodedOutput += element;
    }
  }
  return decodedOutput;
};

const encodedWord = "sld ziv blf";
console.log("Encoded Word: ", encodedWord);
console.log("Decoded Word: ", decodeReversedWord(encodedWord));

//   Return Key
function getKeyByValue(object, value) {
  for (let key in object) {
    if (object[key] === value) return key;
  }
}

let returnWord = [];
