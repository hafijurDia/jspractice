//===================Problem 1 ====================
function mindGame(number) { 
    if (number <= 0 && typeof number !== 'number') {
        const error = 'Please input a number';
        return error;
    }else{
        const multipication = number * 3;
        const sum = multipication + 10;
        const division = sum / 2;
        const minus = division - 5;
        return minus;
    }
 }
mindGame(5);

 //==============Problem 2 =================
 function evenOdd(mystring){
    const totalCharacter = mystring.length;
    if (typeof mystring !== 'string') {
        const error = 'Please input a string';
        return error;
    }
    else if (totalCharacter % 2 !==0) {
        return 'odd';
    }else{
        return 'even';
    }
 }
const mystring = 'Phero';
evenOdd(mystring);

  //=================Problem 3 ==============
  function isLGSeven(myNumber){
    const differanceWith7 = myNumber - 7;
    if (typeof myNumber !== 'number' ) {
        const error = 'Please input a number';
        return error;
    }else if (differanceWith7 < 7) {
        return differanceWith7;
    }else{
        return myNumber * 2;
    }

  }
const myNumber = -15;
isLGSeven(myNumber);

//==================Problem 4 ======================
function findingBadData(numberArray){
    const badData = [];
    for (let i = 0; i < numberArray.length; i++) {
        const element = numberArray[i];
        if (element < 0) {
            badData.push(element);
        }
        totalBadData = badData.length
    }
    return totalBadData;
}
const numberArray =  [ 2, -5, -7, -13 ];
findingBadData(numberArray);

//===================Problem 5 ====================
function gemsToDiamond(gems1,gems2,gems3){ 
    const firstFriendGemsPower = gems1 * 21;
    const secondFriendGemsPower = gems2 * 32;
    const thirdFriendGemsPower = gems3 * 43;
    const totalGemsPower = firstFriendGemsPower + secondFriendGemsPower + thirdFriendGemsPower;
    if (typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number'  ) {
        const error = 'Please input number';
        return error;
    }else if (totalGemsPower > 1000 * 2) {
        return totalGemsPower - 2000;
    }else{
        return totalGemsPower;
    }
 }
 const firstFriendGems = 20;
 const secondFriendGems = 200;
 const thirdFriendGems = 50;
gemsToDiamond(firstFriendGems,secondFriendGems,thirdFriendGems);
