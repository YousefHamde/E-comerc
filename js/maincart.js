
// //////////////////////////////////////////////////////////////////////////////////////
// let numCart = document.querySelector(".num-cart");
// let  wishCart= document.querySelector(".wish-cart");
// let  unFeve= document.querySelector(".un-feve");
// let  Feve= document.querySelector(".feve");

// // Initialize cart from localStorage or set to an empty array if not found
// let cartPro = JSON.parse(localStorage.getItem("prodacts")) || [];
// let wishPro = JSON.parse(localStorage.getItem("wishprodacts")) || [];
// updateCartCount();

// // Assuming `product` is an array of products
// const categories = [...new Set(product.map(item => item))];

// // Function to update the cart count display
// function updateCartCount() {
//     numCart.innerHTML = cartPro.length;
//     wishCart.innerHTML = wishPro.length;
// }

// // Function to add an item to the cart
// function addtoCart(a) {

//     // Get the item to be added to the cart
//     let itemToAdd = {...categories[a]}; // Assuming `categories` is an array with product details

//     // Check if the item is already in the cart
//     let itemExists = cartPro.some(item => item.id === itemToAdd.id);

//     if (!itemExists) {
//         // Add item to cart if it doesn't already exist
//         cartPro.push(itemToAdd);
//         localStorage.setItem("prodacts", JSON.stringify(cartPro));
//         console.log("Item added to cart");
//     } else {
//         console.log("Item already in the cart");
//     }

//     // Update cart count display
//     updateCartCount();
// }
// ////////////////////////////////////////////////////////////////////////////////////////
// // Add event listener to the wishlis button to add items to the wishlis
// function addtowishlis(a){
//     document.querySelector(".un-feve").style.cssText="display:block;"
//     document.querySelector(".feve").style.cssText="display:none;"

//     let itemToAdd = {...categories[a]}; // Assuming `categories` is an array with product

//         // Check if the item is already in the cart
//         let itemExists = wishPro.some(item => item.id === itemToAdd.id);

//         if (!itemExists) {
//             // Add item to cart if it doesn't already exist
//             wishPro.push(itemToAdd);
//             localStorage.setItem("wishprodacts", JSON.stringify(cartPro));
//             console.log("Item added to cart");
//         } else {
//             console.log("Item already in the cart");
//         }

//         updateCartCount();
// }


// let main=document.getElementById("featured");
// let root =document.getElementById("root");

// let i=0;
// main.innerHTML=categories.map((item,index) =>{
//     let{imge,name,type,discount,price,id}=item;
//     return(
//         `
//         <div class="product">
//         <span class="teals">${discount}%</span>
//         <button onclick='addtowishlis(${index})' class="fev">
//         <i class="fa-solid fa-heart feve"></i>
//         <i class="fa-solid fa-heart-crack un-feve"></i>
//         </button>
//         <div>
//         <img src="${imge}" alt="">
//         </div>
//         <div>
//         <span>$${price}</span>
//         <small>${name}</small>
//         <p>${type}</p>
//         </div>
//         <button onclick='addtoCart(${index})' class='add'> Add Cart</button>
//         </div>
//         `
//     )
// }).join('');
// //////////////////////////////////////////////////////////////////
let numCart = document.querySelector(".num-cart");
let wishCart = document.querySelector(".wish-cart");
let unFeve = document.querySelector(".un-feve");
let Feve = document.querySelector(".feve");
let butonadd=document.querySelector(".pop");

// Initialize cart from localStorage or set to an empty array if not found
let cartPro = JSON.parse(localStorage.getItem("prodacts")) || [];
let wishPro = JSON.parse(localStorage.getItem("wishprodacts")) || [];
let gettotall =localStorage.getItem("totalCart") ;
let getwish =localStorage.getItem("wishTotal") ;
document.querySelector(".c-p").innerHTML="$" +gettotall;
document.querySelector(".h-p").innerHTML="$" +getwish;


updateCartCount();

// Assuming `product` is an array of products
const categories = [...new Set(product.map(item => item))];

// Function to update the cart count display
function updateCartCount() {
    numCart.innerHTML = cartPro.length;
    wishCart.innerHTML = wishPro.length;
}

// Function to add an item to the cart
function addtoCart(a) {
    // Get the item to be added to the cart
    let itemToAdd = {...categories[a]}; // Assuming `categories` is an array with product details

    // Check if the item is already in the cart
    let itemExists = cartPro.some(item => item.id === itemToAdd.id);

    let btnp= document.getElementById(`addto-${a}`);
    if (!itemExists) {
        // Add item to cart if it doesn't already exist
        cartPro.push(itemToAdd);
        btnp.innerHTML='Remove cart';
        btnp.classList.replace("add","remov");
        localStorage.setItem("prodacts", JSON.stringify(cartPro));
        console.log("Item added to cart");
    } else {
        console.log("Item already in the cart");
        cartPro =cartPro.filter(item => item.id !== itemToAdd.id);
        btnp.innerHTML='Add cart';
        btnp.classList.replace("remov","add");
        localStorage.setItem("prodacts", JSON.stringify(cartPro));
    }

    // Update cart count display
    updateCartCount();
}
// /////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////

// Function to add an item to the wishlist
function addtowishlis(a) {
    // Get the item to be added to the wishlist
    let itemToAdd = {...categories[a]}; // Assuming `categories` is an array with product

    // Check if the item is already in the wishlist
    let itemExists = wishPro.some(item => item.id === itemToAdd.id);

    if (!itemExists) {
        // Add item to wishlist if it doesn't already exist
        wishPro.push(itemToAdd);
        localStorage.setItem("wishprodacts", JSON.stringify(wishPro)); // Fixed this line
        console.log("Item added to wishlist");
        
        // Toggle the wishlist icons
        document.querySelectorAll('.fev')[a].querySelector(".feve").style.display = "none";
        document.querySelectorAll('.fev')[a].querySelector(".un-feve").style.display = "block";
    } else {
        console.log("Item already in the wishlist");
        
        // Optionally, you could remove the item from the wishlist if it's clicked again
        wishPro = wishPro.filter(item => item.id !== itemToAdd.id);
        localStorage.setItem("wishprodacts", JSON.stringify(wishPro));
        
        // Toggle the wishlist icons
        document.querySelectorAll('.fev')[a].querySelector(".feve").style.display = "block";
        document.querySelectorAll('.fev')[a].querySelector(".un-feve").style.display = "none";
    }

    updateCartCount();
}

let main = document.getElementById("featured");
let root = document.getElementById("root");

let i = 0;
main.innerHTML = categories.map((item, index) => {
    let {imge, name, type, discount, price, id} = item;
    
    // Determine if the item is in the wishlist
    let isInWishlist = wishPro.some(prod => prod.id === id);
    
    return `
        <div class="product">
            <span class="teals">${discount}%</span>
            <button onclick='addtowishlis(${index})' class="fev">
                <i class="fa-solid fa-heart feve" style="display: ${isInWishlist ? 'none' : 'block'};"></i>
                <i class="fa-solid fa-heart-crack un-feve" style="display: ${isInWishlist ? 'block' : 'none'};"></i>
            </button>
            <div>
                <img src="${imge}" alt="">
            </div>
            <div>
                <span>$${price}</span>
                <small>${name}</small>
                <p>${type}</p>
            </div>
            <button onclick='addtoCart(${index})' class='add ' id='addto-${index}'> Add Cart</button>
        </div>
    `;
}).join('');



// total
// let totalCart=localStorage.parse(localStorage.getItem("totalCart"));
// document.querySelector(".c-p").innerHTML="$" + totalCart;
