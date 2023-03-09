/* Obtenemos los datos de los parámetros de la URL */
let params = new URLSearchParams(document.location.search);
let id = params.get("_id");

/* Buscar dato por id */
let cards = (data.events).filter(events => events._id == id);

/* Renderizar profile */
const container = document.getElementById("container-details");
let html = "";

for (let events of cards) {
    html += `
    <div class="container text-center w-50">
    <div class="card mb-3 bg-light" style:"width: 20rem;">
    <div class="d-flex flex-wrap border border-2 rounded-3">
      <div class="col-md-6">
        <img src="${events.image}" class="card-img-top rounded-4 p-1" alt="...">
        <p class="fst-italic fw-bold fs-4">${events.date}</p>
        <a href="./index.html" class="btn btn-secondary">Go back...</a>
      </div>
      <div class="col-md-6">
        <div class="card-body text-center">
          <p class="card-title fw-bold fs-4">${events.name}</p>
          <p class="fst-italic fs-6">${events.description}</p>
          <p class="card-text fs-6"><class="text-muted">${events.place}</p>
          <p class="card-text fs-6"><class="text-muted">${events.category}</p>
          <p class="card-text fs-6"><small class="text-muted">Capacity: ${events.capacity}</small></p>
          <p class="card-text fs-6"><small class="text-muted">Assistance: ${events.assistance}</small></p>
          <p class="fst-italic fw-bold fs-6">$${events.price}</>
          </div>
        </div>
      </div>
    </div>
  </div>
  ` 
}

container.innerHTML = html 