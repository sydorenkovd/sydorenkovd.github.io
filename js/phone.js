(function( $ ){
	
	jQuery.fn.exists = function() {
	   return jQuery(this).length;
	};
	
	//	Phone Mask
	$(function() {


            if($('.user_phone').exists()){

                $('.user_phone').each(function(){
                    $(this).mask("+99 (999) 999-99-99", {
                        'pattern': '[0-9_-]{8}'
                    }).addClass('rfield')
                });

            }


            if($('.input-birthday').exists()){

                $('.input-birthday').each(function(){
                    $(this).mask("99.99.9999");
                });
                $('.input-birthday')
                    .addClass('rfield')
                    .removeAttr('required')
                    .removeAttr('pattern')
                    .removeAttr('title')
                    .attr({});
            }

	});

})( jQuery );