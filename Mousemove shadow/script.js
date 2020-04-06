const container=document.querySelector('.text-container');
const text = container.querySelector('h1');
const walk=100;
function shadow(e){
    const {offsetWidth:width, offsetHeight:height}=container;
    let {offsetX:x,offsetY:y}=e;


    if(this!==e.target){
        x=x+e.target.offsetLeft;
        y=y+e.target.offsetTop;
    }

    const xwalk= Math.round((x / width * walk)-(walk / 2));
    const ywalk= Math.round((y / height * walk)-(walk / 2));
    console.log(xwalk,ywalk);

    text.style.textShadow=`${xwalk}px ${ywalk}px 0 rgba(255,0,0,0.7)`;
    // console.log(x,y);
}


container.addEventListener('mousemove',shadow);