const cardContainer = document.querySelector('cardContainer')

function retornarTablaHTML(productoCarrito) {
    return `<section>
    <div class="card-product" id="${productoCarrito.id}">
        <img src="${productoCarrito.imagen}" alt="Producto"><div>
            <div class="description">${productoCarrito.nombre}</div>
            <div class="precio">${productoCarrito.precio}</div>
            <div class="card-product-footer">
            <div><h3>${productoCarrito.id}</h3></div
           </div>
    </div>
    </section>`
}

if (carrito.length > 0) {
    carrito.forEach(productoCarrito => {
        cardContainer.innerHTML += retornarTablaHTML(productoCarrito)
    })
}