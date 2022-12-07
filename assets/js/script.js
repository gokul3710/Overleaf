let navOpenBtn = document.getElementById('nav-open');
let navCloseBtn = document.getElementById('nav-close');
let nav = document.getElementById('nav-menu');


navOpenBtn.addEventListener('click', ()=>{
    navOpenBtn.style.display = "none";
    navCloseBtn.style.display = "block";
    nav.style.display = "flex";
})

navCloseBtn.addEventListener('click', ()=>{
    navOpenBtn.style.display = "block";
    navCloseBtn.style.display = "none";
    nav.style.display = "none";

})
