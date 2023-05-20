function userPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}

function displayPost(posts){
    const parentDiv = document.getElementById('post-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
        <h3>User Id: ${post.userId}</h3>
        <h4>Title: ${post.title}</h4>
        <p>Details: ${post.body}</p>
        `;
        parentDiv.appendChild(postDiv);
        
    }
}

userPost();