// 1: Function product() should return the product of any 2 given numbers
function product(x, y) {
  return x * y;
}

// 2: Function isEven() should return true/false depending whether a given number is even
function isEven(num) {
  if ( num % 2 === 0 ) {
    return true;
  } else {
    return false;
  }
}

// 3: Function maxOfTwoNumbers() should return the greater of 2 given numbers
function maxOfTwoNumbers(a, b) {
    let highestNum;
    if (a > b) { 
        highestNum = a;
    } else {
        highestNum = b;
    }
    return highestNum;
    }

// 4: Function maxOfThreeNumbers() should return the greater of 3 given numbers
function maxOfThreeNumbers(a, b, c) {
    let highestNum;
    if (a > b & a > c) { 
        highestNum = a;
    } else if (b > a && b > c){
        highestNum = b;
    } else {
      highestNum = c;
    }
  return highestNum;  
}

// 5: Function sumArray() should return the sum of an array of numbers
function sumArray(numbers) {
  for(let i in arr) { total += arr[i]; }
  return total;
}

// 6: Function maxOfArray() should return the greatest number of a non-empty array
function maxOfArray(numbers) {
  let largest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
  return largest;
}

// 7: Function longestString() should return the longest string in an array
function longestString(strings) {
  let longest= 0;
  for (i=0; i<arr.length; i++){
      if (arr[i].length > longest){
        longest= arr[i].length;
      }

  }
  return longest;
}

// 8: Function doesWordExist() should return whether a word is in the array
function doesWordExist(wordsArr, word) {
  let arrIndexer = (wordsArr.indexOf(value) > -1);
  return arrIndexer;
}

// 9: Function findUnique() should return the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let unique = [...new Set(wordsArr)];
  return unique[0];
}

// 10: Function getFullName() should return the string representing person's full name based on the provided object with first and last name as its properties. Example object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${obj.firstName} ${obj.lastName}`;
}

// 11: Function maxTwoDimArray() should return the greatest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largest = 0;

    for(let i = 0; i < arr.length; i++){ 
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > largest){
                largest = arr[i][j];
                
            }
        }
    }
    return largest;
}
