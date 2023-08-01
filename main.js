alert("Hola! Bienvenidos a Mi Cielo. Vamos a comenzar...");
let nombre = prompt("Ingrese su nombre");
if (nombre != "") {
} else {
  alert("Su nombre es un dato requerido")
  nombre = prompt("Ingrese su nombre");
}
let apellido = prompt("Ingrese su apellido");
if (apellido != "") {
} else {
  alert("Su apellido es un dato requerido")
  apellido = prompt("Ingrese su apellido");
}
alert(`Bienvenido ${nombre} ${apellido}`);
let edad = parseInt(prompt("Ingrese su edad"));
if (edad > 18) {
  alert("Podemos continuar");
} else {
  alert("Se requiere de un adulto para continuar")
  edad = parseInt(prompt("ingrese su edad"));
}
function calcularCompra() {
  let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos que desea comprar:"));
  if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
    alert("Por favor, ingrese una cantidad válida.");
    return;
  }
  let costoTotal = 0;

  for (let i = 1; i <= cantidadProductos; i++) {
    let precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i} :`));

    if (isNaN(precioProducto) || precioProducto < 0) {
      alert(`Por favor, ingrese un precio valido para el producto ${i}`)
      return;
    }

    costoTotal = costoTotal + precioProducto;
  }

  alert(`El costo total de los ${cantidadProductos} productos seleccionados es: $${costoTotal}`);
}

calcularCompra();



