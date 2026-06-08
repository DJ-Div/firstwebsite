const switches = document.querySelectorAll(".switch");

window.onload=function(){
    const from=document.referrer
    if(from.includes("offline.html")){
        document.body.style.animation="up 0.5s ease reverse"
    }
    else if(from.includes("about.html")){
        document.body.style.animation="up 0.5s ease reverse"
    }
    else if(from.includes("c.html")){
        document.body.style.animation="down 0.5s ease reverse"
    }
}

switches.forEach(el=>{
    el.addEventListener("click",(e)=>{
        if(el.href.includes("c.html")){
            e.preventDefault()
            document.body.style.animation="none"
            document.body.offsetHeight
            document.body.style.animation="down 0.5s ease forwards"
            setTimeout(() => {
                window.location.href=el.href
            }, 500);
        }
        else if(el.href.includes("offline.html")){
            e.preventDefault()
            document.body.style.animation="none"
            document.body.offsetHeight
            document.body.style.animation="up 0.5s ease forwards"
            setTimeout(() => {
                window.location.href=el.href
            }, 500);
        }
        else if(el.href.includes("about.html")){
            e.preventDefault()
            document.body.style.animation="none"
            document.body.offsetHeight
            document.body.style.animation="up 0.5s ease forwards"
            setTimeout(() => {
                window.location.href=el.href
            }, 500);
        }
    })
})