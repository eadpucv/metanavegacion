(function ( $ ) {
	$.fn.load_ead_bar = function(options) {
		
		// Cargo Modales (desde bucked e)
		$.getScript("include/jquery.leanModal.min.js", function(){
			alert(";-)")
			//$(".ead_bar_modal_link").leanModal({ top : 200, overlay : 0.4, closeButton: ".modal_close" });
		});

		// DropDowns
		$('li.ead-bar-dropdown ul').hide();
		$('nav li.ead-bar-dropdown').hover(
		  function () {
		    $('ul', this).stop().slideDown(100);
		  },
		  function () {
		    $('ul', this).stop().slideUp(100);
		  }
		);

		// Buscador


		return this;
	};
	
}( jQuery ));