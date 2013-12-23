
$(document).ready(function() {

  // Function for handling Focus and Blur events for Type Inputs

  if ($('input[type="text"]').attr("readonly") == false) {
    $('input[type="text"]').addClass("idleField");
    $('input[type="text"]').focus(function() {
      $(this).removeClass("idleField").addClass("focusField");
      if (this.value == this.defaultValue) { 
        this.value = '';
      }
   		if(this.value != this.defaultValue) {
    		this.select();
   		}
  	});
  	$('input[type="text"]').blur(function() {
   		$(this).removeClass("focusField").addClass("idleField");
   		if ($.trim(this.value) == '') {
    		this.value = (this.defaultValue ? this.defaultValue : '');
   		}
  	});
  }

  // Function for handling Focus and Blur events for Email Inputs

  if ($('input[type="email"]').attr("readonly") == false) {
    $('input[type="email"]').addClass("idleField");
    $('input[type="email"]').focus(function() {
      $(this).removeClass("idleField").addClass("focusField");
      if (this.value == this.defaultValue) { 
        this.value = '';
      }
      if(this.value != this.defaultValue) {
        this.select();
      }
    });
    $('input[type="email"]').blur(function() {
      $(this).removeClass("focusField").addClass("idleField");
      if ($.trim(this.value) == '') {
        this.value = (this.defaultValue ? this.defaultValue : '');
      }
    });
  }

});
