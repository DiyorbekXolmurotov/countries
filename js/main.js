const searchBar = document.querySelector("[data-input]");
const searchBtn = document.querySelector("button");
const countryCard = document.getElementById("countries-card");

async function getAllCountryInfo() {
  fetch(`https://restcountries.com/v3.1/all`).then(res => res.json()).then(res => {
  renderC(res);
})
}

async function searchC(name){
  fetch(`https://restcountries.com/v3.1/name/${name}`).then(res => res.json()).then(res => {
    renderC(res);
})
}

function renderC(countries) {
  console.log(countries);
  let html = ""
  countries.forEach(country => {
    html += `
    <div class="eachDiv">
    <img src="${country.flags.png}">
    <h2>${country.name.common}</h2>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    </div>
    `
  })
  countryCard.innerHTML = html
}
getAllCountryInfo();

searchBar.addEventListener("change", evt => {
  evt.preventDefault()
  searchC(evt.target.value)
})