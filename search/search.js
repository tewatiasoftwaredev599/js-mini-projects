const search = document.getElementById("search")
const msg = document.getElementById("msg")
const list = document.getElementById("list")


let users = []
msg.textContent = "Loading...."


fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    users = data
    msg.textContent = ""
    showUsers()
})
.catch(()=> msg.textContent = "Loading failed...")

function showUsers(text = ""){
    const result = users
    .filter(user => 
        user.name.toLowerCase().includes(text.toLowerCase())
    )
    .map(user => `<li>${user.name}-${user.email}</li>`)
    .join("")


   list.innerHTML = result
    msg.textContent = result ? "" : "No result found!"
}
search.addEventListener("input", e=> showUsers(e.target.value));