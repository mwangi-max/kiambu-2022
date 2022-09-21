const menuBtn = document.querySelector('.menu-btn');
const navigationMenu = document.querySelector('.main-menu');
const membersOfParliament = document.querySelector('.parliament');
const membersOfCountyAssembly = document.querySelector('.assembly');
const mps = document.querySelector('.mps');
const mcas = document.querySelector('.mcas');
const precedingElements = document.querySelectorAll('.pre');
const preloaderHeading = document.querySelector('.preloader-heading');
const preloader = document.querySelector('.preloader');
const floatingAd = document.querySelector('.floating-ad');
const closeAsideBtn = document.querySelector('.close-aside-btn');
const chevronIcons = document.querySelectorAll('.fa');
const nav = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');



window.addEventListener('load', ()=>{
    preloader.classList.add('hide');

    setTimeout(()=>{
        floatingAd.classList.add('show');
     },20000)
    
});

closeAsideBtn.addEventListener('click', ()=>{
    if(floatingAd.classList.contains('show')){
        floatingAd.classList.remove('show');
    }
})

chevronIcons.forEach(icon =>{
    icon.addEventListener('click', ()=>{
        icon.style.transform = 'rotate(180deg)';
       
    })
})




function preloaderBlink(){
    if(preloaderHeading.style.visibility === 'visible'){
        preloaderHeading.style.visibility = 'hidden';
    }
    else{
        preloaderHeading.style.visibility = 'visible';
    }
}
setInterval(() => {
    preloaderBlink();
}, 1000);


window.addEventListener('scroll', ()=>{
    let verticalScroll = window.scrollY;
    if(verticalScroll > 400 && navigationMenu.classList.contains('show')){
        navigationMenu.classList.remove('show');
        menuBtn.textContent = 'OPEN';
    }
    if(verticalScroll <= 400 && nav.classList.contains('fixed')){
        nav.classList.remove('fixed');
    }
    if(verticalScroll > 500){
        topLink.classList.add('visible');
    }
    else{
        topLink.classList.remove('visible');
    }
})



menuBtn.addEventListener('click', ()=>{
    if(!navigationMenu.classList.contains('show')){
        navigationMenu.classList.add('show');
        menuBtn.textContent = 'CLOSE';
    }
    else{
        navigationMenu.classList.remove('show');
        menuBtn.textContent = 'OPEN';
    }
})
membersOfParliament.addEventListener('click', ()=>{
    mps.classList.toggle('seen');
    if(mcas.classList.contains('seen')){
        mcas.classList.remove('seen');
    };
});

membersOfCountyAssembly.addEventListener('click', ()=>{
    mcas.classList.toggle('seen');
    if(mps.classList.contains('seen')){
        mps.classList.remove('seen');
    }
});


precedingElements.forEach(element =>{
    element.addEventListener('click', (e)=>{
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        
        const link = document.getElementById(id);
        const navHeight = nav.getBoundingClientRect().height;
        let position = link.offsetTop - navHeight;
        
        nav.classList.add('fixed');
        
        window.scrollTo({
            left:0,
            top:position,
        });
        menuBtn.textContent = 'OPEN';
        
       if(mcas.classList.contains('seen') || mps.classList.contains('seen')){
                        mcas.classList.remove('seen');
                        mps.classList.remove('seen');
                    }
                    if( navigationMenu.classList.contains('show')){
                        navigationMenu.classList.remove('show');
                    };
                   
    });
    
});
