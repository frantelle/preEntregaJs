function obtenerValorInput() {

  let inputmonto = document.getElementById("monto")
  let inputedad = document.getElementById("edad")
  let inputcuotas = document.getElementById("cuotas")



  let valormonto = inputmonto.value
  let valoredad = inputedad.value
  let valorcuotas = inputcuotas.value

  console.log(valormonto, valoredad, valorcuotas);
  localStorage.setItem("monto", valormonto)
  localStorage.setItem("edad", valoredad)
  localStorage.setItem("cuotas", valorcuotas)

  let div = document.getElementById("divPrincipal");

  let valorMontoStorage = localStorage.getItem("monto")
  let valorCuotasStorage = localStorage.getItem("cuotas")
  let valorEdadStorage = localStorage.getItem("edad")
  div.innerHTML = "";

  if (valorEdadStorage > 18) {


    let valorFinalPrestamo
    if (valorCuotasStorage <= 3) {
      valorFinalPrestamo = valorMontoStorage * 1.25
    } else if (valorCuotasStorage <= 6) {
      valorFinalPrestamo = valorMontoStorage * 1.5
    } else {
      valorFinalPrestamo = valorMontoStorage * 1.75
    }

    let parrafo1 = document.createElement("p");
    parrafo1.textContent = "Prestamo aprobado";
    div.appendChild(parrafo1);

    let parrafo2 = document.createElement("p");
    parrafo2.textContent = "El prestamo solicitado es de: $" + valorMontoStorage;
    div.appendChild(parrafo2);

    let parrafo3 = document.createElement("p");
    parrafo3.textContent = "La cantidad de cuotas es: " + valorCuotasStorage;
    div.appendChild(parrafo3);

    let parrafo4 = document.createElement("p");
    parrafo4.textContent = "El monto total a pagar es: $ " + valorFinalPrestamo;
    div.appendChild(parrafo4);
  } else {

    let parrafoError = document.createElement("p");
    parrafoError.textContent = "Lo sentimos, debes ser mayor de 18 años para solicitar un prestamo";
    div.appendChild(parrafoError);

  }
}


