// botones
var btn_app = $('#1');
var btn_video = $('#2');
var btn_gaming = $('#3');
var btn_proteccion = $('#4');

// sliders
var sliderClaroApp = $('#slider_claroApp');
var sliderClaroVideo = $('#slider_claroVideo');
var sliderClaroGaming = $('#slider_claroGaming');
var sliderClaroProteccion = $('#slider_claroProteccion');

var btn_clickeado = 1;


    btn_app.click(function(){

       scrollToBeneficios();
        btn_app.css('color','white');
        $('#'+btn_clickeado).css('color','#79838A');
        btn_clickeado=1;
        
        sliderClaroApp.fadeIn(2000);
        sliderClaroVideo.hide();
        sliderClaroGaming.hide();
        sliderClaroProteccion.hide();

    });

    btn_video.click(function(){
  
      scrollToBeneficios();
      btn_video.css('color','white');
      $('#'+btn_clickeado).css('color','#79838A');
      btn_clickeado=2;
    
      sliderClaroVideo.fadeIn(2000);
      sliderClaroApp.hide();
      sliderClaroGaming.hide();
      sliderClaroProteccion.hide();

    });


    btn_gaming.click(function(){
     scrollToBeneficios();
      btn_gaming.css('color','white');
      $('#'+btn_clickeado).css('color','#79838A');
      btn_clickeado=3;

      sliderClaroApp.hide();
      sliderClaroVideo.hide();
      sliderClaroProteccion.hide();
      sliderClaroGaming.fadeIn(2000);
   
      
    });

    btn_proteccion.click(function(){
      scrollToBeneficios();
      btn_proteccion.css('color','white');
      $('#'+btn_clickeado).css('color','#79838A');
      btn_clickeado=4;

      sliderClaroApp.hide();
      sliderClaroVideo.hide();
      sliderClaroGaming.hide();
      sliderClaroProteccion.fadeIn(2000);

      
    });

  
  function scrollToBeneficios()
  {
    $('html, body').animate({
      scrollTop: $("#BeneficiosExclusivos").offset().top
      }, 1);
  }

  

   