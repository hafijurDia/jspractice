// name store in local storage
const sendData = (id) => {
    const iputField = document.getElementById(id);
    const inputValue = iputField.value;
    if (id === 'name') {
        iputField.value = '';
        saveNameInLocalStorage(inputValue); 
    }
    else if (id === 'email') {
        iputField.value = '';
        saveEmailInLocalStorage(inputValue);
    }
    else if (id === 'message') {
        iputField.value = '';
        saveMessageInLocalStorage(inputValue); 
    }
    
}
// name save
const saveNameInLocalStorage = (inputValue) => {
    localStorage.setItem('name', inputValue);
}

//email save
const saveEmailInLocalStorage = (inputValue) => {
    localStorage.setItem('email', inputValue);
}

//message save
const saveMessageInLocalStorage = (inputValue) => {
    localStorage.setItem('message', inputValue);
}

//delete name
const nameDelete = () => {
    localStorage.removeItem("name");
}
//delete email
const emailDelete = () => {
    localStorage.removeItem("email");
}
//delete message
const messageDelete = () => {
    localStorage.removeItem("message");
}

//delete message
const allClear = () => {
    localStorage.clear();
}