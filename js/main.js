const presentationScreen = document.getElementById('presentationScreen');
const website = document.getElementById('website');
const bodyVisibl = document.querySelector('.body-overflow')

document.addEventListener('scroll', () => {
    presentationScreen.style.zIndex = '-10';
    website.style.transform = 'translateY(0%)';  
});