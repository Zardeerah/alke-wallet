$(function () {
  let contactos = JSON.parse(localStorage.getItem("contactos")) || [];
  let seleccionado = null;

  // Mostrar contactos
  function mostrar() {
    $("#listacontactos").empty();

    contactos.forEach((c, i) => {
      $("#listacontactos").append(`
        <li class="list-group-item" data-index="${i}">
          <strong>${c.nombre}</strong> - ${c.banco}
          <button class="btn btn-danger btn-sm float-end eliminar">X</button>
        </li>
      `);
    });
  }

  mostrar();

  // Seleccionar contacto
  $("#listacontactos").on("click", "li", function () {
    $(".list-group-item").removeClass("active");
    $(this).addClass("active");
    seleccionado = contactos[$(this).data("index")];
  });

  // Eliminar contacto
  $("#listacontactos").on("click", ".eliminar", function (e) {
    e.stopPropagation();
    let i = $(this).parent().data("index");

    if (confirm("¿Eliminar contacto?")) {
      contactos.splice(i, 1);
      localStorage.setItem("contactos", JSON.stringify(contactos));
      seleccionado = null;
      mostrar();
    }
  });

  // Guardar contacto
  $("#guardarContacto").click(function () {
    let nombre = $("#nombre").val();
    let cbu = $("#cbu").val();
    let alias = $("#alias").val();
    let banco = $("#banco").val();

    if (!nombre || !cbu || !alias || !banco) {
      alert("Completa los campos");
      return;
    }

    contactos.push({ nombre, cbu, alias, banco });
    localStorage.setItem("contactos", JSON.stringify(contactos));
    mostrar();

    $("#nombre, #cbu, #alias, #banco").val("");
    bootstrap.Modal.getInstance($("#modalContacto")[0]).hide();
  });

  // Enviar dinero
  $("#btnRealizar").click(function () {
    let monto = Number($("#monto").val());
    let saldo = Number(localStorage.getItem("saldo")) || 0;

    if (!seleccionado) {
      alert("Selecciona un contacto");
      return;
    }

    if (monto <= 0 || monto > saldo) {
      alert("Monto inválido o saldo insuficiente");
      return;
    }

    saldo -= monto;
    localStorage.setItem("saldo", saldo);

    let mov = JSON.parse(localStorage.getItem("movimientos")) || [];
    mov.push({
      tipo: "Envío",
      monto: monto,
      detalle: "Envío a " + seleccionado.nombre,
      fecha: new Date().toLocaleString(),
    });
    localStorage.setItem("movimientos", JSON.stringify(mov));

    alert("Transferencia realizada");
    location.href = "menu.html";
  });
});
