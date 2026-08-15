let count = 0
const value = document.getElementById("value")
const incrementBtn = document.getElementById("increment")
const decrementBtn = document.getElementById("decrement")
const resetBtn = document.getElementById("reset")


incrementBtn.addEventListener("click", ()=> {
    if(count < 10){
        count++
        value.textContent = count
    }
})


decrementBtn.addEventListener("click", ()=> {
    if(count > 0){
        count--
        value.textContent = count
    }
})

resetBtn.addEventListener("click", ()=> {
    count = 0
    value.textContent = count
})

