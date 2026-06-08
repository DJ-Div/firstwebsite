const appear = document.querySelector("button")
const file = document.querySelector("#testDiv")

appear.addEventListener("click", (e)=>{
    e.preventDefault()
    e.stopPropagation()
    file.style.display = "block"
    setTimeout(() => {
        file.style.opacity = "1"
        file.style.transform = "translate(100px)"
    }, 500);
})