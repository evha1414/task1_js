const contenedorTarjetas = document.querySelector('#contenedor')

let tarjetasGeneradas = crearTarjetas(personas)

contenedorTarjetas.innerHTML = tarjetasGeneradas

function crearTarjetas(arrayDatos){
    let tarjetas = ''
    for (const persona of arrayDatos) {
        tarjetas += <div class="card text-black" style=
        <h5 class="card-ttle">${persona.name}</h5>
        <p class="card-text text-danger flex-grow-1"${persona.}
    }
    return tarjetas
}