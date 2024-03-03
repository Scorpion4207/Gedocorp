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

})()