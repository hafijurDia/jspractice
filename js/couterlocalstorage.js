const count = () => {
    const counterField = document.getElementById('counter-tag');
    const initiateValue = counterField.innerText;
    let initiatValueInteger = parseInt(initiateValue);
    initiatValueInteger++;
    document.getElementById('counter-tag').innerText = initiatValueInteger;
    let stringifyCounte = JSON.stringify(initiatValueInteger);
    localStorage.setItem('counter',stringifyCounte);
    

}

 const getCounterInLocalStorage = () => {
    const counterField = document.getElementById('counter-tag');
    const numberFormLocalStorage = localStorage.getItem('counter');
    counterField.innerText = numberFormLocalStorage;
    document.getElementById('counter-tag').innerText = initiatValueInteger;
 }
 getCounterInLocalStorage();


