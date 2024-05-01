const div = document.getElementById('container')

const fetchPosts = async()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  console.log(posts);

  posts.forEach((each) => {
    
    div.innerHTML += `
    <div class = "card">
    <h1>${each.id}</h1>
    <h3>${each.title}</h3>
    <p>${each.body}</p>
    <button class='btn'>View post on blog</button>

    </div>
    `
   
  });

}

fetchPosts()