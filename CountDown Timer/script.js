
let countDown;
const countDownTimer=document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

const buttons=document.querySelectorAll('[data-time]');
function timer(seconds){
    clearInterval(countDown);
    const now=Date.now();
    const then = now+seconds*1000;
    // console.log({now,then});
    displayTimeLeft(seconds);
    displayEndTime(then);
    
    countDown = setInterval(()=>{
        const secondsLeft=Math.round((then-Date.now())/ 1000);
        if(secondsLeft<0){
            clearInterval(countDown);
            return;
        }
        // console.log(secondsLeft);
        displayTimeLeft(secondsLeft);
    },1000);
}

function displayTimeLeft(seconds){
    const minutes=Math.floor(seconds/ 60);
    const remainingSeconds=seconds%60;
    // console.log({minutes,remainingSeconds});
    const remainseconds= remainingSeconds<10?"0":"";
    const display=`${minutes}:${remainseconds}${remainingSeconds}`;
    countDownTimer.textContent =display;
}
function displayEndTime(timestamp){
    const end=new Date(timestamp);
    const hours=end.getHours();
    const minutes=end.getMinutes();
    endTime.textContent=`Be Back At ${hours}:${minutes<10?"0":""}${minutes}`;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    // console.log(seconds);
    timer(seconds);
}


buttons.forEach(button=>button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const minute=parseInt(document.customForm.minutes.value);
    // console.log(minute);
    timer(minute*60);
    document.customForm.reset();
})
