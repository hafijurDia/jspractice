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
        <p>Capital Name: ${country.capitla ? country.capital : 'No Capital'}</p>
        `
        countryWrap.appendChild(singCountry);
        console.log(country);
    });
}

loadCountry();