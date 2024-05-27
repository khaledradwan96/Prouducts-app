var pName = document.getElementById('pName');
var pPrice = document.getElementById('pPrice');
var pCategory = document.getElementById('pCategory');
var pImage = document.getElementById('pImage');
var pDesc = document.getElementById('pDesc');

var searchInput = document.getElementById('searchInput');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var clearBtn = document.getElementById('clearBtn')


var productContainer;
if(localStorage.getItem('products') === null){  // user is new
    productContainer = []
    }else{ // user have storage data
    productContainer = JSON.parse(localStorage.getItem('products'));
    displayProduct(productContainer);
    };           


function addProduct(){
   var product = {
        name : pName.value,
        price: pPrice.value,
        category: pCategory.value,
        image: `images/${pImage.files[0]?.name}`,
        desc: pDesc.value
   };

   clearForm()
   productContainer.push(product);
   localStorage.setItem('products', JSON.stringify(productContainer))
   displayProduct(productContainer)

   clearBtn.classList.remove("d-none")
};

function clearForm(){
    pName.value = null;
    pPrice.value = null;
    pCategory.value = null;
    pImage.value = null;
    pDesc.value = null;    
}

function displayProduct(arr){
    var cartona = "";
for(var i=0; i<arr.length; i++){
cartona += `
<div class="col-md-4"">
    <div class="product border border-2 shadow p-3 rounded-3">
        <img src="${arr[i].image}" class="w-100" alt="product-image">
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

function deleteProduct(index){
    console.log(index) // for get index of click
    productContainer.splice(index, 1) // for delete the index
    localStorage.setItem('products', JSON.stringify(productContainer)) 
    // to change localStorage
    displayProduct(productContainer) // to display product in the page

    if(productContainer.length == 0){
        clearBtn.classList.add("d-none")
    }
};

function search(){
    var term = searchInput.value;
    var box=[];
    for(var i=0; i<productContainer.length; i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())){
            box.push(productContainer[i])
        }
    }
    displayProduct(box)
};


var updateIndex;

function getValues(index){
    console.log(index)
    updateIndex = index
    pName.value = productContainer[index].name
    pPrice.value = productContainer[index].price
    pCategory.value = productContainer[index].category
    // pImage.value = productContainer[index].image
    pDesc.value = productContainer[index].desc

    addBtn.classList.add("d-none")
    updateBtn.classList.remove("d-none")
};

function updateProduct(updateIndex){
    productContainer[updateIndex].name = pName.value
    productContainer[updateIndex].price = pPrice.value
    productContainer[updateIndex].category = pCategory.value
    // pImage[updateIndex].image = pImage.value
    productContainer[updateIndex].desc = pDesc.value

    displayProduct(productContainer);
    localStorage.setItem('products', JSON.stringify(productContainer))
    clearForm()

    addBtn.classList.remove("d-none")
    updateBtn.classList.add("d-none")
};


function clearAll(){
    localStorage.clear();
    productContainer = [];
    displayProduct(productContainer)
    clearBtn.classList.add("d-none")
};
if(productContainer.length !== 0){
    clearBtn.classList.remove("d-none")
}


function validateInputs(element){
    // console.log(element.id)
    var regex = {
        pName: /^[A-Z][a-z]{3,5}$/,
        pPrice: /^[1-9][0-9]{3}$/,
        pCategory: /^(Tv|laptop|screen|mobile)$/,
        pDesc: /^.{6}$/
    }
    // console.log(regex[element.id]);
    if(regex[element.id].test(element.value)){
        console.log("match")
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
    }else{
        console.log("no match");
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
    }
}