(() => {

// ==================================Present============================
    
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
        }, 900);
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

  // ==================================Tabs============================

  const accordionControls = document.querySelector('.program__accordions-body')

  accordionControls.addEventListener('click', toggleAcord)

  function toggleAcord(e) {
    
    const accordionControl = e.target.closest('.accordion')
    if(!accordionControl) return
    e.preventDefault()

    const accordionControlID = accordionControl.getAttribute('href')

    

    document.querySelector('.tab--show').classList.remove('tab--show')
    document.querySelector(accordionControlID).classList.add('tab--show')

    document.querySelector('.accordion--active').classList.remove('accordion--active')
    accordionControl.classList.add('accordion--active')

  }



})()