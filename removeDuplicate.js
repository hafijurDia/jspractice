const friends = ['abul','kabul','abul','saleh','karim','rahim','sumon','abul','saleh','karim'];
function removeDuplicate(){
    const unique = [];
    for (let i = 0; i < friends.length; i++) {
        const name = friends[i];
        console.log(name);
        if (unique.includes(name) === false) {
            unique.push(name);
        }
        
    }
    return unique;
}

