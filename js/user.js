let userInfo = document.querySelector("#user-info")
let userD = document.querySelector("#user")
let links = document.querySelector("#links")

if (localStorage.getItem("firstname")) {
    links.remove();

    userInfo.style.display = "flex";
    userInfo.style.justifyContent = "center";
    userInfo.style.alignItems = "left";    

    userD.innerHTML = `Welcome ${localStorage.getItem("firstname")}`;
}
let logOutBtn = document.querySelector("#logout")
logOutBtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location="login.html"
    } , 1500 )
})
