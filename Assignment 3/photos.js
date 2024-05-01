const div = document.getElementById('container')

const fetchUser = async()=> {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums')
  const users = await response.json()

  console.log(users);

  users.forEach((each) => {
    
    div.innerHTML += `
    <h1>${each.id}</h1>
    <h3>${each.title}</h3>
    
    <button class='btn'>Click here</button>
    `
   
  });

}

fetchUser()