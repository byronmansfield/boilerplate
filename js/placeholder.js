$(document).ready(function() {

  // Placeholder attribute fix for non-supported browsers
  $('[placeholder]').focus(function() {
    var input = $(this);
    if (input.val() == input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
    }
  }).blur(function() {
    var input = $(this);
    if (input.val() == '' || input.val() == input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
    }
  }).blur().parents('form').submit(function() {
    $(this).find('[placeholder]').each(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
      }
    })
  });

  $('.login').click(function() {
    $('#overlay').fadeIn('slow');
    $('#login').fadeIn('slow');
  });

  $(function() {
    $('#overlay').click(function() {
      $('#overlay').fadeOut('slow');
      $('#login').fadeOut('slow');
    }).click();
  });

  $('#login').submit(function(e) {

    $('.required').each(function() {
      var inputVal = $(this).val();
      var parentTag = $(this).parent();

      if(inputVal == '') {
        $(parentTag).addClass('error');
      } else {
        $(parentTag).removeClass('error');
        $('span.error').remove();
      }
    });

    if($('li.error').length == "0") {

      $.ajax({
        type: "POST",
        url: 'api.yoursite.com/login',
        data: {
          username: $(".id input").val(),
          password: $(".pw input").val()
        },
        beforeSend: function() {
          showOverlay();
        },
        success: function(data) {
          if (data === 'Correct') {
            console.log('Success!');
          } else {
            console.log('Failed! ' + data);
          }
        },
        error: function(e) {},
        complete: function() {
          $('#overlay').fadeOut('slow');
          $('#login').fadeOut('slow');
          console.log('Complete!');
        }
      });

    } else {
      alert('Both fields must be filled in.');
    }
    e.preventDefault(); // Stop default action
  });

});
