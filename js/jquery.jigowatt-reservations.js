jQuery(document).ready(function(){
	
	$('#contactform').submit(function(){
	
		var action = $(this).attr('action');
		
		$('#contactform #submit').attr('disabled','disabled').after('<img src="assets/ajax-loader.gif" class="loader" />');
		
		$("#message").slideUp(750,function() {
		$('#message').hide();			
		
		$.post(action, { 
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			date: $('#date').val(),
			comments: $('#comments').val(),
			verify: $('#verify').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#contactform img.loader').fadeOut('fast',function(){$(this).remove()});
				$('#contactform #submit').attr('disabled',''); 
				if(data.match('success') != null) $('#contactform').slideUp('slow');
				
			}
		);
		
		});
		
		return false; 
	
	});
	
});