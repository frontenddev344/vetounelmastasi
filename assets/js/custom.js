	//adding a new class on button element
    $('.toggle').on('click',function () {
        $('body').addClass('menuToggle');   
    });

	
	//removing a existing class from button element
    $('.closeMenu').on('click',function () {
        $('body').removeClass('menuToggle');
    });

 

    $(".dropIcn").click(function(){
        $(".dropMenu").toggleClass("MenuShow");
      });


      $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('.site-header').addClass('fixHeader');
        } else {
           $('.site-header').removeClass('fixHeader');
        }
    });

    AOS.init({
        duration: 1000
      });