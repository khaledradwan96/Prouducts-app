var productNameInput = document.getElementById('pName');
var productPriceInput = document.getElementById('pPrice');
var productCategoryInput = document.getElementById('pCategory');
var productImageInput = document.getElementById('pImage');
var productDescInput = document.getElementById('pDesc');

var productContainer;
if(localStorage.getItem('products') === null){  // user is new
    productContainer = []
    }
    else{ // user have storage data
    productContainer = JSON.parse(localStorage.getItem('products'));
    displayProduct();
    }            


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
   localStorage.setItem('products', JSON.stringify(productContainer))
   displayProduct()
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
cartona += `
<div class="col-md-4" id="product${i+1}">
    <div class="product border border-2 shadow p-3 rounded-3">
        <img src="images/phone1.webp" class="w-100" alt="phone">
        <h2 class="h4 fw-bold mt-3">${productContainer[i].name}</h2>
        <p class="text-secondary">${productContainer[i].desc}</p>
        <h3 class="h5"><span class="fw-bold">Price: </span>${productContainer[i].price}</h3>
        <h3 class="h5"><span class="fw-bold">Category: </span>${productContainer[i].category}</h3>
        <button onclick="deleteProduct(${i})" class="btn btn-outline-danger mb-2"> 
            <i class="fa-solid fa-delete-left"></i> Delete</button>
        <button class="btn btn-outline-warning mb-2">
            <i class="fa-solid fa-edit"></i> Update</button>
    </div>
</div>`
}
document.getElementById("myRow").innerHTML = cartona
}

function clearAll(){
    localStorage.clear();
    productContainer = [];
    document.getElementById("myRow").innerHTML = ""
}

function deleteProduct(index){
    console.log(index) // for get index of click
    productContainer.splice(index, 1) // for delete the index
    localStorage.setItem('products', JSON.stringify(productContainer)) 
    // to change localStorage
    displayProduct() // to display product in the page
}