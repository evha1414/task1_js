/* Filtramos eventos futuros */
let filteredEventFuture = data.events.filter(event => event.date > data.currentDate );


const container = document.getElementById("container-up");
let html = "";

for (let events of filteredEventFuture) {
    html += `
    <div class="card text-center bg-body-secondary" style="width: 18rem; height: 25rem;">
    <img src="${events.image}" class="card-img-top rounded-4 p-2" alt="...">
    <div class="card-body">
      <h5 class="fw-bold">${events.name}</h5>
      <p class="fst-italic fs-5">${events.date}</p>
      <p class="fst-italic fs-6">${events.description}</p>
      <p class="fw-bold">$${events.price}</p>
      <a href="./details.html" class="btn btn-outline-secondary position-absolute bottom-0 end-0">Details</a>
      </div>
    </div>
  ` 
}

container.innerHTML = html;

