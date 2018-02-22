$(function() {
  var $blocks = $('.animBlock.notViewed');
  var $window = $(window);

  $window.on('scroll', function(e){
    $blocks.each(function(i,elem){
      if($(this).hasClass('viewed')) 
        return;
        
      isScrolledIntoView($(this));
    });
  });
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemOffset = 0;
  
   if(elem.data('offset') != undefined) {
    elemOffset = elem.data('offset');
  }
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  
  if(elemOffset != 0) { // custom offset is updated based on scrolling direction
    if(docViewTop - elemTop >= 0) {
      // scrolling up from bottom
      elemTop = $(elem).offset().top + elemOffset;
    } else {
      // scrolling down from top
      elemBottom = elemTop + $(elem).height() - elemOffset
    }
  }
  
  if((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) {
    // once an element is visible exchange the classes
    $(elem).removeClass('notViewed').addClass('viewed');
    
    var animElemsLeft = $('.animBlock.notViewed').length;
    if(animElemsLeft == 0){
      // with no animated elements left debind the scroll event
      $(window).off('scroll');
    }
  }
}


// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}



/*// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}*/

$(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});

$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInLeft');
      }
    });
  });

  // Click Animations
  $('button').on('click', function() {
    /*
    If any input is empty make it's border red and shake it. After the animation is complete, remove the shake and animated classes so that the animation can repeat.
    */
    
    // Check name input
    if ($('#name').val() === '') {
      $('#name').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated shake');
      });
    } else {
      $('#name').removeClass('form-error');
    }
    
    // Check email input
    if ($('#email').val() === '') {
      $('#email').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated shake');
      });
    } else {
      $('#email').removeClass('form-error');
    }

    // Check message textarea
    if ($('#message').val() === '') {
      $('#message').addClass('form-error animated shake').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated shake');
      });
    } else {
      $('#message').removeClass('form-error');
    }

  });
  
  // Activate hinge effect when h4 is click in last section
  $('.funky-animations h4').on('click', function() {
    $(this).addClass('animated hinge').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated hinge');
      });
  });
});
