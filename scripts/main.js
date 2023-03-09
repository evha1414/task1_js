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

/* Fltrar con botón */
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

deburguer;
function search() {
  let filter = document.getElementById("find").value.toUpperCase();

  let item = document.querySelectorAll(".card");

  let l = document.getElementsByTagName("h5");

  for(let i = 0;i<=l.length;i++){
    let a=item[i].getElementsByTagName("h5")[0];

    let value=a.innerHTML || a.innerText || a.textContent;

    if(value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display="";
    }
    else
  {
    item[i].style.display="none";
  }
  }
}


