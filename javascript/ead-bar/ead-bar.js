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

		// Buscador
 			
		$('#ead_bar_form').on('submit', function(e) { 
			$("#ead_bar_notifications").html("");		

			if( $.trim($("#ead_bar_input_search").val()) ) {
				$(".ead_bar_modal_link").click();
				// Ejecuto consulta
				e.preventDefault();

				
				
				$.ajax({
				   url: "http://190.208.62.202:9090/services/rest/index/ead_pucv/search/field/search?login=rodrigomt&key=b57e300b028e2ea64dd62084eddbeafb",
				   type: "POST", 
				   data: JSON.stringify({"query": "Ritoque", "start": 0, "rows": 10, "lang": "SPANISH", "operator": "AND"}),
				   dataType: "json",
				   processData: false,
					contentType: "application/json; charset=UTF-8",	
				   accept: "application/json"
				   
				});
			

				$.ajax({
				   url: "http://190.208.62.202:9090/select?use=ead_pucv&login=rodrigomt&key=b57e300b028e2ea64dd62084eddbeafb&qt=search&q=Chile",
				   dataType: "xml"
				   
				   
				});

				// serializa los resultados
				// Despliego en el div
			} else {
				// Agrego alguna notificacion. 
			}
			
		});		


		// Identificar Sitio



		// Identificar Credenciales



		return this;
	};
	
}( jQuery ));
function parseXml(xml)
{
  //find every Tutorial and print the author
  $(xml).find("doc").each(function()
  {
    console.log($(this).find("field").text())
  });

  // Output:
  // The Reddest
  // The Hairiest
  // The Tallest
  // The Fattest
}