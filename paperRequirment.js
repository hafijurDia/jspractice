function paperRequirements(firstbook,secondbook,thirdbook){
    const firstBookTotalPage = firstbook * 100;
    const secondtBookTotalPage = secondbook * 200;
    const thirdBookTotalPage = thirdbook * 300;
    return firstBookTotalPage + secondtBookTotalPage  + thirdBookTotalPage
}
const totalbookpage =  paperRequirements(2,3,4);
console.log('total book page: ' + totalbookpage);