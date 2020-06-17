window.onload = iniciar;
var idAnterior

function iniciar (){
	var prueba = document.getElementById("marca2").children[0].children;
	var i = 0;
	while (i < prueba.length){
		prueba [i].addEventListener('click',function marca(){
			if (idAnterior != null){
				idAnterior.classList.remove("actual");
			}
			this.classList.add("actual");
			idAnterior = this;
				}
			)
		i++
}
document.getElementById("formulario").addEventListener("submit", function(event){
	let error = false;

	if(!document.querySelector('input[name="marca"]:checked')) {
      alert('Debe seleccionar la marca del coche para poder continuar.');
      error = true;
  	}

	if(!document.querySelector('input[name="combustible"]:checked')) {
      alert('Debe seleccionar el tipo de combustible para poder continuar.');
      error = true;
  	}

	if(error) event.preventDefault();

	}
)
}
