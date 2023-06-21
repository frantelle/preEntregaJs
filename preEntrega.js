// Definir la función del simulador
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
          // Calcular el monto mensual según las cuotas ingresadas utilizando un ciclo
          let montoTotal = parseInt(prompt("Ingrese el monto del préstamo"))
          
          // Monto total del préstamo
          let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas:"))
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
simuladorPrestamo()