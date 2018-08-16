$(document).ready(function() {
$(function() {
  $('#slides').slidesjs({
        width: 940,
        height: 528,
        navigation: true,
        start: 1,
        play: {
          auto: true
        }
      });

      /*
        To have multiple slideshows on the same page
        they just need to have separate IDs
      */
      $('#slides2').slidesjs({
        width: 940,
        height: 528,
        navigation: true,
        start: 1,
        play: {
          auto: true
        }
      });
          $('#slides3').slidesjs({
        width: 940,
        height: 528,
        navigation: true,
        start: 1,
        play: {
          auto: true
        }
      });
          $('#slides4').slidesjs({
        width: 940,
        height: 528,
        navigation: true,
        start: 1,
        play: {
          auto: true
        }
      });
         $('#slides5').slidesjs({
        width: 940,
        height: 528,
        navigation: true,
        start: 1,
        play: {
          auto: true
        }
      });
		       $('#slides6').slidesjs({
        width: 940,
        height: 528,
        navigation: true,
        start: 1,
        play: {
          auto: true
        }
      });
});

// email form mobile
$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
// email form
$(function() {

	// Get the form.
	var form = $('.ajax-contact');

	// Get the messages div.
	var formMessages = $('.form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('.name').val('');
			$('.email').val('');
			$('.message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1500, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 1.0;			//Scroll time
	var scrollDistance = 150;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});
 /*Animation on scroll*/
  $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('fade-in four');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('fade-in four');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('fade-in four');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('fade-in four');
    }, {
        offset: '70%'
    });
	 $('.js--wp-5').waypoint(function(direction){
        $('.js--wp-5').addClass('fade-in four');
    }, {
        offset: '70%'
    });
	 $('.js--wp-6').waypoint(function(direction){
        $('.js--wp-6').addClass('fade-in four');
    }, {
        offset: '100%'
    });
	 $('.js--wp-7').waypoint(function(direction){
        $('.js--wp-7').addClass('fade-in four');
    }, {
        offset: '70%'
    });
		$('.js--wp-8').waypoint(function(direction){
        $('.js--wp-8').addClass('fade-in four');
    }, {
        offset: '70%'
    });
		$('.js--wp-9').waypoint(function(direction){
        $('.js--wp-9').addClass('fade-in one');
    }, {
        offset: '70%'
    });
});



    



