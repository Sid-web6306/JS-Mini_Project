function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}
const sliderImages=document.querySelectorAll('.slide-in');
function checkSlider(e){
    sliderImages.forEach(sliderImage=>{
        //half through the image
        const slideInAt = window.scrollY+window.innerHeight-sliderImage.height/2;
        //bottom of the image
        const slideInBottom=sliderImage.offsetTop+sliderImage.height;
        //conditions adding classlist 
        // console.log(slideImage.offsetTop);
        // console.log(slideInAt);
        // console.log(slideInBottom);
        if(slideInAt>sliderImage.offsetTop && slideInBottom>window.scrollY){
            sliderImage.classList.add('active');
            console.log("Hello!!");
        }
        else{
            sliderImage.classList.remove('active');
        }
    });
}
//////////Important Use Of [debounce function] for executing function.\\\\


window.addEventListener('scroll',debounce(checkSlider));