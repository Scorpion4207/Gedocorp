(() => {

const presentationScreen = document.getElementById('presentationScreen');
const website = document.getElementById('website');
const animationHero = document.getElementById('animation__hero-text');
const animationHeroTeam = document.getElementById('animation__hero-team');

document.addEventListener('scroll', () => {
    presentationScreen.style.zIndex = '-10';
    website.style.transform = 'none';  
    setTimeout(function() {
        presentationScreen.style.display = 'none'
    }, 200);
    animationHero.style.display = 'block';  
    animationHeroTeam.style.display = 'block';  
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