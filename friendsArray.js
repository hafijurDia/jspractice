//using for loop

// const friendsNameArray = ['Sarah', 'John', 'Emily', 'David', 'Ava', 'Michael', 'Olivia', 'Ethan', 'Sophia', 'Ben'];
// const arrayFunction = (friendsNameArray) => {
//     const evenFriends = [];
//     for (let i = 0; i < friendsNameArray.length; i++) {
//         if (friendsNameArray[i].length % 2 == 0) {
//             evenFriends.push(friendsNameArray[i]);
//         }

//     }
//     return evenFriends;
// }
// const result = arrayFunction(friendsNameArray);
// console.log(result);

//using foreach loop

// const filterEvenLengthNames = (friendsArray) => {
//     const evenLengthNames = [];
//     friendsArray.forEach((name) => {
//       if (name.length % 2 === 0) {
//         evenLengthNames.push(name);
//       }
//     });
//     return evenLengthNames;
//   };
//   const friends = ['Sarah', 'John', 'Emily', 'David', 'Ava', 'Michael', 'Olivia', 'Ethan', 'Sophia', 'Ben'];
// const evenLengthNames = filterEvenLengthNames(friends);
// console.log(evenLengthNames);

//problem 3
// const arrayElements = [5,4,7,6,7,1,4,8,9,10];
// const arrayFuncion = (arrayElements) => {
//     const newArray = [];
//     for (let i = 0; i < arrayElements.length; i++) {
//         newArray.push(Math.pow(arrayElements[i],2));
//         //newArray.push(arrayElements[i] * arrayElements[i]);
//     }
//     let arraySum = 0;
//     newArray.forEach(item => {
//         arraySum += item;
//     })
//     const averageSum = arraySum / newArray.length;

//     return averageSum;
// }

// const result = arrayFuncion(arrayElements);
// console.log(result);

// const arrowFunction = (input1,input2) => {
//     const newInput = [];
//     const combineInputs = newInput.concat(input1,input2);
//     const maxNumber = Math.max(...combineInputs);
//     return maxNumber;
// }
// const input1 = [4,5,9,8];
// const input2 = [5,78,12,56];
// const result = arrowFunction(input1,input2);
// console.log(result)

// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => {
//     return accumulator + currentValue;
//   },
//   initialValue
// );

// console.log(sumWithInitial);
// Expected output: 10

// const array2 = [4,5,6,7,8,7];
// const filterFunction = array2.find(number => {
//     return number > 5;
// })
// console.log(filterFunction);

