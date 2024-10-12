let menuVisible = false;
const navElement = document.getElementById("nav");

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    navElement.classList.toggle("responsive", !menuVisible);
    menuVisible = !menuVisible;
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    navElement.classList.remove("responsive");
    menuVisible = false;
}

function efectoHabilidades(){
    console.log("efectoHabilidades se está ejecutando"); // Comprobación
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("TestingFuncional");
        habilidades[1].classList.add("pruebas-de-stress");
        habilidades[2].classList.add("api");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("Automation");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("Proyect");
    }
}
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add(clases[i]);
        }



