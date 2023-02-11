// .map()

const myArray = [2, 5, 17, 37, 8, 12, 24];

// let usingMap = myArray.map((x) => x * 2);
// console.log(usingMap);

const multiplyByTwo = (arrInput) => {
  let blankArray = [];
  for (let i = 0; i < arrInput.length; i++) {
    let newNumber = arrInput[i] * 2;
    blankArray.push(newNumber);
  }
  console.log(blankArray);
};

// console.log(multiplyByTwo(myArray));

// *************************************************************************************************

//.reduce()

const addingValues = (arr1) => {
  let totalValue = 0;
  for (let i = 0; i < arr1.length; i++) {
    totalValue = totalValue + arr1[i];
  }
  console.log(totalValue);
};

// console.log(addingValues(myArray));

// *************************************************************************************************

//.filter()
let filterCondition = 15;

const filteredArray = (arr1, filterBy) => {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > filterBy) {
      newArray.push(arr1[i]);
    }
  }
  console.log(newArray);
};

console.log(filteredArray(myArray, filterCondition));
