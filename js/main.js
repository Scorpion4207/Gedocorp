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
            setTimeout(function () {
                wrapper.style.animation = 'none';
            }, 900);
            if (document.documentElement.clientWidth > 1000) return
            presentationScreen.style.inset = 'none';
            presentationScreen.style.height = '50%';
            presentationScreen.style.width = '50%';
        }


        presentationScreen.style.zIndex = '-10';
        setTimeout(function () {
            presentationScreen.style.display = 'none'
        }, 800);

    });


    // ==================================Бургер============================
    document.addEventListener('click', burgerInit)
    function burgerInit(e) {
        
        const burgerIcon = e.target.closest('.burger__icon')
        if (!burgerIcon) return
        e.preventDefault();
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
        if (!accordionControl) return
        e.preventDefault()

        const accordionControlID = accordionControl.getAttribute('href')

        document.querySelector('.tab--show').classList.remove('tab--show')
        document.querySelector(accordionControlID).classList.add('tab--show')

        document.querySelector('.accordion--active').classList.remove('accordion--active')
        accordionControl.classList.add('accordion--active')
    }

    // ==================================Accordion============================

    const accordionLists = document.querySelectorAll('.program__accordions-body');

    accordionLists.forEach(el => {

        document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';

        el.addEventListener('click', (e) => {

           
            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control')
            if (!accordionControl) return
            e.preventDefault();
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null
            }
        });
    });


    // ==================================interface============================
    const animations = document.querySelector('.interface__inner')

    animations.addEventListener('click', toggleInterface)

    function toggleInterface(e) {
        const tablet = e.target.closest('.interface__btn-tablet')
        const pc = e.target.closest('.interface__btn-pc')

        if (!tablet && !pc) return

        if (!animations.classList.contains('interface__button-body--tablet') && e.target.closest('.interface__btn-tablet')) {
            animations.classList.remove('interface__button-body--pc')
            animations.classList.add('interface__button-body--tablet')
            
        } 
        if (!animations.classList.contains('interface__button-body--pc') && e.target.closest('.interface__btn-pc')) {
            animations.classList.remove('interface__button-body--tablet')
            animations.classList.add('interface__button-body--pc')       
        } 
    }

    // =========================Маска для телефона==================================
    
    const telInpust = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+ 7 (999) 999 99 99');
    im.mask(telInpust)

})()