window.onload = iniciar;
function iniciar (){
	document.getElementById("formulario").addEventListener("submit", function(event){
	let error = false;

	if(!document.querySelector('input[name="remolque"]:checked')) {
      alert('Debe especificar si llevará remolque o no.');
      error = true;
  	}

	if(error) event.preventDefault();

	}
)

cargarEvento();

}