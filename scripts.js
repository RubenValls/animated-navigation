const nav = document.querySelector(".navigation");
const menuItems = document.querySelectorAll("a")
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    menuItems.forEach((item) => {
        if(item.classList.contains("active")){
            nav.classList.remove("active")
            item.classList.remove("active")
        }else{
            item.classList.add("active")
            nav.classList.add("active")
        }
    })
})