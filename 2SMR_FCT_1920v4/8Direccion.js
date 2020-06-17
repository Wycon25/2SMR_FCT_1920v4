window.onload = cargarEvento;

function validarCodigoPostal() {
var error = false;
  var input = document.getElementById("idpostal").value;
  console.log(parseInt(input))

  if(input.length == 5 && parseInt(input) >= 1000 && parseInt(input) <= 52999) {
  }

  else{
	alert ("Código postal no válido.")
	error = true;
	}

	if(error) event.preventDefault();

}