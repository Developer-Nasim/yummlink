(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  function showHidePass() {
    let allShowHide =  document.querySelectorAll('.showhidePass')
    if (allShowHide.length > 0) {
        allShowHide.forEach(eye => {
            eye.addEventListener('click', (e) => {
                eye.classList.toggle('active')
                if (eye.parentElement.querySelector('input').type == "text") {
                    eye.parentElement.querySelector('input').type = "password"
                }else{
                    eye.parentElement.querySelector('input').type = "text"
                }
            })
        })
    }
  }
  showHidePass()

  AOS.init({  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 80, // offset (in px) from the original trigger point 
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations 
  
  });
 
  $(document).ready(function() {
    $('select:not(.ignore)').niceSelect();     
  });    
 




})(jQuery);
