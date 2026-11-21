const toggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-link").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");}));
const links=document.querySelectorAll(".nav-link");
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));}),{rootMargin:"-35% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(s=>observer.observe(s));
document.getElementById("year").textContent=new Date().getFullYear();