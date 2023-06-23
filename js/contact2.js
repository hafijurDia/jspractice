// name store in local storage
const Send = () => {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
    const name = nameField.value;
    const email = emailField.value;
    const message = messageField.value;
    saveNameInLocalStorage(name,email,message)
   
    
}
// name save
const saveNameInLocalStorage = (name,email,message) => {
    const contacts = {};
    contacts['name'] = name;
    contacts['email'] = email;
    contacts['message'] = message;
    const stringifyContact = JSON.stringify(contacts);
    localStorage.setItem('contacts data',stringifyContact);
    
    //below this code for getting data form localstorage
    const data = localStorage.getItem('contacts data');
    const parsedata = JSON.parse(data);
    console.log(parsedata);

}


//delete message
const allClear = () => {
    localStorage.clear();
}