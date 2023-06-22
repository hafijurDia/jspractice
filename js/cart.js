const addProduct = () => {
  const productField = document.getElementById('product-name');
  const quantityField = document.getElementById('product-quantity');
  const product = productField.value;
  const quantity = quantityField.value;
  productField.value = '';
  quantityField.value = '';

  showproduct(product,quantity)
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

 }