var productNameInput = document.getElementById('pName');
var productPriceInput = document.getElementById('pPrice');
var productCategoryInput = document.getElementById('pCategory');
var productImageInput = document.getElementById('pImage');
var productDescInput = document.getElementById('pDesc');
var searchInput = document.getElementById('searchInput');

var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');


var productContainer;
if(localStorage.getItem('products') === null){  // user is new
    productContainer = []
    }else{ // user have storage data
    productContainer = JSON.parse(localStorage.getItem('products'));
    displayProduct(productContainer);
    };           


function addProduct(){
   var product = {
    name : productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    image: `images/${productImageInput.files[0]?.name}`,
    desc: productDescInput.value
   };

   clearForm()
   productContainer.push(product);
   localStorage.setItem('products', JSON.stringify(productContainer))
   displayProduct(productContainer)
};

function clearForm(){
    productNameInput.value = null;
    productPriceInput.value = null;
    productCategoryInput.value = null;
    productImageInput.value = null;
    productDescInput.value = null;    
}

function displayProduct(arr){
    var cartona = "";
for(var i=0; i<arr.length; i++){
cartona += `
<div class="col-md-4"">
    <div class="product border border-2 shadow p-3 rounded-3">
        <img src="${arr[i].image}" class="w-100" alt="">
        <h2 class="h4 fw-bold mt-3">${arr[i].name}</h2>
        <p class="text-secondary">${arr[i].desc}</p>
        <h3 class="h5"><span class="fw-bold">Price: </span>${arr[i].price}</h3>
        <h3 class="h5"><span class="fw-bold">Category: </span>${arr[i].category}</h3>
        <button onclick="deleteProduct(${i})" class="btn btn-outline-danger mb-2"> 
            <i class="fa-solid fa-delete-left"></i> Delete</button>
        <button  onclick="getValues(${i})" class="btn btn-outline-warning mb-2">
            <i class="fa-solid fa-edit"></i> Update</button>
    </div>
</div>`
}
document.getElementById("myRow").innerHTML = cartona
};

function clearAll(){
    localStorage.clear();
    productContainer = [];
    document.getElementById("myRow").innerHTML = ""
};

function deleteProduct(index){
    console.log(index) // for get index of click
    productContainer.splice(index, 1) // for delete the index
    localStorage.setItem('products', JSON.stringify(productContainer)) 
    // to change localStorage
    displayProduct(productContainer) // to display product in the page
};

function search(){
    var term = searchInput.value;
    var cartona = "";
    var box=[];
    for(var i=0; i<productContainer.length; i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())){
            cartona += `
            <div class="col-md-4"">
                <div class="product border border-2 shadow p-3 rounded-3">
                    <img src="${productContainer[i].image}" class="w-100" alt="">
                    <h2 class="h4 fw-bold mt-3">${productContainer[i].name.replace(term, '<span class="bg-warning">'+term+'</span>')}</h2>
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
    }
    document.getElementById("myRow").innerHTML = cartona
};


function getValues(index){
    console.log(index)
    updateIndex = index
    productNameInput.value = productContainer[index].name
    productPriceInput.value = productContainer[index].price
    productCategoryInput.value = productContainer[index].category
    // productImageInput.value = productContainer[index].image
    productDescInput.value = productContainer[index].desc

    addBtn.classList.add("d-none")
    updateBtn.classList.remove("d-none")
};

var updateIndex;

function updateProduct(updateIndex){
    productContainer[updateIndex].name = productNameInput.value
    productContainer[updateIndex].price = productPriceInput.value
    productContainer[updateIndex].category = productCategoryInput.value
    // productImageInput[updateIndex].image = productImageInput.value
    productContainer[updateIndex].desc = productDescInput.value

    displayProduct(productContainer);
    localStorage.setItem('products', JSON.stringify(productContainer))
    clearForm()

    addBtn.classList.remove("d-none")
    updateBtn.classList.add("d-none")
};