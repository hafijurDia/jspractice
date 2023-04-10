function paperRequirements(firstbook,secondbook,thirdbook){
    const firstBookTotalPage = firstbook * 100;
    const secondtBookTotalPage = secondbook * 200;
    const thirdBookTotalPage = thirdbook * 300;
    return firstBookTotalPage + secondtBookTotalPage  + thirdBookTotalPage
}
const totalbookpage =  paperRequirements(2,3,4);
// console.log('total book page: ' + totalbookpage);

// find a best friend
function bestFriend(friendarray){
    let biggest = '';
    for (let i = 0; i < friendarray.length; i++) {
        if (friendarray[i].length > biggest.length) {
            biggest = friendarray[i];
        }
    }
    return biggest;
    
}
const friends = ["Alice", "Bob", "Charlie", "Dave", "Emily"];
const result =  bestFriend(friends);
//console.log(result);

function getPositiveNumbers(numbers) {
    const positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= 0) {
        positiveNumbers.push(numbers[i]);
      } else {
        break;
      }
    }
    return positiveNumbers;
  }

const numbers = [5, 10, 15, -20, 25, 30];
const positiveNumbers = getPositiveNumbers(numbers);
console.log(positiveNumbers); // Output: [5, 10, 15]