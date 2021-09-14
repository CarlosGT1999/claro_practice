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
  
        btn_app.css('color','white');
        $('#'+btn_clickeado).css('color','#79838A');
        btn_clickeado=1;
        
        sliderClaroApp.show();
        sliderClaroVideo.hide();
        sliderClaroGaming.hide();
        sliderClaroProteccion.hide();
        clickAutomatico();
      
    });

    btn_video.click(function(){
  
      
      btn_video.css('color','white');
      $('#'+btn_clickeado).css('color','#79838A');
      btn_clickeado=2;
    
      sliderClaroVideo.show();
      sliderClaroApp.hide();
      sliderClaroGaming.hide();
      sliderClaroProteccion.hide();
      clickAutomatico();
      
      
    });


    btn_gaming.click(function(){
  
      btn_gaming.css('color','white');
      $('#'+btn_clickeado).css('color','#79838A');
      btn_clickeado=3;

      sliderClaroApp.hide();
      sliderClaroVideo.hide();
      sliderClaroProteccion.hide();
      sliderClaroGaming.show();
      clickAutomatico();
      
    });

    btn_proteccion.click(function(){
  
      btn_proteccion.css('color','white');
      $('#'+btn_clickeado).css('color','#79838A');
      btn_clickeado=4;

      sliderClaroApp.hide();
      sliderClaroVideo.hide();
      sliderClaroGaming.hide();
      sliderClaroProteccion.show();
      clickAutomatico();
      btn_clickeado = 0;
      setTimeout(()=>
      {
      
        btn_proteccion.css('color','#79838A');
        
        
      },5000)
      
      
    });

    // setTimeout(()=>
    // {
    //     btn_claroVideo.click();
    // },6000)
   function clickAutomatico()
   {
    
        setTimeout(()=>
      {
      
        $('#'+(btn_clickeado+1)).click();
        
        
      },5000)
    }

   clickAutomatico();
  

  

   