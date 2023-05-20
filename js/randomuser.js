const loadUser = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data));
}
function displayUser(user){
    const userContainer = document.getElementById('random-users');
    const singleUer = document.createElement('div');
    singleUer.innerHTML = `
        <img src='${user.results[0].picture.large}' alt='User Picture' />
        <p>Name: ${user.results[0].name.first}</p>
        <p>Gender: ${user.results[0].gender}</p>
        <p>Email: ${user.results[0].email}</p>
        <p>Phone: ${user.results[0].phone}</p>
        <p>Address: ${user.results[0].location.city}</p>
        
    `
    userContainer.appendChild(singleUer);
    console.log(user)
}
loadUser();