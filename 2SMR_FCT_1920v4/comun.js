function comprobacionNumero (e){
	var numero = e.key.replace(/[^\d0-9]/g, '');

	if (numero == '')
		return false;
}
function cargarEvento (){

	var element = document.getElementById("idMarcaCombustible");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="1MarcaCombustible.html";
			});
		
	element = document.getElementById("idPropietarioOcupacion");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="2PropietarioOcupacion.html";
			});
	element = document.getElementById("idMatriculacionCarne");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="3Uso.html";
			});
	element = document.getElementById("idKilometros");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="4Matriculacion.html";
			});
	element = document.getElementById("idProcedencia");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="5Kilometros.html";
			});
	element = document.getElementById("idDatosPersonales");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="6Procedencia.html";
			});
	element = document.getElementById("idDireccion");
		if(element!=null)
			element.addEventListener("click", function(){
				window.location="7DatosPersonales.html";
			});

	jQuery('.alert').hide();
}