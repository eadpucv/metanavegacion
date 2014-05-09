(function ( $ ) {
	$.fn.load_ead_bar = function(options) {
		
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