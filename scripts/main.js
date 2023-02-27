const contenedorTarjetas = document.querySelector('#contenedor')

let tarjetasGeneradas = crearTarjetas(data)

contenedorTarjetas.innerHTML = tarjetasGeneradas

function crearTarjetas(arrayDatos){
    let tarjetas = ''
    for (const data of arrayDatos) {
        tarjetas += `<div class="card" style="width: 18rem; height: 21rem;">
        <img src="..." class="card-img-top rounded-4 p-2" alt="...">
        <div class="card-body">
          <h5 class="fw-bold">${data.name}</h5>
          <p class="fst-italic">${data.date}</p>
          <p class="fw-semibold">${data.description}</p>
          <p class="card-text">${data.category}</p>
          <p class="text-decoration-underline">${data.place}</p>
          <p class="fw-light">${data.capacity}</p>
          <p class="fw-light">${data.asssitance}</p>
          <p class="position-absolute bottom-1 start-1">${data.price}</p>
          <a href="#" class="btn btn-secondary position-absolute bottom-1 end-1"></a>
        </div>
      </div>`
    }
    return tarjetas
}
