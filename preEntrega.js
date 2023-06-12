// Definir la función del simulador
function simuladorPrestamo() {
  // Mostrar el menú de opciones
  console.log("Menú de opciones:")
  console.log("1. Calcular el monto mensual de préstamo")
  console.log("2. Salir")

  // Obtener la opción seleccionada por el usuario
  let opcion = parseInt(prompt("Seleccione una opción: \n 1. Calcular el monto mensual de préstamo \n 2.Salir"))
  
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
        let montoMensual = montoTotal / cuotas
        montoMensual = montoMensual * 1.7
        alert(`El monto mensual de su cuota es ${montoMensual.toFixed(2)}`)
        // Mostrar el resultado al usuario utilizando un ciclo
        console.log("Detalles del préstamo:")
        console.log("Monto total: $" + montoTotal.toFixed(2))
        console.log("Cuotas mensuales: " + cuotas)
        console.log("Monto mensual por cuota: $" + montoMensual.toFixed(2))
      } else {
        console.log("Lo sentimos, debe ser mayor de edad para solicitar un préstamo.");
      }
      break

    case 2:
      console.log("Gracias por utilizar el simulador. ¡Hasta luego!")
      break

    default:
      console.log("Opción inválida. Por favor, seleccione una opción válida del menú.")
      break
  }
}

// Llamar a la función del simulador
simuladorPrestamo()