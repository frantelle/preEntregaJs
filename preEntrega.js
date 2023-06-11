// Simulador interactivo con condicional y ciclo

// Obtener la edad del usuario
let edad = parseInt(prompt("Ingrese su edad:"));

// Verificar si es mayor de edad utilizando un condicional
if (edad >= 18) {
  
  // Calcular el monto mensual según las cuotas ingresadas utilizando un ciclo
  let montoTotal = parseInt(prompt("Ingrese el monto del préstamo")); // Monto total del préstamo
 
  // Si es mayor de edad, solicitar la cantidad de cuotas
  let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas:"));

 
  let montoMensual = montoTotal / cuotas;
   montoMensual = montoMensual * 1.7 ;
   alert(`El monto mensual de su cuota es ${montoMensual.toFixed(2)}` )
  // Mostrar el resultado al usuario utilizando un ciclo
  console.log("Detalles del préstamo:");
  console.log("Monto total: $" + montoTotal.toFixed(2));
  console.log("Cuotas mensuales: " + cuotas);
  console.log("Monto mensual por cuota: $" + montoMensual.toFixed(2));
} else {
  console.log("Lo sentimos, debe ser mayor de edad para solicitar un préstamo.")}
