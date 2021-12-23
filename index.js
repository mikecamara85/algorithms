// Algorithm Library

//

// ***1. Frequency Counter***
//
// slow way:

const slowSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};
//
// console.log(slowSame([1, 2, 5, 3, 2], [1, 4, 9, 4])); // fakse
// console.log(slowSame([1, 2, 3, 2], [1, 4, 9, 4])); // true
// console.log(slowSame([1, 2, 3, 2], [1, 4, 10, 4])); // false
// console.log(slowSame([1, 2, 3, 2], [1, 1, 10, 4])); // false
//
// fast way:

const fastSame = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};
//
// console.log(fastSame([1, 2, 5, 3, 2], [1, 4, 9, 4])); // fakse
// console.log(fastSame([1, 2, 3, 2], [1, 4, 9, 4])); // true
// console.log(fastSame([1, 2, 3, 2], [1, 4, 10, 4])); // false
// console.log(fastSame([1, 2, 3, 2], [1, 1, 10, 4])); // false
//

// another fast application

const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    if (!lookup[letter]) {
      // this works because 0 is falsy
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};
//
// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("rat", "car")); // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true
//

// ***2. Multiple Pointers***
//
// note: both sumZero functions here accept a PRE-SORTED array
// slow way:

const slowSumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// console.log(slowSumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
//
// fast way:

const fastSumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// console.log(fastSumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
//

// another fast application:

const countUniqueValues = (arr) => {
  // here, we are allowed to modify the array
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));
//

// ***3. Sliding Window Pattern***
//
// slow way:
