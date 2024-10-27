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
let up =document.querySelector(".up");
// slider two
// next.addEventListener("click",()=>{
//     trends.style.cssText="transform: translateX(calc());";
// })

// end slider two
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


featured.onclick=function(){
document.querySelector(".one").style.cssText="margin-left:0;";
};
sale.onclick=function(){
document.querySelector(".one").style.cssText="margin-left:-21%";
};
rated.onclick=function(){
document.querySelector(".one").style.cssText="margin-left:-41.6%;";
};
featured_arival.onclick=function(){
document.querySelector(".two").style.cssText="margin-left:0px";

};
sale_arival.onclick=function(){
document.querySelector(".two").style.cssText="margin-left:-20.5%";
};
rated_arival.onclick=function(){
document.querySelector(".two").style.cssText="margin-left:-41%;";
};

openMenu.onclick=function(){
    document.querySelector(".nav-link ").classList.toggle("activ");
};
let count=1;
setInterval(function(){
    document.getElementById('radio' + count).checked=true;
    count++;
    if(count>3){
        count=1;
    }
},4000);

let countNumn=1;
let on=0;
let dd= setInterval(function(){ 
    
    document.querySelectorAll(".new-slides input[type='radio']").forEach((r) => {
        r.checked = false;
    });
    let label=document.querySelectorAll(".navegation-manual .manual-btn");
    if(on ==0){
        label[4].classList.remove("actt");
    }
    label[on].classList.add("actt");
    if (on > 0) {
        label[on-1].classList.remove("actt");
    }
    
    document.getElementById('radi' + countNumn).checked=true;
    
    countNumn++;
    on++;
    if(on > 4){
        on=0;
    }
    
    if(countNumn > 5){
        // label[4].classList.remove("actt")
        countNumn = 1;
        // label[0].classList.add("actt");
    }
},2000);

let px=200;
let pn=0;
let p=0;
let pr=0;

next.addEventListener('click',()=>{
    ++p;
    if(p >= 0 && p < 5){
        pn +=px;
    }
    trends.style.cssText=`left:${-pn}px;`;
})
prove.addEventListener('click',()=>{
    --p;
    if(p >= 0 && p <= 5){
        pn -=px;
    }
    trends.style.cssText=`right:${pn}px;`;
})
let loding =document.querySelector(".layer");
window.onload=()=>{
    loding.style.display="flex";
}

window.setTimeout(() => {
    loding.style.display="none";
    
}, 1000);

window.onscroll =()=>{
    
    if(this.scrollY >= 1000) {
        up.classList.add("show") 
    }else{
        up.classList.remove("show") ;
    }
}
up.onclick=()=>{
    window.scrollTo({top:0,behavior:"smooth"})
}