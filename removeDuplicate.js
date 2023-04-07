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
//console.log(removeDuplicate());
const myArray = [56, 89, 23, 101, 72, 94, 80, 88];

const result = myArray.filter(num => num > 80);
