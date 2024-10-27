

let numCart = document.querySelector(".num-cart");
let wishCart = document.querySelector(".wish-cart");
let buttonCleer=document.getElementById("Clear");

// Initialize cart from localStorage or set to an empty array if not found
let cartPro = JSON.parse(localStorage.getItem("prodacts")) || [];
let wishPro = JSON.parse(localStorage.getItem("wishprodacts")) || [];
let gettotall =localStorage.getItem("totalCart") ;
let getwish =localStorage.getItem("wishTotal") ;

document.querySelector(".c-p").innerHTML="$" +gettotall;

//function to clear localstorge wishlist 
buttonCleer.onclick =()=>{
    wishPro=[];
    localStorage.setItem("prodacts", JSON.stringify(cartPro));
    displaywishlis();
}
// Function to update the cart count display
function updateCartCount() {
    numCart.innerHTML = cartPro.length;
    wishCart.innerHTML = wishPro.length;
}
updateCartCount();

// Assuming `product` is an array of products
const categories = [...new Set(product.map(item => item))];

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
        localStorage.setItem("prodacts", JSON.stringify(cartPro));
        btnp.innerHTML='Remove cart';
        btnp.classList.replace("cart-ad","cart-rem");
        console.log("Item added to cart");
    } else {
        console.log("Item already in the cart");
        cartPro=cartPro.filter(item => item.id !== itemToAdd.id);
        btnp.innerHTML='Add cart';
        btnp.classList.replace("cart-rem","cart-ad");
    }
    updateCartCount();
    // localStorage.setItem("wishprodacts", JSON.stringify(wishPro));
    
    // Update cart count display
    // deletwislhlis(a);
}
function deletwislhlis(index){
    wishPro.splice(index, 1);
    localStorage.setItem("wishprodacts", JSON.stringify(wishPro));
    displaywishlis()
}

function total() {
    let total = 0;
    for (let i = 0; i < wishPro.length; i++) {
        getwish="";
        localStorage.setItem("wishTotal",getwish)
        localStorage
        // Get the element by ID
        let totalElement = document.getElementById(`total-${i}`);
        
        // Extract the text content, remove the dollar sign, and convert it to a number
        let itemTotal = parseFloat(totalElement.innerHTML.replace('$', ''));
        
        // Add to the total sum
        total += itemTotal;
        let totalwish=total.toFixed(2);
        localStorage.setItem("wishTotal",totalwish)
    }
    document.querySelector(".h-p").innerHTML="$" +total.toFixed(2);
    console.log(total);
}

function displaywishlis(){
    let root2 = document.getElementById("root2");
    updateCartCount();
    if(wishPro.length > 0){

        root2.innerHTML=wishPro.map((ele,index)=>{
            let {imge, name, type, discount, price, id} = ele;
            return`
                    <div class="details-add"> 
                        <div class="item-details wish">
                            <div class="item-img">
                                <img src="${imge}" alt="">
                            </div>
                            <div class="item-txt">
                                <h4>${name}</h4>
                                <span>${type}</span>
                            </div>
                        </div>
                        <div class="item-price wish">
                            <span id='total-${index}'>$${price}</span>
                        </div>
                        <div class="item-total-price wish">
                            <button class="remove" onclick='deletwislhlis(${index})' id="heart"><i class="fa-solid fa-heart-crack"></i></button>
                            <button onclick='addtoCart(${index})'id="addto-${index}" class="cart-ad">Add Cart</button>
                        </div>
                    </div> 
                `;
        }).join(" ");
    }else{
        root2.innerHTML=`
        <div class="cart-img">
            <img src="imgs/wishlist_cart/pixel-heart-break-png-design-5693616.svg" alt="">
            <h3>No Items In Wish List</h3>
        </div>
        `;
    }
    total();
}
displaywishlis();

// ///////////////////////////////////////////////////////////
let loding =document.querySelector(".layer");
window.onload=()=>{
    loding.style.display="flex";
}

window.setTimeout(() => {
    loding.style.display="none";
},1000)


// //////////////////////NAV
let openMenu=document.querySelector(".menu");
let featured=document.getElementById("one");
let sale=document.getElementById("two");
let rated=document.getElementById("three");
let featured_arival=document.getElementById("one1");
let sale_arival=document.getElementById("two2");
let rated_arival=document.getElementById("three3");
let navLi= document.querySelectorAll(".nav-li");
let navLi_2= document.querySelectorAll(".nav-li-2");
// /////////////////
let next=document.querySelector(".next-turn");
let prove=document.querySelector(".prove-turn");
let trends=document.querySelector(".trends");

navLi.forEach(navlink =>{
    navlink.addEventListener("click",function(){
        document.querySelector(".active")?.classList.remove("active");
        navlink.classList.add("active");
    })
})
navLi_2.forEach(navlink =>{
    navlink.addEventListener("click",function(){
        document.querySelector(".activ")?.classList.remove("activ");
        navlink.classList.add("activ");
    })
})


openMenu.onclick=function(){
    document.querySelector(".nav-link ").classList.toggle("activ");
};