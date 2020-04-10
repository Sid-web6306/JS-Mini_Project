const triggers = document.querySelectorAll('.cool>li');

const background = document.querySelector('.dropdownBackground');
const nav= document.querySelector('.top');

function handleEnter(){
    this.classList.add('trigger-enter');
    setTimeout(()=> (this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active')),150);
    background.classList.add('open');
    const dropdown=this.querySelector('.dropdown');
    const dropdownCoords= dropdown.getBoundingClientRect();
    const navCoords=nav.getBoundingClientRect();
    const Coordinates={
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top-navCoords.top,
        left: dropdownCoords.left-navCoords.left,
    };
    background.style.setProperty('height',`${Coordinates.height}px`);
    background.style.setProperty('width',`${Coordinates.width}px`);
    // background.style.setProperty('top',`${Coordinates.top}px`);
    // background.style.setProperty('left',`${Coordinates.left}px`);
    background.style.setProperty('transform',`translate(${Coordinates.left}px,${Coordinates.top}px)`);



}

function handleLeave(){
    this.classList.remove('trigger-enter','trigger-enter-active');
    background.classList.remove('open');

}






triggers.forEach(trigger=>trigger.addEventListener('mouseenter',handleEnter));
triggers.forEach(trigger=>trigger.addEventListener('mouseleave',handleLeave));
