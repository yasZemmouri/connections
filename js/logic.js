"use strict";
//Elements
const arrowContainerEl = document.getElementById('arrow-container');
const jumpBtn = document.querySelector('.jump-button')
// var scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 1500,
//     speedAsDuration: true,
//   });


// when the DOM is ready
$(document).ready(function() {
    // get the anchor link buttons
    const menuBtn = $('.jump-button');
    console.log(menuBtn);
    // when each button is clicked
    menuBtn.click(()=>{	
      // set a short timeout before taking action
      // so as to allow hash to be set
      setTimeout(()=>{
        // call removeHash function after set timeout
        removeHash();
      }, 5); // 5 millisecond timeout in this case
    });
  
    // removeHash function
    // uses HTML5 history API to manipulate the location bar
    function removeHash(){
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }

    //Show and hide Scroll to top button when scrolling
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 1500) {
    //         $('#arrow-container').fadeIn();
    //     } else {
    //         $('#arrow-container').fadeOut();
    //     }
    // });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1500) {
            arrowContainerEl.classList.add("arrow-visible");
        } else {
            arrowContainerEl.classList.remove('arrow-visible');
        }
    });


  });


  
