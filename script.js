// CAMBIAR SECCIONES
function showSection(id){
  document.querySelectorAll(".section").forEach(sec=>{
    sec.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
}

// LOGIN SIMPLE
function openLogin(){
  alert("Sistema de login lo agregamos después 🔥");
}
