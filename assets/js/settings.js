//----------------------------------------------------/
// Set Settings
//----------------------------------------------------/

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }
  function switchStyle(area,value){
      const body = $('body');
      body.attr("data-"+area,value);
      setCookie(area,value,365);
  }
  function initSettings(){
      properties = ["background","layout","color","font","header","textDirection"];
      properties.forEach(element => {
          //Initialize onclick functions for setting buttons
          $(".style"+element)
          .click(function() {
              switchStyle(element,this.getAttribute("data-value"));
              return false
          });
      });
  }
  initSettings();

//----------------------------------------------------/
// Add Active Class To All Buttons
//----------------------------------------------------/
(function($) {
 properties = ["layout","color","background","font","header","textDirection"];
 properties.forEach(property => {
    $(".style"+property)
    .each(
        function(){
          if(this.getAttribute("data-value") === getCookie(property))
              $(this).addClass("active"+property);
      }).click(
          function(){
              $(".style"+property).each(
                  function(){
                      if($(this).hasClass("active"+property))
                          $(this).removeClass("active"+property);
                  }
              )
              $(this).addClass("active"+property);
          }
      );
    });
})(jQuery);

//----------------------------------------------------/
// Styleswitch Font Body
//----------------------------------------------------/
(function($) {
    $(document)
    .ready(function() {
        $(".stylefont")
        .click(function() {
            switchStyleFont(this.getAttribute("data-value"));
            return false
        });
    });
    function switchStyleFont(styleName) {

        switch(styleName){
            case "opensans":
                loadFont("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap");
                break;
            case "poppins":
                loadFont('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');
                break;
            case "nunito":
                loadFont('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');
                break;
            case "raleway":
                loadFont('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap');
                break;
            default:
                loadFont("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&display=swap");
                break;
        }
    }
    function loadFont(ref){
        $("#selected_font")
            .attr("href", ref);
    }
})(jQuery);


//----------------------------------------------------/
// Styleswitch Text Direction
//----------------------------------------------------/
(function($) {
    $(document)
    .ready(function() {
        $(".styletextDirection")
        .click(function() {
            switchTextDirection(this.getAttribute("data-value"));
            return false
        });
    });
    function switchTextDirection(direction) {

        $('html').attr('dir',direction);

        $(function(){
            $("link.ltr").attr("disabled", direction !== "ltr");
        });
        

        $(function(){
            $("link.rtl").attr("disabled", direction === "ltr");
        });
        
        //Change slick
        if($('#slider').length)
            $('#slider').slick('slickSetOption', 'rtl', direction === "rtl");   
        //CHANGE OWL CAROUSEL
        if($('.owl-carousel').length){
            $('.owl-carousel').data('owl.carousel').options.loop = direction === "rtl";
            $('.owl-carousel').data('owl.carousel').options.rtl = direction === "rtl";
            $('.owl-carousel').trigger( 'refresh.owl.carousel' );
        }
        

        setCookie("textDirection",direction,365);

    }
})(jQuery);