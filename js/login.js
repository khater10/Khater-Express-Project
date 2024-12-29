let email = document.querySelector("#email")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign_in")
let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

loginBtn.addEventListener("click", function(e){
    e.preventDefault()
    if (email.value === "" | password.value === ""){
        alert("please fill all data")
    }
    else {
        if(getEmail && getEmail.trim() === email.value.trim() && getPassword && getPassword.trim() === password.value){
            setTimeout(()=>{
                window.location = "index.html"
            },1500)
        } else{
            alert("Email or Password is incorrect")
        }
    }
})
