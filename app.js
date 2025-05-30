function toggleMenu() {
    const nav = document.getElementById("navList");
    nav.classList.toggle("active");
  }

const colors = ["#0f0f1a", "#1a1a2e", "#2c2c44", "#3a3a5a", "#4b4b6e"];
let index = 0;

setInterval(() =>{
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
},2000)