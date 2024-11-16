const cart=document.querySelector(".cart")
const cardbox=document.querySelector(".carts")
const close=document.querySelector(".close")

cart.addEventListener("click",()=>{
    // console.log("hiii")
    cardbox.style.display="initial"
    close.style.display="initial"
    cart.style.display="none"
    // cart.style.display="none"
})
close.addEventListener("click",()=>{
    
    cardbox.style.display="none"
    close.style.display="none"
    cart.style.display="initial"
})