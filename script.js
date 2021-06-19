const mobile_Btn = document.getElementById('mobile-cta')
      nav = document.querySelector('nav')
      mobile_Btn_Exit = document.getElementById('mobile-exit');

mobile_Btn.addEventListener('click', () =>{
    nav.classList.add('menu-btn');
})

mobile_Btn_Exit.addEventListener('click', () =>{
    nav.classList.remove('menu-btn');
})