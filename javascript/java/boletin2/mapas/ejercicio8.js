let inventario = new Map();

inventario.set("Martillo", 3);
inventario.set("Destornillador", 5);
inventario.set("Taladro", 2);
inventario.set("Clavos", 10);
inventario.set("Serrucho", 1);

let producto = prompt("¿Qué producto quieres comprar?");

if (inventario.has(producto)) {
  let stock = inventario.get(producto);
  if (stock > 0) {
    inventario.set(producto, stock - 1);
    alert("Compra realizada. Stock actualizado:");
    inventario.forEach((v, k) => {
      console.log(k + ": " + v);
    });
  } else {
    alert("No hay stock disponible");
  }
} else {
  alert("Producto no existe");
}
