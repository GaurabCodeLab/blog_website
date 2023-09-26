const tech = document.querySelectorAll(".tech");
const food = document.querySelectorAll(".food");
const news = document.querySelectorAll(".news");
const allBtn = document.getElementById("first-btn");
const techBtn = document.querySelector(".tech-btn");
const foodBtn = document.querySelector(".food-btn");
const newsBtn = document.querySelector(".news-btn");
const btn = document.querySelectorAll(".btn");
const details = document.querySelectorAll(".details");
const navBar = document.querySelector(".nav-bar");
const main = document.getElementsByTagName("main");
const text = document.getElementById("text");

window.addEventListener("scroll", ()=>{
    if(scrollY>0){
        navBar.style.backgroundColor = "#fff";
        text.style.color = "black";
    }
    if(scrollY==0){
        navBar.style.backgroundColor = "transparent";
        text.style.color = "white";
    }
})

techBtn.addEventListener("click", (event)=>{ 
    btn.forEach((value)=>{
        value.style.backgroundColor = "transparent";
        value.style.color = "black";
    })
    details.forEach((value)=>{
        value.style.display = "block";
    });
    event.target.style.color = "white";
    event.target.style.backgroundColor = "rgba(77, 228, 255)";
    food.forEach((value)=>{
        value.style.display = "none";
    });
    news.forEach((value)=>{
        value.style.display = "none";
    })
})

foodBtn.addEventListener("click", (event)=>{ 
    btn.forEach((value)=>{
        value.style.backgroundColor = "transparent";
        value.style.color = "black";
    })
    details.forEach((value)=>{
        value.style.display = "block";
    });
    event.target.style.color = "white";
    event.target.style.backgroundColor = "rgba(77, 228, 255)";
    tech.forEach((value)=>{
        value.style.display = "none";
    });
    news.forEach((value)=>{
        value.style.display = "none";
    })
})

newsBtn.addEventListener("click", (event)=>{ 
    btn.forEach((value)=>{
        value.style.backgroundColor = "transparent";
        value.style.color = "black";
    })
    details.forEach((value)=>{
        value.style.display = "block";
    });
    event.target.style.color = "white";
    event.target.style.backgroundColor = "rgba(77, 228, 255)";
    tech.forEach((value)=>{
        value.style.display = "none";
    });
    food.forEach((value)=>{
        value.style.display = "none";
    })
})

allBtn.addEventListener("click", (event)=>{ 
    btn.forEach((value)=>{
        value.style.backgroundColor = "transparent";
        value.style.color = "black";
    })
    details.forEach((value)=>{
        value.style.display = "block";
    });
    event.target.style.color = "white";
    event.target.style.backgroundColor = "rgba(77, 228, 255)";
})

