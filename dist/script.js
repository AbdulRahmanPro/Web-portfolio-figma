    const but = document.getElementById("menu")
    const menulist = document.getElementById("menuList")

    but.addEventListener("click",(evnt)=>{
        console.log(2)
        menulist.classList.toggle("open")
    })