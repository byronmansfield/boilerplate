
// Pretty Photo

$("a[rel^='prettyPhoto']").prettyPhoto({
  default_width: 600,
  default_height: 630,
	custom_markup: '<iframe src="/contact.html" frameborder-"0" marginheight="0" marginwidth="0" width="600px" height="630"></iframe>'
});


// Cycle

$(document).ready(function() {
  $(function() {
    $('#slideshow').cycle({
      fx: 'scrollLeft',
      timeout: 7000,
      easing:  'easeInOutBack',
      pager:  '#nav'
    });
  });
});


// Resume 

$('.tag').click(function() {
  $('#resume').slideToggle(1200, 'easeInOutBack');
 });

$('#resume > a.close').click(function() {
	$('#resume').slideToggle(1200, 'easeInOutBack');
});

 //$('button').click(function(event){ event.preventDefault(); window.location = $('select').val(); });​
