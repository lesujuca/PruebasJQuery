<?php
header('Access-Control-Allow-Origin: *');
if (isset($_POST['nombre']) && !empty($_POST['nombre'])
	&& isset($_POST['mensaje']) && !empty($_POST['mensaje'])) {
	$datos = Array();
	$nombre = htmlspecialchars($_POST['nombre'],ENT_QUOTES);
	$mensaje = htmlspecialchars($_POST['mensaje'],ENT_QUOTES);
	$idioma = htmlspecialchars($_POST['idioma'],ENT_QUOTES);
	$acepto = $_POST['acepto'];
	$fecha = getdate();
	$datos['nombre'] = $nombre;
	$datos['mensaje'] = $mensaje;
	$datos['idioma'] = $idioma;
	$datos['acepto'] = (($acepto)?"Aceptó Términos!!!":"No Aceptó");
	$datos['fecha'] = $fecha;
	echo json_encode($datos);
}