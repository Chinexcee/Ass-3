const div = document.querySelector('.container')
const button = document.getElementById('btn')

// lists.textContent = "Ovaltine"
// console.log(lists);

div.innerHTML += `<h2> List of items </h2>`

// div.innerText += "\n This is the only thing that matters in this case"


div.style.color = "green"

div.style.fontSize = "30px"

document.getElementById("btn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


btn.addEventListener("mouseout", ()=>{
    div.style.color = "orange"
    div.style.fontSize = "40px"
    
});

