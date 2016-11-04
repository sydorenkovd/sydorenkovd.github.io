
$(document).ready(function ( $ ) {

        function on_fix_div() 
		{
            var $cache = $( '.kk_trial_fixed' );
            if ( $(window).scrollTop() > 400 )
			{
                $cache.css({
                    'position': 'fixed',
                    'top': '5px'
                });
            } 
			else 
			{
                $cache.css({
                    'position': 'relative',
                    'top': 'auto'
                });
			}
        }
        $(window).scroll( on_fix_div );
        on_fix_div();

    $(".modal.fade.bs-sample-modal-sm").click(function () {
        $('.modal-body').removeClass('modal-size');
    });

    $('.kk_btn_popup_trial').on('click', function (e) {
        $('.border-radius-none-2').removeClass('width-custom').addClass('width-700');
        $('.modal-body').removeClass('modal-size').empty();

			var jq_email_addr = jQuery( '.kk_mkt_email', jq_body );

		var jq_body = jQuery( '.kk_dlg_free_trial', '.kk_hidden_items' ).clone();
        $('.modal-body').append( jq_body );

		jQuery( '.kk_dlg_tmpl' ).on( 'shown.bs.modal', function() {

			var jq_email_addr = jQuery( '.kk_mkt_email', jq_body );

			jQuery( '.kk_mkt_email', jq_body ).focus();
		});

		jQuery( '.kk_mkt_email', jq_body )
			.on( 'keyup', function( ev ) {
				if ( ev.keyCode == 13 )
				{
					jQuery( '.kk_btn_email_submit', jq_body ).trigger( 'click' );
				}
			});

        jQuery( '.kk_dlg_tmpl' ).modal('show');

		jQuery( '.kk_btn_email_submit', jq_body ).on( 'click', function( ev, ui ) {

			var jq_email_addr = jQuery( '.kk_mkt_email', jq_body );
			var email_addr = jq_email_addr.val();

			jQuery.ajax( {
				url: '/pmdc/ajaxEmail.cgi'
				, data : { addr : email_addr }
			} )
				. done( function() {
					var jq_body = jQuery( '.kk_dlg_thanks', '.kk_hidden_items' ).clone();
					$('.modal-body').empty().append( jq_body );
				} );
		});
    });



});



