const form = document.getElementById("loginForm")
const email = document.getElementById("email")
const password = document.getElementById("password")
const eMsg = document.getElementById("e-msg")
const pMsg = document.getElementById("p-msg")


function clearErrors(){
    eMsg.textContent = ""
    pMsg.textContent = ""
}


function emailValidate(em){
    if(!em) return "Email required"
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(em)) return "Invalid email"
    return ""
}


function passwordValidate(pw){
    if(!pw) return "Password required"
    if(pw.length < 6) return "Password must be atleast 6+chars."
    return ""
}


form.addEventListener("submit", (e)=> {
    e.preventDefault()
    clearErrors()


    const em = email.value.trim()
    const pw = password.value.trim()


    const emErr = emailValidate(em)
    const pwErr = passwordValidate(pw)


    if(emErr) eMsg.textContent = emErr
    if(pwErr) pMsg.textContent = pwErr


    if(!emErr && !pwErr){
        alert(`Login Successfully, Welcome ${em}`)
        form.reset()
    }
});