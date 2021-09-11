// botones
var btn_claroVideo = $('#btn_claroVideo');
var btn_claroApp = $('#btn_claroApp');;
// sliders
var sliderClaroVideo = $('#slider_claroVideo,#slider_claroVideoImg');
var sliderClaroApp = $('#slider_claroApp,#slider_claroAppImg');


    btn_claroVideo.click(function(){
  
      btn_claroApp.css('color','#79838A');
      btn_claroVideo.css('color','white');
      sliderClaroApp.hide(10);
      sliderClaroVideo.show(1000);
      setTimeout(()=>
      {
          btn_claroVideo.click();
      },9000)
    
    });

    btn_claroApp.click(function(){
  
        btn_claroApp.css('color','white');
        btn_claroVideo.css('color','#79838A');
        sliderClaroApp.show(1000);
        sliderClaroVideo.hide(10);
      
      });

    // setTimeout(()=>
    // {
    //     btn_claroVideo.click();
    // },6000)