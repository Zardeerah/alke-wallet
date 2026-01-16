// Obtener la lista del HTML
const lista = document.getElementById("listaMovimientos");

// Obtener los movimientos guardados en localStorage
let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

// Si no hay movimientos
if (movimientos.length === 0) {
  // Mostrar mensaje
  lista.innerHTML = `
    <li class="list-group-item text-center">
      No hay movimientos registrados
    </li>
  `;
} else {
  // Recorrer cada movimiento
  movimientos.forEach((mov) => {
    // Crear un <li>
    const li = document.createElement("li");

    // Agregar clase Bootstrap
    li.className = "list-group-item";

    // Agregar contenido al <li>
    li.innerHTML = `
      <strong>${mov.tipo}</strong><br>
      ${mov.detalle}<br>
      Monto: $${mov.monto}<br>
      <small>${mov.fecha}</small>
    `;

    // Agregar el <li> a la lista
    lista.appendChild(li);
  });
}
