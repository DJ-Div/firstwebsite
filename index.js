let b=document.querySelector("button")

b.addEventListener("click", (e)=>{
    e.preventDefault()
    fetch("http://127.0.0.1:5000/data")
    .then(res=>res.json())
    .then(data=>{
        const output=document.querySelector("#output")
        const user=data.data
        const email=document.querySelector("#email").value
        const password=document.querySelector("#password").value
        const check=user.some(u=>u.email==email && u.password==password);
        if(check){
            console.log(true)
            window.location.href = "dashboard.html"
        }
        else{
            output.setAttribute("text-new", "Invalid Credentials")
            output.style.backgroundColor="red"
            setTimeout(() => {
                output.setAttribute("text-new", "")
                output.style.backgroundColor="transparent"
            }, 2000);
        }
    })
})