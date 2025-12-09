// ===============================
// BUSCADOR POR BOTÓN CON API
// ===============================

const buscadorPais = document.getElementById("buscadorPais");
const btnBuscarPais = document.getElementById("btnBuscarPais");
const resultadoPais = document.getElementById("resultadoPais");

btnBuscarPais.addEventListener("click", () => {
  const nombrePais = buscadorPais.value.trim();

  if (nombrePais === "") {
    alert("Escribe el nombre de un país");
    return;
  }

  fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)
    .then(res => res.json())
    .then(data => {
      const pais = data[0];

      resultadoPais.innerHTML = `
        <div class="col-md-6">
          <div class="card shadow p-3">
            <img src="${pais.flags.png}" class="img-fluid mb-2">

            <h4>${pais.name.common}</h4>
            <p><strong>Capital:</strong> ${pais.capital ? pais.capital[0] : "No disponible"}</p>
            <p><strong>Región:</strong> ${pais.region}</p>
            <p><strong>Población:</strong> ${pais.population.toLocaleString()}</p>
            <p><strong>Idioma:</strong> ${
              pais.languages ? Object.values(pais.languages)[0] : "No disponible"
            }</p>

            <button class="btn btn-success mt-2">
              Agregar al carrito
            </button>
          </div>
        </div>
      `;
    })
    .catch(error => {
      resultadoPais.innerHTML = `
        <div class="col-12">
          <div class="alert alert-danger">
            No se encontró el país. Intenta escribirlo correctamente.
          </div>
        </div>
      `;
    });
});
