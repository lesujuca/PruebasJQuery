<?php

	header("X-XSS-Protection: 0");
	if(isset($_POST['correoe'])){
		echo $_POST['correoe'];
	}

	// Para evitar ataques básicos (los navegadores traen alguna garantía de protección pero no todos y no excusa de realizar alguna protección extra)
	// Para los campos de tipo correo es mejor usar type='email'
	// usar preg_match
	// sanitizar strip_tags
	// htmlspecialchars y para luego mostrarlo es htmlspecialchars_decode


?>