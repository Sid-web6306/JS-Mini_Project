const slider = document.querySelector('.items');

let isDown;
let startX;
let scrollleft;

slider.addEventListener('mousedown',(e)=>{
    isDown=true;
    slider.classList.add('active');
    startX=e.pageX-slider.offsetLeft;
    scrollleft=slider.scrollLeft;
});
slider.addEventListener('mouseup',()=>{
    isDown=false;
    slider.classList.remove('active');
})
slider.addEventListener('mouseleave',()=>{
    isDown=false;
    slider.classList.remove('active');
})
slider.addEventListener('mousemove',(e)=>{
    // console.log(isDown);
    // console.log(e);
    if(!isDown)return;
    e.preventDefault();
    const x=e.pageX-slider.offsetLeft;
    const walk =(x-startX)*2;//scroll fast
    slider.scrollLeft=scrollleft-walk;

})
