const f=document.querySelector("#form")
const s=document.querySelector("#submit")

s.addEventListener("click",(e)=>{
    e.preventDefault()
    if(!f.checkValidity()){
        e.preventDefault()
        f.reportValidity()
        return
    }
    const form={
        name: document.querySelector("#name").value,
        email: document.querySelector("#un").value,
        password: document.querySelector("#phno").value
    }
    localStorage.setItem("email",JSON.stringify(form))
    f.reset()

    fetch("http://127.0.0.1:5000/users", {
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify(form)
    })
    .then(res=>res.json())
    .then(data=>console.log("Success",data))

    setTimeout(() => {
        window.location.href="verification.html"
    }, 1000);
})