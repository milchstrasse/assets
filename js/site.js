var main = function () {
//$( "img" ).click(function() {
//  alert( "Handler for .click() called." );
//});
  
  
//Menu einblenden
  $('.toggle-menu').click(function() {
//    $('.navarea.dyn .areas').css('max-height','90vh');
    // Menu anzeigen die beiden andern ausblenden
//    alert( "Handler for .click() called." );
    $('nav').css('display','block');
    $('address').css('display','none');
    $('.mail').css('display','none');
    }
  );
  
  //Adresse einblenden
  $('.toggle-address').click(function() {
    // Adresse anzeigen die beiden andern ausblenden
    $('nav').css('display','none');
    $('address').css('display','block');
    $('.mail').css('display','none');
    }
  );
  
  //Mail einblenden
  $('.toggle-mail').click(function() {
    // Mail anzeigen die beiden andern ausblenden
    $('nav').css('display','none');
    $('address').css('display','none');
    $('.mail').css('display','block');
    }
  );
  
  
  
// Dynamic to-top link,erscheint erst beim Scrollen
  $('.to-top').hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 200) {
      $('.to-top').show();
    } else {
      $('.to-top').hide();
    }
  });
  
}

$(document).ready(main);
