window.addEventListener('keydown',function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"`);
    if(!audio)return;
});