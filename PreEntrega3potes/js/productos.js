const muniecos = [{id: 10, imagen:"imagenes/dragon1.jpg", nombre: 'Mestro Roshi', precio: 15000},
                 {id: 50, imagen:"imagenes/dragon2.jpg", nombre: 'Trunks', precio: 9500},
                 {id: 35, imagen:"imagenes/dragon3.png", nombre: 'Gohan', precio: 9800},
                 {id: 22, imagen:"imagenes/one1.jpg", nombre: 'Sanji', precio: 8600},
                 {id: 11, imagen:"imagenes/one2.jpg", nombre: 'Tony Chooper', precio: 5500},
                 {id: 85, imagen:"imagenes/one3.jpg", nombre: 'Brook', precio: 4200},
                 {id: 23, imagen:"imagenes/demon1.jpg", nombre: 'Zenitsu', precio: 6100},
                 {id: 19, imagen:"imagenes/demon2.jpg", nombre: 'Tanjiro', precio: 8200},
                 {id: 24, imagen:"imagenes/demon3.jpg", nombre: 'Inosuke', precio: 7500},
                 {id: 95, imagen:"imagenes/naruto1.jpg", nombre: 'Shikamura', precio: 6000},
                 {id: 47, imagen:"imagenes/naruto2.jpg", nombre: 'Jiraya', precio: 4700},
                 {id: 14, imagen:"imagenes/naruto3.jpg", nombre: 'Kakayi', precio: 8000}]

const saveStorage = ()=> {
    if (carrito.length > 0) {
      localStorage.setItem('Carrito', JSON.stringify(carrito))
      }
}
                
const recuperarDeLocalStorage = ()=> {
    if (localStorage.getItem('Carrito')) {
        return JSON.parse(localStorage.getItem('Carrito'))
  } else {
       return []
    }
 }
                
const carrito = recuperarDeLocalStorage()
                
const mostrarMensajes = (msg)=> {
    const divMsg = document.querySelector('div.msg')
    divMsg.textContent = msg || ''
     }

