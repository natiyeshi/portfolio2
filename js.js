const toggle = document.querySelector(".toggle")
toggle.addEventListener("click",()=>{
    toggle.style.display = "none"
    let file = document.createElement('div')
    file.style.cssText = 'position:relative; width:100%; height:40px; background:#16e0bd;color:white;'
    toggle.appendChild(file)
})