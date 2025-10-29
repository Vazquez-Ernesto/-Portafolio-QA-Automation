document.addEventListener('DOMContentLoaded', function() {
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
            // Technical Skills
            habilidades[0].classList.add("Testingfuncional");
            habilidades[1].classList.add("selenium");
            habilidades[2].classList.add("cypress");
            habilidades[3].classList.add("api");
            habilidades[4].classList.add("sql");
            habilidades[5].classList.add("git");
            habilidades[6].classList.add("jenkins");
            // Soft Skills
            habilidades[7].classList.add("comunicacion");
            habilidades[8].classList.add("trabajo");
            habilidades[9].classList.add("creatividad");
            habilidades[10].classList.add("dedicacion");
        }
    }

    // Detecto el scrolling para aplicar la animación de las barras de habilidades
    window.addEventListener("scroll", efectoHabilidades);

    // Hacer las funciones disponibles globalmente
    window.mostrarOcultarMenu = mostrarOcultarMenu;
    window.seleccionar = seleccionar;
});



