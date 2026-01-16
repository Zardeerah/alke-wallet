// Función login
function login(evento) {
  evento.preventDefault(); // Evita recargar la página

  // Datos correctos
  const nombreValido = "paola@gmail.com";
  const passwordValido = "1234";

  // Datos ingresados
  const nombreIngresado = document.getElementById("email").value;
  const passwordIngresado = document.getElementById("password").value;

  // Mensaje en pantalla
  const mensaje = document.getElementById("mensaje");

  // Validar login
  if (
    nombreIngresado === nombreValido &&
    passwordIngresado === passwordValido
  ) {
    mensaje.textContent = "Login exitoso";
    mensaje.className = "text-success";

    // Ir al menú
    setTimeout(() => {
      window.location.href = "menu.html";
    }, 1000);
  } else {
    mensaje.textContent = "Credenciales incorrectas";
    mensaje.className = "text-danger";
  }
}

// Evento del formulario
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", login);
