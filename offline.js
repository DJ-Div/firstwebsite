const switches = document.querySelectorAll(".switch");

const PreviousLoad=document.referrer

if(!sessionStorage.getItem("FirstLoad")){
  document.querySelector("body").classList.add("animate")
}

sessionStorage.setItem("FirstLoad","true")

// Click navigation with proper animation reset
switches.forEach(el => {
  el.addEventListener("click", (e) => {
    document.body.classList.remove("no-animation");
    e.preventDefault();
    document.body.style.animation = "none";
    document.body.offsetHeight;
    document.body.style.animation = "down 0.5s ease forwards";
    setTimeout(() => {
      window.location.href = el.href;
    }, 500);
  });
});

if(PreviousLoad){
  window.onload = function () {
    setTimeout(() => {
      document.body.style.animation = "down 0.5s ease reverse";
    }, 0);
  };
};