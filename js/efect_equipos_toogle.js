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

  // Query para mostrar anclas en el footer

  var btn_ancla1 = $('#btn_showAnclas1')
  var btn_ancla2 = $('#btn_showAnclas2')
  var btn_ancla3 = $('#btn_showAnclas3')


  var anclas1 =$('#anclas1')
  var anclas2 =$('#anclas2')
  var anclas3 =$('#anclas3')
 
  btn_ancla1.click(function(){
     anclas1.toggle(1000);
     anclas2.hide(500);
     anclas3.hide(500);

  });

  btn_ancla2.click(function(){
    anclas2.toggle(1000);
    anclas1.hide(500);
     anclas3.hide(500);

 });

 btn_ancla3.click(function(){
  anclas3.toggle(1000);
  anclas2.hide(500);
  anclas1.hide(500);

});

//Query para mostrar submenus en el navbar

$('#item_movil').hover(function(){
  $('.subMenuMobil').slideDown(500);
  $('.fondoSubMenu').show();
});

$('.fondoSubMenu').hover(function(){
  $('.subMenuMobil').slideUp(500);
  $('.fondoSubMenu').hide();
});

//Detectar item del submenú en el navbar al que se le hizo hover
let mundo_movil = $('#mundo_movil img');
let movil_postpago = $('#movil_postpago');
let movil_prepago = $('#movil_prepago')
$('#mundo_movil').hover(function(){
  // movil_postpago.css("filter","invert(100%)");
})




   