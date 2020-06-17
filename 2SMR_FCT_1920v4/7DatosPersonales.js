window.onload = iniciar;

function calcularLetra(dni){
	var tabla = "TRWAGMYFPDXBNJZSQVHLCKET";
	var calculo = dni % 23;
	var letra = tabla.charAt(calculo);
	return letra;
}

function iniciar (){
	document.getElementById("formulario").addEventListener("submit", function(event){
	let error = false;

	if(!document.querySelector('input[name="genero"]:checked')) {
      alert('Las amebas no pueden rellenar formularios. Debe especificar su género.');
      error = true;
  	}

	if(!document.querySelector('input[name="estado"]:checked')) {
      alert('Debe seleccionar el estado civil en el que se encuentra.');
      error = true;
  	}

	if(error) event.preventDefault();

	}
)
cargarEvento();
}