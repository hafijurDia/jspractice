const addProduct = () => {
  const productField = document.getElementById('product-name');
  const quantityField = document.getElementById('product-quantity');
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = '';
  quantityField.value = '';
  showproduct(product,quantity)

  saveProductToLocalStorage(product,quantity);
 }

 const showproduct = (product, quantity) => {
    const productWrap = document.getElementById('product-conatiner');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    productWrap.appendChild(li);
 }

 const getProductFromLocalStorage = () => {
    let cart = {};
    const storeCart = localStorage.getItem('cart');
    if (storeCart) {
        cart = JSON.parse(storeCart);
    }
    return cart;
 }

 const saveProductToLocalStorage = (product, quantity) => {
    const cart = getProductFromLocalStorage();
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);

 }

 const displayProductsFromLocalStorage = () => {
    const savedProduct = getProductFromLocalStorage();
    for (const product in savedProduct) {
        const quantity = savedProduct[product]
        console.log(product,quantity);
        showproduct(product,quantity)
    }

 }
 displayProductsFromLocalStorage();

 //js prompt functinality
 const promptFunction = () => {
    let getValue = prompt("please enter number","0");
    if (getValue != null) {
       const valueParse = parseInt(getValue) + 200;
       document.getElementById('prompt-result').innerText = valueParse;
       
    }
 }

 //js confirmed functionality
 const confirmFunciton = () => {
    let text = "Do you want to see website location?\nEither Confirm or Cancel.";
    if (confirm(text) == true) {
        text = window.location;
      } else {
        text = "You canceled!";
      }
      document.getElementById("confirm-message").innerHTML = text;
 }

 //set object in local storage
 const addObject = () => {
    const firstNameField = document.getElementById('first-name');
    const lastNameField = document.getElementById('last-name');
    const firstName = firstNameField.value;
    const lastName = lastNameField.value;
    
    firstNameField.value = "";
    lastNameField.value= "";
    showName(firstName,lastName);
    saveNameInLocalStorage(firstName,lastName);

 }

 const showName = (firstName, lastName) => {
    const nameWrap = document.getElementById('name-conatiner');
    const li = document.createElement('li');
    li.innerText = `${firstName} ${lastName}`;
    nameWrap.appendChild(li);
 }
 const getNameFromLocalStorage = () => {
    let object = {};
    const getObject = localStorage.getItem('object');
    if (getObject) {
        object = JSON.parse(getObject);
    }
    return object;
 }

 const saveNameInLocalStorage = (firstName, lastName) => {
    const object = getNameFromLocalStorage();
    object[firstName] = lastName;
    const strinifyObject = JSON.stringify(object);
    localStorage.setItem('object',strinifyObject);
 }