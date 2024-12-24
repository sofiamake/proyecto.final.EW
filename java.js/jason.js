fetch("https://fakestoreapi.com/products")
  .then((response) => {
    
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  })
  .then((Productos) => {
    const section = document.querySelector("section");

    section.innerHTML = "";

    productos.forEach((producto) => {
      const html = `
        <article data-id="${producto.id}">
          <img src="${producto.imagen}" width="250">
          <h2>${producto.nombre}</h2>
          <p>$ ${producto.precio}</p>
          <button type="button" class="agregar">Agregar</button>
        </article>
        `;

      section.innerHTML += html;
    });
  })
  .catch((error) => {
    console.log(error);
  });
