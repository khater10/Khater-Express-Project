let Fname = document.querySelector("#firstname")
let Lname = document.querySelector("#lastname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let registerBtn = document.querySelector("#sign_up")

registerBtn.addEventListener("click", function(e){
    e.preventDefault()
    if (Fname.value === "" |Lname.value === ""| password.value === "" | email.value === ""){
        alert("please fill all data")
    }
    else {
        localStorage.setItem("firstname", Fname.value)
        localStorage.setItem("lastname", Lname.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        setTimeout(()=>{
            window.location = "login.html"
        },1500)
    }
})