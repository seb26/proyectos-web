$(document).ready(function() {
  
  /* For: ALL */
  
  // Allow non-JS and JS styling
  $("body").removeClass("no-js");
  $("body").addClass("js");
  
  // Use Unveil to dynamically load images with this class
  $(".img-dload").unveil(200);
  
  
  /* For: index.html
   * Make the image info panel toggleable. */
  
  $('.ii-icon').mousedown(function(e){ e.preventDefault(); }); // Prevent double-click selecting on the icon box
  var image_info_overlay = false;
  $('.image .ii-icon').click( function() {
    image_info_overlay = $(this).prev();
    $(image_info_overlay).toggle();
  });
  $(window).click( function(e) {
    if ( image_info_overlay ) {
      // User has clicked on an Info bubble
      clicked = $(e.target);
      parents = clicked.parents();
      if ( clicked.hasClass('ii-icon')
          ||  parents.hasClass('ii') 
          || parents.hasClass('ii-icon') 
      ) {
        // If you click the icon, or the infobox
        return;
      }
      else {
        // If you click anywhere else
        $(image_info_overlay).hide();
      }
    }
    else {
      // User has not clicked on an Info bubble
      return;
    }
  });
     
  
  
  /* For: index.html
   * Make the Subcategory switcher change
   * according to what section we are on. */
  
  var page_segments = [ 'people', 'portraits', 'environment', 'urban', 'photojournalism' ];
  $(window).scroll(function() {
    page_segments.forEach(function(segment) {
      var scroll = $(window).scrollTop();
      var theSegment = $('#' + segment);
      var os = theSegment.offset().top;
      var ht = theSegment.prev().prev().height();
      if( scroll > os - ht ){
          $('#nav-subcat-toggle-button').text(theSegment.text());
      }
    });
  });

    
});