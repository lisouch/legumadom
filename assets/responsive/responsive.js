/*********************************
               RESPONSIVE
**********************************/
(function($) {
	
	/*
	* We need to turn it into a function.
	* To apply the changes both on document ready and when we resize the browser.
	*/
	
	function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(min-width: 768px)').matches) {
		/* Changes when we reach the min-width  */
			$('body').css('background', '#222');
			$('strong').css('color', 'tomato');

		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
			$('body, strong').removeAttr('style');
		}
	};
	
	/* Call the function */
  mediaSize();
  /* Attach the function to the resize event listener */
	window.addEventListener('resize', mediaSize, false);  
	
})(jQuery);


















/*  Small devices (landscape phones, 576px and up) */
if($(window).width() < 767)
{
   // change functionality for smaller screens
} else {
   // change functionality for larger screens
}


if (window.matchMedia("(max-width: 811px)").matches) {
  /* La largeur minimum de l'affichage est 600 px inclus */
  




} else {

// click legume



 
  });






}

// $("#legume").click(function(){
//     hideAll();
//     $("#apparaitOnClick").show("medium");
//     $(".panierLegume").toggle();