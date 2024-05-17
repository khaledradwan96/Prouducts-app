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

   productContainer.push(product);
   console.log(productContainer)

   clearForm()
}

function clearForm(){
    productNameInput.value = null;
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productImageInput.value = null;
    productDescInput.value = null;    
}


// json
var newArr = [
    {name: "nokia", price: "2000", category: "Tv", image: "honoe.webp", desc: "asss"},
    {name: "phone", price: "2000", category: "Tv", image: "honoe.webp", desc: "asss"},
    {name: "Oppo", price: "2000", category: "Tv", image: "honoe.webp", desc: "asss"},
    {name: "iphone", price: "2000", category: "Tv", image: "honoe.webp", desc: "asss"},

]

var box = ''
for(var i=0; i<newArr.length; i++){
    box += `
    <h2>${newArr[i].name}</h2>
    <p>${newArr[i].price}</p>`
}
console.log(box)