

let numCart = document.querySelector(".num-cart");
let wishCart = document.querySelector(".wish-cart");
let buttonCleer=document.getElementById("Bynow");


let cartProducts = JSON.parse(localStorage.getItem("prodacts")) || [];
let wishPro = JSON.parse(localStorage.getItem("wishprodacts")) || [];
let gettotall =localStorage.getItem("totalCart") ;
let getwish =localStorage.getItem("wishTotal") ;
document.querySelector(".h-p").innerHTML="$" +getwish;




//function to clear localstorge cart
buttonCleer.onclick =()=>{
    cartProducts=[];
    localStorage.setItem("prodacts", JSON.stringify(cartProducts));
    displayCart();
}
// Function to update the cart count
function updateCartCount() {
    numCart.innerHTML = cartProducts.length;
    wishCart.innerHTML = wishPro.length;
}

// Function to delete an item from the cart
function deleteCart(index) {
    cartProducts.splice(index, 1);
    localStorage.setItem("prodacts", JSON.stringify(cartProducts));
    displayCart();
}

// Function to display cart items
function displayCart() {
    let root = document.getElementById("root");
    updateCartCount(); // Update the cart count

    if (cartProducts.length > 0) {
        root.innerHTML = cartProducts.map((item, index) => {
            let { imge, name, type, price } = item;

            return `
                <div class="details-add">
                    <div class="item-details">
                        <div class="item-img">
                            <img src="${imge}" alt="">
                        </div>
                        <div class="item-txt">
                            <h4>${name}</h4>
                            <span>${type}</span>
                        </div>
                    </div>
                    <div class="item-price">${price}</div>
                    <div class="item-count">
                        <input id="val-${index}" type="number" value="1" min="1" onchange="updateTotalPrice(${index})">
                        <button class="edit" id="edit-${index}" onclick="editItem(${index})">Edit</button>
                        <button onclick='deleteCart(${index})' class='remove'><i class='fa-solid fa-trash-can'></i></button>
                    </div>
                    <div class="item-total-price">
                        <span id="total-${index}">$${price}</span>
                    </div>
                </div>
            `;
        }).join("");
    } else {
        root.innerHTML = `
            <div class="cart-img">
                <img src="imgs/wishlist_cart/empty-cart.svg" alt="">
            </div>
        `;
    }

    // Calculate and log the total after rendering the cart
    total();
}

// Function to update total price based on quantity
function updateTotalPrice(index) {
    let quantity = document.getElementById(`val-${index}`).value;
    let price = cartProducts[index].price;
    document.getElementById(`total-${index}`).innerHTML = `$${(price * quantity).toFixed(2)}`;

    // Update the total after changing the quantity
    total();
}

// Function to handle item editing (to be implemented as needed)
function editItem(index) {
    // Implement edit functionality if needed
}

// Function to calculate the total cost of all items in the cart
function total() {
    let total = 0;
    for (let i = 0; i < cartProducts.length; i++) {
        gettotall=" ";
        localStorage.setItem("totalCart",gettotall);
        // Get the element by ID
        let totalElement = document.getElementById(`total-${i}`);
        
        // Extract the text content, remove the dollar sign, and convert it to a number
        let itemTotal = parseFloat(totalElement.innerHTML.replace('$', ''));
        
        // Add to the total sum
        total += itemTotal;
        let totalCart=total.toFixed(2);
            localStorage.setItem("totalCart",totalCart);
    }
    
    document.querySelector(".c-p").innerHTML="$" +total.toFixed(2);
    console.log(total);
}

// Initial setup
displayCart();


let loding =document.querySelector(".layer");
window.onload=()=>{
    loding.style.display="flex";
}

window.setTimeout(() => {
    loding.style.display="none";
    
}, 1000);


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