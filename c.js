const switches = document.querySelectorAll(".switch");

// Click navigation with proper animation reset
switches.forEach(el => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("no-animation");
    document.body.style.animation = "none";
    document.body.offsetHeight;
    document.body.style.animation = "up 0.5s ease forwards";
    setTimeout(() => {
      window.location.href = el.href;
    }, 500);
  });
});

window.onload = function () {
  document.body.style.animation = "up 0.5s ease reverse";
};

const insta=document.querySelector("#i1")
const yt=document.querySelector("#i2")
const mail=document.querySelector("#i3")
const wa=document.querySelector("#i4")

insta.addEventListener("click",()=>{
  window.location.href="https://www.instagram.com/notemaker.official/?hl=en"
})
yt.addEventListener("click",()=>{
  window.location.href="http://www.youtube.com/@NoteMaker-w5t"
})
mail.addEventListener("click",()=>{
  window.location.href="mailto:notemaker.official@gmail.com"
})
wa.addEventListener("click",()=>{
  window.location.href="https://wa.me/7045062735"
})

const b=document.querySelector("button")

b.addEventListener("click", (e)=>{
  window.location.href="info.html"
})