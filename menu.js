const mensaje = document.getElementById("mensaje");

// Botones
document.getElementById("depositar").onclick = () =>
  redirigir("Depósitos", "deposit.html");
document.getElementById("enviar").onclick = () =>
  redirigir("Enviar Dinero", "sendmoney.html");
document.getElementById("movimientos").onclick = () =>
  redirigir("Movimientos", "transaction.html");

// Función reutilizable
function redirigir(texto, pagina) {
  mensaje.textContent = "Redirigiendo a " + texto + "...";
  setTimeout(() => {
    window.location.href = pagina;
  }, 1000);
}

// Mostrar saldo
let saldo = localStorage.getItem("saldo") || 0;
document.getElementById("saldo").textContent = "$" + saldo;

// Mantener sesión activa
localStorage.setItem("usuarioLogueado", "true");

// Cerrar sesión
document.getElementById("cerrarSesion").onclick = () => {
  localStorage.removeItem("usuarioLogueado");
  window.location.href = "login.html";
};
