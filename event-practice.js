// let x = document.getElementsByTagName("h2");
// for (let i = 0; i < x.length; i++) {
//     x[i].style.color = "red";
    
// }
// document.getElementById('backpack').style.backgroundColor = "tomato";

// const card = document.querySelectorAll(".card");
// for (let i = 0; i < card.length; i++) {
//     card[i].style.borderRadius = "30px";
// }

// const buynow = document.querySelectorAll(".panda-btn-buy-now");
// for (let i = 0; i < buynow.length; i++) {
//    buynow[i].addEventListener("click", function(e){
//     let target = e.target;
//     target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
//   });
    
// }

// const emailSubmit = document.querySelector('.email-submit');
// const emailInput = document.querySelector('#exampleInputEmail1');
// emailSubmit.setAttribute('disabled', '');
// emailInput.addEventListener('keyup',function(e){
//     if (e.target.value == 'email') {
//         emailSubmit.removeAttribute('disabled', '');
//     }else{
//         emailSubmit.setAttribute('disabled', '');
//     }
// })


const cardImage = document.querySelector('.card-image');
cardImage.addEventListener('mouseover',function(){
    cardImage.src = "images/shoes/shoe-2.png";
})
cardImage.addEventListener('mouseout',function(){
    cardImage.src = "images/shoes/shoe-1.png";
})

const emailInput = document.querySelector('#exampleInputEmail1');
emailInput.addEventListener('dblclick',function(e){
    e.target.style.backgroundColor = "red";
})