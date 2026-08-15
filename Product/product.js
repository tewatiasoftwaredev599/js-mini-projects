const msg = document.getElementById("msg")
const search = document.getElementById("search")
const tableBody = document.getElementById("tableBody")

let products = []
msg.textContent = "Loading...."


fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(data => {
    products = data
    msg.textContent = ""
    showProducts()
})
.catch(()=> msg.textContent = "Loading failed....")

function showProducts(text = ""){
    const result = products
    .filter(product => 
        product.title.toLowerCase().includes(text.toLowerCase())
    )

    .map(product => `
        <tr>
            <td><img src="${product.image}" width="50"/></td>
             <td>${product.title}</td>
              <td>$${product.price}</td>
               <td>${product.category}</td>
        </tr>

   ` )
    .join("")
    tableBody.innerHTML = result
    msg.textContent = result ? "" : "No result found!"
}
search.addEventListener("input", e=> showProducts(e.target.value))