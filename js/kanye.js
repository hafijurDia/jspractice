const loadQoute = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoutes(data));
}

function displayQoutes(qoutes){
    console.log(qoutes);
    const qputeContainer = document.getElementById('qoute-container');
    qputeContainer.innerText = qoutes.quote;
}

loadQoute();