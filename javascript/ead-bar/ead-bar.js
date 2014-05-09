(function ( $ ) {
	$.fn.load_ead_bar = function(options) {
		
		// Librerias Auxiliares
		$.getScript("https://s3.amazonaws.com/Ead/ead_bar_js/jquery.leanModal.min.js", function(){
			$(".ead_bar_modal_link").leanModal({ top : 200, overlay : 0.4, closeButton: ".modal_close" });
		});

		// Activacion de los dropDowns
		$('li.ead-bar-dropdown ul').hide();
		$('nav li.ead-bar-dropdown').hover(
		  	function () {
				$('ul', this).stop().slideDown(100);
		  	},
		  	function () {
				$('ul', this).stop().slideUp(100);
		  	}
		);

		// Identificar Sitio


		// Identificar Credenciales


		return this;
	};
}( jQuery ));