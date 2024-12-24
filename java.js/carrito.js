carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const items = document.querySelector(".items");

items.innerHTML = "";


document.addEventListener('DOMContentLoaded', () => {
  
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    
    const carritoItems = document.getElementById('carrito-items');
    const carritoTotal = document.getElementById('carrito-total');
  
    if (carrito.length === 0) {
      carritoItems.innerHTML = "<tr><td colspan='4'>No hay productos en el carrito.</td></tr>";
    } else {
      let total = 0;
      
      carrito.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${item.nombre}</td>
          <td>${item.cantidad}</td>
          <td>$${item.precio.toFixed(2)}</td>
          <td>$${(item.precio * item.cantidad).toFixed(2)}</td>
          <td><button class="eliminar" onclick="eliminarDelCarrito('${item.nombre}')">Eliminar</button></td>
        `;
        carritoItems.appendChild(tr);
        total += item.precio * item.cantidad;
      });
  
      
      carritoTotal.textContent = total.toFixed(2);
    }
  });
  
 
  function eliminarDelCarrito(nombre) {
   
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    
    carrito = carrito.filter(item => item.nombre !== nombre);
  
   
    localStorage.setItem('carrito', JSON.stringify(carrito));
  
  
    location.reload(); }
  

