const cardContainer = document.querySelector('#cardContainer')
const inputSearch = document.querySelector('input#inputSearch')

const armarFilaHTML = (prod)=> {
    return `<section>
        <div class="card-product" id="${prod.id}">
            <img src="${prod.imagen}" alt="Producto">
            <div>
                <div class="description">${prod.nombre}</div>
                <div class="precio">${prod.precio}</div>
                <div class="card-product-footer">
                <div><h3>${prod.id}</h3></div>
                <button id="${prod.id}" class="boton-comprar class="button-outline">Agregar</button>
                 </div>
            </div>
        </div>
        </section>`
}

const buscarProductos = ()=> {
    let arrayResultado = muniecos.filter((producto)=> producto.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()))
    if (arrayResultado.length > 0) {
        cargarProductos(arrayResultado)
    }
}
inputSearch.addEventListener('search', buscarProductos)

const cargarProductos = (array)=> {
    cardContainer.innerHTML = ''
    array.forEach((producto) => {
        cardContainer.innerHTML += armarFilaHTML(producto)
    })
    activarClickEnBotonesCarr()
}

const activarClickEnBotonesCarr = ()=> {
    const botonesCarr = document.querySelectorAll('button.boton-comprar.button-outline')
    for (let botonCarr of botonesCarr) {
        botonCarr.addEventListener('click', ()=> {
            let resultadoProducto = muniecos.find((prod)=> prod.id === parseInt(botonCarr.id))
            carrito.push(resultadoProducto)
            saveStorage()
            mostrarMensajes(`El producto ${resultadoProducto.nombre} se guardó en el carrito`)
        })
    }
}

cargarProductos(muniecos)
