const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
}

function displayCountry(countries){
    const countryWrap = document.getElementById('country-container');
    //we can use for loop or map or foreach loop
    countries.forEach(country => {
        const singCountry = document.createElement('div');
        singCountry.classList.add('sing-country');
        singCountry.innerHTML = `
        <p>Country Name:${country.name.common} </p>
        <p>Capital Name: ${country.capital ? country.capital : 'No Capital'}</p>
        <img width="100px" src="${country.flags.png}" />
        <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countryWrap.appendChild(singCountry);
    });
}


const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = country => {
    const detailsWrap = document.getElementById('show-details');
    detailsWrap.innerHTML = `
        <h3>Country: ${country.name.common} </h3>
        <h5>Region: ${country.region}</h5>
        <img src="${country.flags.png}" />
    `
    console.log(country)
}

loadCountry();