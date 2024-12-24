const productos = [
    {
      id: 1,
      nombre: "Gel refrescante Vichy",
      imagen: "imagenes/gel.refrescante.jpg",
      precio: 20,
      stock: 5,
    },
    {
      id: 2,
      nombre: "espuma ecelon",
      
      imagen: "imagenes/Espuma.png",
      precio: 15,
      stock: 10,
    },
    {
      id: 3,
      nombre: "del de limpieza",
      
      imagen: "imagenes/geldelimpieza.jpg",
      precio: 35,
      stock:4,
    },
    {
      id: 4,
      nombre: "serum acido hialuronico Loreal",
      
      imagen: "imagenes/serum.jpg",
      precio: 15,
      stock: 16,
    },
];


 
const listadoProductos = document.querySelector(".listado-productos");
  
listadoProductos.innerHTML = "<h2>Productos</h2>";


productos.forEach((producto) => {

  const html = `
        <article data-id="${producto.id}">
          <img src="${producto.imagen}" width="250">
          <h2>${producto.nombre}</h2>
          <p>$ ${producto.precio}</p>
          <button type="button" class="agregar">Agregar</button>
        </article>
    `;


  listadoProductos.innerHTML += html;
});
let carrito = [];

document.addEventListener("click", (event) => {
  
  if (event.target.classList.contains("agregar")) {
   
    const id = event.target.closest("article").dataset.id;

    
    const elemento = productos.find((producto) => producto.id == id);
    console.log(elemento);

    
    const { nombre, precio } = elemento;

    
    const producto = {
      id: id,
      nombre: nombre,
      precio: precio,
      cantidad: 1,
    };
    

    carrito.push(producto);

   
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
});
