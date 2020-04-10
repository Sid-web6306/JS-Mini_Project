const video=document.querySelector('.flex');
const speed=document.querySelector('.speed');
const speedBar=document.querySelector('.bar');

function handleSpeed(e){
    // console.log(e);
    const y=e.pageY-this.offsetTop;
    // console.log(e.pageY,this.offsetTop);
    // console.log(this.offsetHeight);
    const percentage=y / this.offsetHeight;
    console.log(percentage);
    const min=0.4;
    const max=4;
    const height= Math.round(percentage*100)+'%';
    const playbackRate=percentage*(max-min)+min;
    speedBar.style.height=height;
    speedBar.textContent=playbackRate.toFixed(2)+'x';
    video.playbackRate=playbackRate;
}




speed.addEventListener('mousemove', handleSpeed);


