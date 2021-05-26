const showMenu = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.menu__link');
    const expandLink = document.querySelector('.brands-link');
    const expandIcon = document.querySelector('.brands-link>.fa-angle-down');
    const nestedList = document.querySelector('.brands>.menu__list');
    const nestedLinks = document.querySelectorAll('.brands .menu__list .menu__link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');
        nav.classList.toggle('menu--active');

        for(let i=0; i<navLinks.length; i++){
            if(navLinks[i].style.animation){
                navLinks[i].style.animation = '';
            }
            else{
                navLinks[i].style.animation = `nav-links-show 0.5s ease both ${i / navLinks.length}s`;
            }
        }

        if(!nav.classList.contains('menu--active')){
            expandIcon.classList.remove('rotate');
            nestedList.classList.remove('menu__list--active');
        }

        expandLink.addEventListener('click', () => {
            expandIcon.classList.toggle('rotate');
            nestedList.classList.toggle('menu__list--active');

            for(let i=0; i<nestedLinks.length; i++){
                nestedLinks[i].style.animationDelay = `${i / navLinks.length}s`;
            }
       })
    })
}

const styleHeaderOnScroll = () => {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const logo = document.querySelector('.hero-holder__hero');
        const burger = document.querySelector('.burger');
        const utilAnchorLinks = document.querySelectorAll('.utility-section__link');
        const scrollVal = window.scrollY;   
        const mediaQuery = window.matchMedia('(min-width:  960px)');
        const menuLink = document.querySelectorAll('.menu__link');
        const nestedMenu = document.querySelector('.brands>.menu__list');

        if(scrollVal > 50){
            header.classList.add('header--scrolled');
            logo.src = './images/logo-white.png';
            burger.classList.add('burger--scrolled');
           
            for(let i=0; i<utilAnchorLinks.length;i++){
                utilAnchorLinks[i].classList.add('utility-section__link--scrolled');
            }
            if (mediaQuery.matches){
                for(let i=0; i<menuLink.length; i++){
                    menuLink[i].classList.add('menu__link--scrolled');
                }
                nestedMenu.classList.add('menu__list--scrolled');
            }   
        }
        else{
            header.classList.remove('header--scrolled');
            logo.src = './images/logo.png';
            burger.classList.remove('burger--scrolled');
        
            for(let i=0; i<menuLink.length; i++){
                menuLink[i].classList.remove('menu__link--scrolled');
            }
            nestedMenu.classList.remove('menu__list--scrolled');
            for(let i=0; i<utilAnchorLinks.length;i++){
                utilAnchorLinks[i].classList.remove('utility-section__link--scrolled');
            }
        }

    });
}

const showSearch = () => {
    const searchIcon = document.querySelector('.utility-section__link>.utility-section__search+.fa-search');
    const searchForm = document.querySelector('.utility-section__search');
    const closeSearching = document.querySelector('.utility-section__search>.fa-arrow-left');
    const headerHeight = document.querySelector('.header').offsetHeight + 'px';
 
    searchIcon.addEventListener('click', () => {
        searchForm.classList.add('utility-section__search--show');
    })
    closeSearching.addEventListener('click', () => {
        searchForm.classList.remove('utility-section__search--show');
    })
}

(function(){
    showMenu();
    styleHeaderOnScroll();
    showSearch();
})();