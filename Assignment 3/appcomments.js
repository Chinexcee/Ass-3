const div = document.getElementById('container')

const fetchUser = async()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const users = await response.json()

  console.log(users);

  users.forEach((each) => {
    
    div.innerHTML += `
    <div class = "card">
    <h1>${each.name}</h1>
    <h3>${each.email}</h3>
    <p>${each.body}</p>
    <button class='btn'>Read more</button>

    </div>
    `
   
  });

}

fetchUser()