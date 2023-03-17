const contenedorTarjetas = document.querySelector('#container');

let tarjetasGeneradas = crearTarjetas(data.events, data.currentDate);

contenedorTarjetas.innerHTML = tarjetasGeneradas;

function crearTarjetas(arrayDatos){
    let tarjetas = '';
    for (const events of arrayDatos){
        tarjetas += `
    <div class="card text-center bg-body-secondary" style="width: 18rem; height: 25rem;">
    <img src="${events.image}" class="card-img-top rounded-4 p-2" alt="...">
    <div class="card-body">
      <h5 class="fw-bold">${events.name}</h5>
      <p class="fst-italic fs-5">${events.date}</p>
      <p class="fst-italic fs-6">${events.description}</p>
      <p class="fw-bold">$${events.price}</p>
      <a href="./details.html?_id=${events._id}" class="btn btn-outline-secondary position-absolute bottom-0 end-0">Details</a>
      </div>
    </div>
    `
    }
return tarjetas;
  }

function details(_id){
    window.location.href = `./details.html?id=${_id}`
  }


 /* const search = document.getElementById("search");
  const categories = document.getElementById("category")
/*function crearChechbox(events, contenedor){
  let fn = events => events.category
  let categories = new Set(events.map(fn))
  categories.forEach(valores => {
    contenedor.innerHTML += `
    <label for="${valores}">
      <input id="valores" type="checkbox" name="position1" value="${category}">
  </label>
    `
  })
}

  
/*const boton = document.getElementById("boton");

function filter(){

  let filterSearch.filter(iteracion => iteracion.name.toLowerCase().includes(search.value.toLowerCase()))
}

