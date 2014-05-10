(function ( $ ) {
	$.fn.load_ead_bar = function(options) {
		
		// Cargar html
		this.prepend("<div id='bar'></div>");
		$('#bar').load(options.path_js+'bar.html');

		// Identificar Sitio


		// Identificar Credenciales


		return this;
	};
}( jQuery ));