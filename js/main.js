(() => {

const presentationScreen = document.getElementById('presentationScreen');
const wrapper = document.querySelector('.wrapper');
const animationHero = document.getElementById('animation__hero-text');
const animationHeroTeam = document.getElementById('animation__hero-team');

document.addEventListener('scroll', () => {
    animationHero.style.display = 'block';  
    animationHeroTeam.style.display = 'block';  
    if (!wrapper.classList.contains('wrapper__hidden')) {
        wrapper.classList.add('wrapper__hidden')
        setTimeout(function() {
            wrapper.style.animation = 'none'; 
        }, 1800);
        if (document.documentElement.clientWidth > 1000) return
        presentationScreen.style.inset= 'none'; 
        presentationScreen.style.height= '50%'; 
        presentationScreen.style.width= '50%'; 
    } 

    if (presentationScreen.style.zIndex = '-10') return
    presentationScreen.style.zIndex = '-10';
    setTimeout(function() {
        presentationScreen.style.display = 'none'
    }, 1900);
   
});


  // ==================================Бургер============================
  document.addEventListener('click', burgerInit)
  function burgerInit(e) {
      const burgerIcon = e.target.closest('.burger__icon')
      if (!burgerIcon) return
      if (document.documentElement.clientWidth > 1000) return
      if (!document.body.classList.contains('body--opened-menu')) {
          document.body.classList.add('body--opened-menu')
      } else {
          document.body.classList.remove('body--opened-menu')
      }
  }

})()