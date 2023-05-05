let correoInput = document.getElementById("correo");

let contraseñaInput = document.getElementById("contraseña");

let iniciarSesion = document.getElementById("iniciarSesion");

// Añadir un listener al botón para validar el correo al hacer clic
iniciarSesion.addEventListener("click", function () {
  let correo = correoInput.value;
  let expresion = /\w+@\w+\.\w+/;
  if (!expresion.test(correo)) {
    alert("Ingrese una dirección de correo válida.");
  } else {
    alert("Iniciando sesión con el correo: " + correo);
    // derigimos a la pagina principal.
  }
});
