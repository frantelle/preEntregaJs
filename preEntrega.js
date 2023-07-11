function obtenerValorInput(){

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

let valorCuotasStorage = localStorage.getItem("monto", )


div.innerHTML = `<div class="detalles">
<p>su prestamo fue aprobado</p>
<p>el prestamo solicitado es de:</p>
<p>el monto total a pagar es de:</p>
<p>la cantidad de cuotas es:</p>
<p>el monto de cada cuota es: </p>
</div>`;


}


 










































// Definir la función del simulador
  /*
function simuladorPrestamo() {
  while (true) {
    // Mostrar el menú de opciones
    console.log("Menú de opciones:")
    console.log("1. Calcular el monto mensual de préstamo")
    console.log("2. Salir")

  // Obtener la opción seleccionada por el usuario
    let opcion = parseInt(prompt("Seleccione una opción:\n1. Calcular el monto mensual de préstamo\n2. Salir"))

    // Verificar la opción seleccionada
    switch (opcion) {
      case 1:
        // Obtener la edad del usuario
        let edad = parseInt(prompt("Ingrese su edad:"))

        // Verificar si es mayor de edad utilizando un condicional
        if (edad >= 18) {

          //Verificar si hay datos almacenados en el localStorage
          let storedData = localStorage.getItem("prestamoData")
          let data = storedData ? JSON.parse(storedData): {}


          // Calcular el monto mensual según las cuotas ingresadas utilizando un ciclo
          let montoTotal = parseInt(prompt("Ingrese el monto del préstamo"))
          
          // Monto total del préstamo
          let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas:"))
          
          //Guardar los datos ingresados en el localStorage
          data.montoTotal = montoTotal 
          data.cuotas = cuotas
          localStorage.setItem("prestamoData", JSON.stringify(data))

          // Crear un array para almacenar los montos mensuales
          let montosMensuales = []

          for (let i = 0; i < cuotas; i++) {
            let montoMensual = montoTotal / cuotas;
            montosMensuales.push(montoMensual * 1.7)
          }

          // Mostrar los resultados al usuario mediante alertas
          alert("Detalles del préstamo:\n" +
          "Monto total: $" + montoTotal.toFixed(2) + "\n" +
          "Cuotas mensuales: " + cuotas + "\n" +
          "Montos mensuales por cuota:\n" +
          montosMensuales.map((monto, index) => "Cuota " + (index + 1) + ": $" + monto.toFixed(2)).join("\n")
        );

          // Mostrar el resultado al usuario utilizando el método forEach
          console.log("Detalles del préstamo:")
          console.log("Monto total: $" + montoTotal.toFixed(2))
          console.log("Cuotas mensuales: " + cuotas)
          montosMensuales.forEach((monto, index) => {
            console.log("Monto mensual por cuota " + (index + 1) + ": $" + monto.toFixed(2))
          });
        } else {
          console.log("Lo sentimos, debe ser mayor de edad para solicitar un préstamo.")
        }
        break

      case 2:
        console.log("Gracias por utilizar el simulador. ¡Hasta luego!")
        alert("Gracias por utilizar nuestro simulador. ¡Hasta luego!")
        return

      default:
        console.log("Opción inválida. Por favor, seleccione una opción válida del menú.")
        break
    }
  }
}

// Llamar a la función del simulador
simuladorPrestamo()*/

