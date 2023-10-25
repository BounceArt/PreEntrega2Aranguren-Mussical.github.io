// arrays
 let carrito = []

// objeto
const productos = [
    {nombre: "Cort CR Series CR200", precio: 1520},
    {nombre: "Amplificador Orange Crush 35RT", precio: 725.79},
    {nombre: "Antenna By Cave In LP", precio: 10},
    {nombre: "Nevermind By Nirvana LP", precio: 15},
    {nombre: "LTD MH Series MH-10", precio: 955}
]
let comprar = prompt("Desea comprar un producto, Ingrese SI o NO").toUpperCase()
// Utilización de ciclos while y condicionales if 

// Utilizacion de operador ternario en bucle while
while (comprar !== "SI" && comprar !== "NO" ? (alert("Por favor, ingrese SI o NO"), true) : false) {
    comprar = prompt("¿Desea comprar un producto? (SI - NO)").toUpperCase()}

if(comprar === "SI"){
    const mensajeBienvenida = document.getElementById("mensaje-bienvenida")
    mensajeBienvenida.textContent = "Bienvenido a Mussical."
    let todoLosProductos = productos.map((producto) => producto.nombre.concat(" " + producto.precio) + "$")
    alert(todoLosProductos.join(" - "))
}else if(comprar == "NO"){
    const mensajeDespedida = document.getElementById("mensaje-despedida")
    mensajeDespedida.textContent = "Gracias por su visita a Mussical. Hasta pronto!"
}
const carritoElement = document.getElementById("carrito")
while(comprar !== "NO"){
    let producto = prompt("Agrega un producto en tu carrito.")
    let precio = 0

    if(producto == "Cort CR Series CR200" || producto == "Amplificador Orange Crush 35RT" || producto == "Antenna By Cave In LP" ||producto == "Nevermind By Nirvana LP" || producto == "LTD MH Series MH-10"){
        switch(producto){
            case "Cort CR Series CR200":
                precio = 1520
                break
            case "Amplificador Orange Crush 35RT":
                precio = 725.79
                break
            case "Antenna By Cave In LP":
                precio = 10
                break
            case "Nevermind By Nirvana LP":
                precio = 15
                break
            case "LTD MH Series MH-10":
                precio = 955
                break
            default:
                break            

        }
        let unidades = parseInt(prompt("Cuantas unidades quieres llevar?"))

        
        carrito.push({producto, unidades, precio})
        carritoElement.innerHTML = ""
    }else{
        const mensajeError = document.getElementById("mensaje-error")
    mensajeError.textContent = "No selecciono ninguno de los productos mencionados"
    break
    }

    seleccion = prompt("Desea seguir comprando? (SI - NO)").toUpperCase()

 // Mediante el ciclo while se verifica si el usuario quiere o no seguir comprando, si la respuesta es no se le mostrara su carrito final mediante consola.   
    while(seleccion === "NO"){
        carrito.forEach((carritoFinal) => {
            const carritoItem = document.createElement("p")
            carritoItem.textContent = `Producto: ${carritoFinal.producto}, Unidades: ${carritoFinal.unidades}, Total a pagar: ${carritoFinal.unidades * carritoFinal.precio}`
            carritoElement.appendChild(carritoItem)
          })
        break
    }

}

// Almacenamiento de productos con localstorage y JSON

const productosJSON = JSON.stringify(productos)

localStorage.setItem("productos", productosJSON)

const productosRecuperadosJSON = localStorage.getItem('productos');

const productosRecuperados = JSON.parse(productosRecuperadosJSON);

console.log(productosRecuperados)