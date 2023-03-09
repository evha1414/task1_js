let filteredEventFuture = data.events.filter(event => event.date > data.currentDate );

/* Obtenemos los datos de los parámetros de la URL */
let params = new URLSearchParams(document.location.search);
let id = params.get("_id");

/* Buscar dato por id */
let cards = (data.events).filter(events => events._id == id);

/* Renderizar profile */
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
      <a href="./details.html?_id=${events._id}" class="btn btn-outline-secondary position-absolute bottom-0 end-0">Details</a>
      </div>
    </div>
  ` 
}

container.innerHTML = html;

/* Filtrar con botón*/
let boton = document.getElementById("boton");

let lista = document.getElementById("lista");

let checks = document.querySelectorAll(".valores");

boton.addEventListener("click",function(){
 lista.innerHTML = "";
 checks.forEach((elemento)=>{
  if(elemento.checked == true){
    let elemento = document.createElement("li");
    elemento.className = "list-group-item";
    elemento.innerHTML = e.value;
    lista.appendChild(elemento);
  }
 });
});

/* Filtramos con search */
const d = document;

function searchFilters(input, selector){
  searchFilters(".card-filter", ".card");
  d.addEventListener("keyup", e => {
    if(e.target.matches(input)){

      if(e.key === "Escape") e.target.value = "";
      
      d.querySelectorAll(selector).forEach(elemento =>
         elemento.textContent.toLowerCase().includes(e.target.value)
          ?elemento.classList.remove("filter")
          :elemento.classList.add("filter")
      );
    }
  })
}