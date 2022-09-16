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


precedingElements.forEach(element =>{
    element.addEventListener('click', ()=>{
        if(mcas.classList.contains('seen') || mps.classList.contains('seen')){
            mcas.classList.remove('seen');
            mps.classList.remove('seen');
        }
    })
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
})