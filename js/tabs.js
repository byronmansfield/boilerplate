// Tabs
$(document).ready(function() {
	$('ul.tabs').each(function() {
	  var $active, $content, $links = $(this).find('a');

	  $active = $($links.filter('[href="'+location.hash+'"]')[2] || $links[2]);
	  $active.addClass('active');
	  $content = $($active.attr('href'));
	  $links.not($active).each(function() {
	    $($(this).attr('href')).hide();
	  });
	  $(this).on('click', 'a', function(e) {
	    $active.removeClass('active');
	    $content.hide();
	    $active = $(this);
	    $content = $($(this).attr('href'));
	    $active.addClass('active');
	    $content.show();

	    e.preventDefault();
	  });
	});
});