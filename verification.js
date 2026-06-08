const localEmail=localStorage.getItem("email")
const parsed=JSON.parse(localEmail)
document.querySelector("#email").textContent=parsed.email

const inputs = document.querySelectorAll(".box");

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

const s=document.querySelector("#s")

s.addEventListener("click", (e)=>{
  e.preventDefault()
  
  const f1=document.querySelector("#f1").value
  const f2=document.querySelector("#f2").value
  const f3=document.querySelector("#f3").value
  const f4=document.querySelector("#f4").value

  const user_otp=f1+f2+f3+f4

  fetch("http://127.0.0.1:5000/otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user_otp)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data.done)
    if(data.done==true){
      window.location.href="dashboard.html"
    }
    else{
      const err=document.querySelector("#err")
      err.style.display="block"
    }
  })
});

