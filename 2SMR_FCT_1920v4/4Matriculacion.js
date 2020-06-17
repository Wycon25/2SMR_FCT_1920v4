window.onload = cargarEvento;

function getEdad(fechaSeleccionada) {
  var hoy = new Date()
  var edad = hoy.getFullYear() - fechaSeleccionada.getFullYear()
  var diferenciaMeses = hoy.getMonth() - fechaSeleccionada.getMonth()
  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < fechaSeleccionada.getDate())
  ) {
    edad--
  }
  return edad
}

function nacimiento (){
	var dia = document.getElementById("idDiaNacimiento").value;
	var mes = document.getElementById("idMesNacimiento").value;
	var anio = document.getElementById("idAnioNacimiento").value;
	var ultimoDiaMes= new Date(anio, mes + 1, 0);

	if (dia != '' || anio != '') {

	var fechaSeleccionada = new Date(anio, mes - 1, dia);
	var msFechaSeleccionada = fechaSeleccionada.getTime();
	var fechaActual = new Date();
	var msFechaActual = fechaActual.getTime();
	edad = getEdad(fechaSeleccionada);

	if (msFechaSeleccionada > msFechaActual || anio < 1920 || anio > msFechaActual - 18 || dia > ultimoDiaMes.getDate() || edad < 18) {

		aviso = document.getElementById('alertaPage').textContent;
		document.getElementById('alertaPage').textContent = aviso + 'fecha de nacimiento; ';
		error = true;

	}

	if(error) event.preventDefault();

	}

	comprobacionCero (dia);
	comprobacionCero (anio);

}

function matriculacion (){
	var dia = document.getElementById("idDiaMatriculacion").value;
	var mes = document.getElementById("idMesMatriculacion").value;
	var anio = document.getElementById("idAnioMatriculacion").value;

	if (dia != '' || anio != '') {

	var fechaSeleccionada = new Date(anio, mes - 1, dia);
	var msFechaSeleccionada = fechaSeleccionada.getTime();
	var msFechaActual = new Date().getTime();

	if (msFechaSeleccionada > msFechaActual || anio < 2000 || dia > fechaSeleccionada.getDate()) {

		aviso = document.getElementById('alertaPage').textContent;
		document.getElementById('alertaPage').textContent = aviso + 'fecha de maticulación; ';
		error = true;
	}

	if(error) event.preventDefault();

	}

	comprobacionCero (dia);
	comprobacionCero (anio);

}

function carne (){
	var dia = document.getElementById("idDiaCarne").value;
	var mes = document.getElementById("idMesCarne").value;
	var anio = document.getElementById("idAnioCarne").value;
	var anioNacimiento = document.getElementById("idAnioNacimiento").value;
	var mayoriaEdad = 18;

	if (dia != '' || anio != '') {

	var fechaSeleccionada = new Date(anio, mes - 1, dia);
	var msFechaSeleccionada = fechaSeleccionada.getTime();
	var msFechaActual = new Date().getTime();
	var anioCarneMinimo = parseInt(anioNacimiento) + parseInt(mayoriaEdad);

	if (msFechaSeleccionada > msFechaActual || anioCarneMinimo > anio || dia > fechaSeleccionada.getDate()) {

		aviso = document.getElementById('alertaPage').textContent;
		document.getElementById('alertaPage').textContent = aviso + 'fecha de obtención del carné de conducir;';
		error = true;
	}

	if(error) event.preventDefault();

	}

	comprobacionCero (dia);
	comprobacionCero (anio);

}

function comprobacionCero (numero){

	if (numero == 0){

		event.preventDefault();
		alert ("No puede introducir un día o un año cero.")
	}
}

var error = false;

function mostrarError(){
	if (error){
		jQuery('.alert').show();
	}
}

function limpiarError(){
	error = false;
	document.getElementById('alertaPage').textContent = '';
}