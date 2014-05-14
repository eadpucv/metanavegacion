(function ( $ ) {
	$.fn.load_ead_bar = function(options) {
		this.prepend("<div id='bar'></div>");
		
		var _loadFile = function(filename, container, errorMessage) {
		    return $.ajax({
		        url : filename,
		        type: "GET",
		        cache: false,
		        dataType: "html",
		        success : function (data) {
		            $(container).html(data);
		        }
		    });
		}

		_loadFile(options.path_js+'bar.html', '#bar', 'errorMessage')
		.then(function() {

	
			// Identificar Credenciales
			if (options.id.length > 0 && options.name.length > 0 && options.mail.length > 0) {
				
				// Habilitar dropdown
				$('li.ead-bar-dropdown ul').hide();
				$('nav li.ead-bar-dropdown').hover(
				  	function () {
						$('ul', this).stop().slideDown(100);
				  	},
				  	function () {
						$('ul', this).stop().slideUp(100);
				  	}
				);	

				// Asigno Textos y Url's
				$("#ead-bar-dropdown_li").prepend("<a href='#' id='ead_bar_dropdown-session' class='link iniciarsesion'><img class='icono' src='https://s3.amazonaws.com/Ead/ead_bar_images/icon-usuario.gif'>"+ options.name + " " + options.lastname + "</a>");
				$("#ead_bar_dropdown-perfil").attr('href','http://wiki');
				$("#ead_bar_dropdown-account").attr('href',"http://personas.ead.pucv.cl/usuarios/edit/"+options.id);
				$("#ead_bar_dropdown-end_session").attr('href',options.site_logout_url);

				$("#ead-bar-dropdown_li-movil").prepend("<a href='#' id='ead_bar_dropdown-session-movil' class='link iniciarsesion'><img class='icono' src='https://s3.amazonaws.com/Ead/ead_bar_images/icon-usuario.gif'>"+ options.name + " " + options.lastname + "</a>");
				$("#ead_bar_dropdown-perfil-movil").attr('href','http://wiki');
				$("#ead_bar_dropdown-account-movil").attr('href',"http://personas.ead.pucv.cl/usuarios/edit/"+options.id);
				$("#ead_bar_dropdown-end_session-movil").attr('href',options.site_logout_url);

				$("#ead_bar_dropdown-session-movil").click(function() {
					$("#ead_bar_user_menu-movil").toggle();
				});
				

			} else {
				// Habilitar boton y link para iniciar session
				$("#ead-bar-dropdown_li").prepend("<a href='"+options.site_login_url+"' id='ead_bar_dropdown-session' class='link iniciarsesion'><img class='icono' src='https://s3.amazonaws.com/Ead/ead_bar_images/icon-usuario.gif'>Iniciar sesión</a>")
				$("#ead-bar-dropdown_li-movil").prepend("<a href='"+options.site_login_url+"' id='ead_bar_dropdown-session' class='link iniciarsesion'><img class='icono' src='https://s3.amazonaws.com/Ead/ead_bar_images/icon-usuario.gif'>Iniciar sesión</a>")				
			}

			// Identificar Sitio
				$("#link_"+options.site_name).addClass( "active" );			
			});

		return this;
	};
}( jQuery ));