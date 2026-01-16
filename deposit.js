document.getElementById("btnRealizar").addEventListener("click", function (e) {
  e.preventDefault();

  let monto = parseInt(document.getElementById("realizar").value);
  let saldoActual = parseInt(localStorage.getItem("saldo")) || 0;

  if (isNaN(monto) || monto <= 0) {
    alert("Ingrese un monto válido");
    return;
  }

  // Actualizar saldo
  let saldoActualizado = saldoActual + monto;
  localStorage.setItem("saldo", saldoActualizado);

  // 🔹 Obtener movimientos
  let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

  // 🔹 Crear movimiento de depósito
  let nuevoMovimiento = {
    tipo: "Depósito",
    detalle: "Depósito en cuenta",
    monto: monto,
    fecha: new Date().toLocaleString(),
  };

  // 🔹 Guardar movimiento
  movimientos.push(nuevoMovimiento);
  localStorage.setItem("movimientos", JSON.stringify(movimientos));

  alert("Depósito realizado con éxito");
  window.location.href = "menu.html";
});
