var productNameInput = document.getElementById('pName');
var productPriceInput = document.getElementById('pPrice');
var productCategoryInput = document.getElementById('pCategory');
var productImageInput = document.getElementById('pImage');
var productDescInput = document.getElementById('pDesc');
var productContainer = [];                                

function addProduct(){
   var product = {
    name : productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    image: 'phone.webp',
    desc: productDescInput.value
   };
   console.log(product);

   productContainer.push(product);
   console.log(productContainer)
}