let toggle = document.getElementById('toggle');
navLinks = document.querySelector('.nav-links');

toggle.onclick = function(){
    toggle.classList.toggle('active');
}


toggle.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-links-change-position');
});



document.addEventListener('click', (element)=>{
    if(element.target.id !== 'toggle' && element.target.classList !== 'navbar'){
        toggle.classList.remove('active');
        navLinks.classList.remove('nav-links-change-position');
    }
});


