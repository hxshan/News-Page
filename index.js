let menu_open_btn = document.querySelector(".menu-btn")
let menu_close_btn =document.querySelector(".close-btn")
let nav_items = document.querySelector("#nav-items")

menu_open_btn.addEventListener('click',function(){
    nav_items.classList.toggle("hidden")
    nav_items.classList.toggle("nav-items")
})
menu_close_btn.addEventListener('click',function(){
    nav_items.classList.toggle("nav-items")
    nav_items.classList.toggle("hidden")
})