const triggers=document.querySelectorAll('a');
const highlight=document.createElement('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);


function setHighlight(){
    const linkHighlight=this.getBoundingClientRect();
    // console.log(linkHighlight);

    const coordinate={
        width:linkHighlight.width,
        height:linkHighlight.height,
        left:linkHighlight.left+window.scrollX,
        top:linkHighlight.top+window.scrollY
    }
    highlight.style.width=`${coordinate.width}px`;
    highlight.style.height=`${coordinate.height}px`;
    highlight.style.transform=`translate(${coordinate.left}px,${coordinate.top}px)`
}


triggers.forEach(a=>a.addEventListener('mouseenter',setHighlight))