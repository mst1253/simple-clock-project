let dataNum=document.querySelectorAll('span[data-num]');
let min=document.querySelector('.min');
let hour=document.querySelector('.hour');
let sec=document.querySelector('.sec');
let pmAm=document.querySelector('.pmAm');
let eye=document.querySelector('.eye');
let hourHand=document.querySelector('.hourHand');
let mainHero=document.querySelector('.main-hero');
let alarm=document.querySelector('.alarm');
let alarmChoose=document.querySelector('.alarm-choosing');
let input=document.querySelectorAll('input');
let  choose=document.querySelector('.stop');
let alarmTime=document.querySelector('h2');
let count=document.querySelector('.count');
let counter=document.querySelector('.counter');
const startButt=document.querySelector('.startButt');
 let  theTimer=document.querySelector('.timer');
 const stopButt=document.querySelector('.stopButt');
 const pauseAlarm=document.querySelector('.pause-alarm');
 const stopAlarm=document.querySelector('.stop-alarm');
 let pauseStop=document.querySelector('.pauseStop');

 
 function addSpeech(){
 const  speech=new SpeechSynthesisUtterance("it's time to make it happen");
  pauseStop.style.display='grid';
 speechSynthesis.speak(speech);
 pauseAlarm.onclick=()=>{
  speechSynthesis.speaking?speechSynthesis.pause():null;
 }
 /*stopAlarm.onclick=()=>{
   speechSynthesis.resume();
   speechSynthesis.cancel();
   pauseAlarm.classList.add('toRight');
}*/
}

 const alarmClock=()=>{
  const regx = /^\d{0,2}$/ig;
  let hours = input[0].value;
  let minutes = input[1].value;
  if(hours<24&&minutes<60){
  if(hours != '' && minutes != '' && hours.match(regx) && minutes.match(regx)) {
    alarmTime.textContent=`${hours}:${minutes}`;
  }
  else {
    alarmTime.textContent = '';
  }
  if (hours==''&&minutes!=''&&minutes.match(regx)){
    alarmTime.textContent = `00:${minutes}`
  }
  else if (hours != '' && minutes == '' && hours.match(regx)){
    alarmTime.textContent=`${hours}:00`;
    }
  }
  
  else{
    alarmTime.textContent="that's wrong try again!"
  }
  return alarmTime
}


function runTime(alarmTime){
  setInterval(()=>{
     let h = new Date().getHours();
     let m = new Date().getMinutes();
     let s = new Date().getSeconds();
    hour.textContent=`${h} :`
    min.textContent=`${m}`;
    sec.textContent=`${s}`;
    h<10?hour.textContent=`0${h} :`:null;
    m<10?min.textContent=`0${m}`:null;
    s<10?sec.textContent=`0${s}`:null;
   if(h==3){
      dataNum[3].style.color='gold'
    }
   else if(h==6){
     dataNum[0].style.color='gold'
   }
   if(h==9){
     dataNum[1].style.color='gold'
   }
   else if(h==12){
     dataNum[2].style.color='gold'
   }
   if(h>=13){
    pmAm.textContent='AM';
   }
    else{
    pmAm.textContent='PM';
    hourHand.style.setProperty('border', '4px solid gold');
    hourHand.style.setProperty('box-shadow', '0 0  50px gold');
    pmAm.style.color='gold'
   pmAm.style.setProperty('text-shadow', '0 0  50px gold');
    eye.style.background='gold'
   }
   if(`${h}:${m}`==alarmTime.textContent){
      addSpeech();
    }
  })
}
runTime(alarmClock())

choose.onclick = () => {
  alarmClock();
    speechSynthesis.resume();
    speechSynthesis.cancel();
}
alarm.addEventListener('click',()=>{
  setTimeout(()=>{
  alarmChoose.style.display='flex';
  mainHero.style.display='block';
  },200)
  mainHero.classList.toggle('moveRight');
  alarmChoose.classList.toggle('moveLeft');
  counter.classList.remove('moveToRight');
})

count.addEventListener('click',()=>{
counter.classList.add('moveToRight');
alarmChoose.style.display='none';
mainHero.style.display='none'
})


const timer=()=>{
  let timerH = 0;
  let timerM = 0;
  let timerS = 0;
  let clock=setInterval(()=>{
    theTimer.textContent=`${timerH}:${timerM}:${timerS++}`
    if(timerS>=100){
       timerS=0;
       timerM++;
    timerM<10?timerM=`0${timerM}`:null
    if(timerM>=59){
      timerM=0;
      timerH++;
    timerH<10?timerH=`0${timerH}`:null
    }
    }
  },5)
  stopButt.onclick=()=>clearInterval(clock)
}
startButt.onclick=()=>{
  stopButt.classList.add('toRight');
  startButt.classList.add('toTop');
  timer();
}

