const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November'
];




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
const assemblyIcon = document.querySelector('.assembly-icon');
const parliamentIcon = document.querySelector('.parliament-icon');
const footer = document.getElementById('footer');

const years = document.querySelector('.years');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const todaysTime = document.querySelector('.todaysTime');
const ampm = document.querySelector('.amPm');

const nextDate = document.querySelector('.nextDate');
const nextTime = document.querySelector('.nextTime');

const navHeight = nav.getBoundingClientRect().height;




function countingTime(){
   
const today = document.querySelector('.todaysDate');
const todaysDay = new Date();
const todaysDate = concate(todaysDay.getDate());
const todaysWeekday = weekdays[todaysDay.getDay()];
const todaysMonth = months[todaysDay.getMonth()];
const todaysFullYear = todaysDay.getFullYear();

today.textContent = `${todaysWeekday}, ${todaysDate} ${todaysMonth} ${todaysFullYear}`

function concate(item){
if(item == 1 || item == 21 || item == 31){
    return item  = `${item}st`
}
else if(item == 2 || item == 22){
    return item = `${item}nd`;
}
else if(item == 3 || item == 23){
    return item = `${item}rd`;
}
else{
       return item = `${item}th`;
}
};

  let todaysHour = format(todaysDay.getHours());
  let todaysMinutes = format(todaysDay.getMinutes());
  let todaysSeconds = format(todaysDay.getSeconds());

   todaysTime.textContent = `${todaysHour}:${todaysMinutes}:${todaysSeconds}`
   if(todaysHour >= 12){
       ampm.textContent = 'pm';
   }
   else{
    ampm.textContent = 'am';
   };
   if(todaysHour > 12){
    todaysHour = `${todaysHour}-12`;
   };


   const futureTime = new Date(2027,7,9,06,00,00);
   const futureDay = weekdays[futureTime.getDay()];
   const futureDate = concate(futureTime.getDate());
   const futureMonth = months[futureTime.getMonth()];
   const futureFullYear = futureTime.getFullYear();
   const futureHour = format(futureTime.getHours());
   const futureMinutes = format(futureTime.getMinutes());

   nextDate.textContent = `${futureDay}, ${futureDate} ${futureMonth} ${futureFullYear}`;
   nextTime.textContent = `${futureHour}:${futureMinutes}`


   const deviation = futureTime - todaysDay;
   
//    1second = 1000ms;
//    1minute = 60seconds;
//    1hour = 60minutes;
//    1day = 24hours;
//    1year = 365days;

// one year in milliseconds;
const oneYear = 365*24*60*60*1000;

// one day in milliseconds;
const oneDay = 24*60*60*1000;

// one hour in milliseconds;
const oneHour = 60*60*1000;

// one minute in milliseconds;
const oneMinute = 60*1000;

// one second in milliseconds;
const oneSecond = 1*1000;


const yearsLeft = format(Math.floor(deviation/oneYear));

const daysLeft = format(Math.floor((deviation % oneYear)/oneDay));


const hoursLeft = format(Math.floor((deviation % oneDay)/oneHour));


const minutesLeft = format(Math.floor((deviation % oneHour)/oneMinute));


const secondsLeft = format(Math.floor((deviation % oneMinute)/oneSecond));


years.textContent = yearsLeft;
days.textContent = daysLeft;
hours.textContent = hoursLeft;
minutes.textContent = minutesLeft;
seconds.textContent = secondsLeft;


}
countingTime();
setInterval(countingTime,1000);




function format(item){
    if(item < 10){
        return item = `0${item}`;
    }
    else{
        return item;
    }
}


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


window.addEventListener('scroll', ()=>{
    let verticalScroll = window.scrollY;
    if(verticalScroll > 400 && navigationMenu.classList.contains('show')){
        navigationMenu.classList.remove('show');
        menuBtn.textContent = 'OPEN';
    }
    if(verticalScroll <= 400 && nav.classList.contains('fixed')){
        nav.classList.remove('fixed');
    };
    if(verticalScroll > 4000){
        topLink.classList.add('visible');
    }
    else{
        topLink.classList.remove('visible');
    }
                //     const footerPosition = footer.offsetTop - navHeight;
                //     console.log(footerPosition)
                // if(footerPosition === 35000){
                //     topLink.classList.add('visible');
                // }
                // else{
                //     topLink.classList.remove('visible');
                // }
    if(verticalScroll > 500){
        nav.classList.add('fixed');
    }
    else{
        nav.classList.remove('fixed');
    }
});





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
    parliamentIcon.classList.toggle('rotate');
    if(mcas.classList.contains('seen')){
        mcas.classList.remove('seen');
        assemblyIcon.classList.toggle('rotate');
    };
});

membersOfCountyAssembly.addEventListener('click', ()=>{
    mcas.classList.toggle('seen');
    assemblyIcon.classList.toggle('rotate');
    if(mps.classList.contains('seen')){
        mps.classList.remove('seen');
        parliamentIcon.classList.toggle('rotate');
    }
});


precedingElements.forEach(element =>{
    element.addEventListener('click', (e)=>{
        e.preventDefault();

        const id = e.currentTarget.getAttribute('href').slice(1);
        
        const link = document.getElementById(id);
      
        let position = link.offsetTop - navHeight;
        
        
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
