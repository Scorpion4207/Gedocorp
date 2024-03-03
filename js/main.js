(() => {

const presentationScreen = document.getElementById('presentationScreen');
const website = document.getElementById('website');

document.addEventListener('scroll', () => {
    presentationScreen.style.zIndex = '-10';
    website.style.transform = 'translateY(0%)';  
    setTimeout(function() {
        presentationScreen.style.display = 'none';
      }, 200);
});

})()