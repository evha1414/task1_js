const contenedorTarjetas = document.querySelector('#contenedor')

let tarjetasGeneradas = crearTarjetas(data.events)

contenedorTarjetas.innerHTML = tarjetasGeneradas

function crearTarjetas(arrayDatos){
    let tarjetas = ''
    for (const events of arrayDatos) {
        tarjetas += `<div class="card" style="width: 18rem; height: 21rem;">
        <img src="..." class="card-img-top rounded-4 p-2" alt="...">
        <div class="card-body">
          <h5 class="fw-bold">${events.name}</h5>
          <p class="fst-italic">${events.date}</p>
          <p class="fw-semibold">${events.description}</p>
          <p class="card-text">${events.category}</p>
          <p class="text-decoration-underline">${events.place}</p>
          <p class="fw-light">${events.capacity}</p>
          <p class="fw-light">${events.assitance}</p>
          <p class="position-absolute bottom-1 start-1">${events.price}</p>
          <a href="#" class="btn btn-secondary position-absolute bottom-1 end-1">${events.button}</a>
        </div>
      </div>`
    }
    return tarjetas
}
