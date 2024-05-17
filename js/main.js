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

   clearForm()
   productContainer.push(product);
   displayProduct()
   console.log(productContainer)


}

function clearForm(){
    productNameInput.value = null;
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productImageInput.value = null;
    productDescInput.value = null;    
}

function displayProduct(){
    var cartona = "";

for(var i=0; i<productContainer.length; i++){
cartona += `<div class="col-md-3">
<div class="product border border-2 shadow p-3 rounded-3">
  <img src="images/phone1.webp" class="w-100" alt="phone">
  <h2 class="h4 fw-bold">Nokia</h2>
  <p class="text-secondary">Lorem, ipsum dolor.</p>
  <h3 class="h5"><span class="fw-bold">Price :</span>5000</h3>
  <h3 class="h5"><span class="fw-bold">Category :</span>mobile</h3>
  <h3 class="h5 mb-3"><span class="fw-bold">Price :</span>5000</h3>
  <button class="btn btn-outline-danger"> <i class="fa-solid fa-delete-left"></i>Delete</button>
  <button class="btn btn-outline-warning"> <i class="fa-solid fa-edit"></i>Update</button>
</div>
</div>`
    
}
console.log(cartona)
document.getElementById("myRow").innerHTML = cartona
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