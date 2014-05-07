$(document).ready( function() {

   // See if this is a touch device
   if ('ontouchstart' in window)
   {
      // Set the correct [touchscreen] body class
      $('body').removeClass('no-touch').addClass('touch');

      // Add the touch toggle to show text when tapped
      $('div.tileInner img').click(function(){
         $(this).closest('.tileInner').toggleClass('touchFocus');
      });
   }
});
