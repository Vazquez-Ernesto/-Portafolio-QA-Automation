Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignorar errores específicos
    if (err.message.includes('habilidades is not defined')) {
    return false;
    }
    // Dejar que otros errores se manejen normalmente
    return true;
    });
    
   
   describe('Validar portafolio completo', () => {
    beforeEach(() => {
    cy.visit('https://vazquez-ernesto.github.io/-Portafolio-QA-Automation/')
    })
   
   it('Validar logo', () => {
    cy.get('.logo > a')
    .should('exist')
   })
   
   
   it('Validar Contenedor de banner', () => {
    cy.get('.contenido-banner').should('exist')
   })
   
   it('Validar Contenedor de imagen', () => {
    cy.get('.contenedor-img').should('exist')
   })
   
   it('Validar imagen', () => {
    cy.get('img').should('exist')
   })
   
   it('Validar titulo del banner', () => {
    cy.get('h1').should('have.text', 'Ernesto Vazquez')
   })
   
   it('Validar subtitulo del banner', () => {
    cy.get('.contenido-banner > h2').should('have.text', 'QA Engineer/Dev Front-Junior')
   })
   
   it('Validar elemento donde se encuentra el boton que redirige al linkedin', () => {
    cy.get('.redes').should('exist')
   })
   
   it('Validar hacer click en el boton de linkedin', () => {
    cy.get('.redes > a').click();
   })
   
   it('Validar Seccion Sobre Mi', () => {
    cy.get('#sobremi > .contenido-seccion > h2').should('have.text', 'Sobre Mí')
   })

   it('Validar Seccion Sobre Mi contenido', () => {
    cy.get('.contenido-seccion > p').should('have.text', 'Hola, soy Ernesto Vázquez un apasionado por la tecnología y el arte de resolver problemas. Mi viaje en el mundo del desarrollo y la automatización comenzó con una simple curiosidad: ¿cómo funcionan las cosas por dentro? Hoy, esa curiosidad me ha llevado a dominar una variedad de herramientas y lenguajes que me permiten construir y optimizar soluciones digitales.')
   })

   it('Validar contenido "Datos personales"', () => {
    cy.contains('h3', 'Datos Personales').should('be.visible'); // Verifica el título
    cy.contains('strong', 'Cumpleaños').parent().should('contain', '28-02-2001');
    cy.contains('strong', 'Teléfono').parent().should('contain', '3704824222');
    cy.contains('strong', 'Email').parent().should('contain', 'ernestoalexisvazquez@gmail.com');
    cy.contains('strong', 'Dirección').parent().should('contain', 'Buenos Aires (CABA), Argentina');
    cy.contains('strong', 'Cargo').parent().should('contain', 'QA ANALYST MANUAL/AUTOMATION');
   })

it('Validar seccion intereses', () => {

    // Validar que el título "Intereses" esté visible
cy.contains('h3', 'Intereses').should('be.visible');

// Validar que cada interés está presente
const intereses = ['Juegos', 'Musica', 'Viajar', 'Deporte', 'Libros', 'Desarrollo'];

intereses.forEach((interes) => {
  cy.contains('.interes span', interes).should('be.visible');
});
})

it('Validar Iconos', () => {
    cy.get('.interes i.fa-ghost').should('exist');
    cy.get('.interes i.fa-headphones').should('exist');
    cy.get('.interes i.fa-plane').should('exist');
    cy.get('.interes i.fa-person-hiking').should('exist');
    cy.get('.interes i.fa-book').should('exist');
    cy.get('.interes i.fa-code').should('exist');
    
})

it('Validar Boton "Descargar CV', () => {
// Validar que el botón de descarga está visible
cy.get('#download-cv').should('be.visible');

// Verificar que el enlace tenga el atributo 'download'
cy.get('#download-cv')
  .should('have.attr', 'download', 'CV Ernesto Vazquez QA Automation');

// Verificar que el enlace apunta al archivo correcto
cy.get('#download-cv')
  .should('have.attr', 'href')
  .and('include', 'cv.pdf'); // Se asegura de que el archivo es cv.pdf

// Verificar el texto del botón
cy.get('#download-cv').should('contain.text', 'Descargar CV');

// Opcional: Simular clic y validar la navegación
cy.get('#download-cv').then((link) => {
  const url = link.prop('href');
  cy.request(url).its('status').should('eq', 200); // Verifica que el archivo existe y es accesible
});

})

it('Validar Titulo de la seccion SKILLS', () => {
    cy.contains('h2','Skills').should('be.visible')  
})

it('Validar subtitulo de la seccion SKILLS', () => {
  cy.contains('h3', 'Technical Skills').should('be.visible');
})

it('Validar subtitulo de la seccion SKILLS', () => {
cy.contains('h3', 'Soft Skills').should('be.visible');
})



it('Validar barras de progreso de las seccion "Professional Skills"', () => {

// Función para validar una barra de progreso
const validarProgreso = (skill, porcentaje) => {
  cy.contains('span', skill)
    .parent()
    .find('.progreso')
    .as('barra');

  // Esperamos a que la animación termine (ajusta si es necesario)
  cy.wait(2000);

  // Verificamos que el porcentaje mostrado en el <span> es correcto
  cy.get('@barra')
    .find('span')
    .should('have.text', `${porcentaje}%`);

  // Validar que el ancho de la barra sea acorde al porcentaje
  cy.get('@barra')
    .invoke('width')
    .should('be.greaterThan', 0) // Asegura que se llenó algo
    .and('be.lte', 812.6875 ); // Ajusta el número según el tamaño máximo de la barra en píxeles
};

// Validar cada habilidad con su porcentaje correspondiente
validarProgreso('Testing Funcional', 90);
validarProgreso('Pruebas De Stress', 50);
validarProgreso('APITesting', 75);
validarProgreso('SQL', 50);
validarProgreso('Automation', 50);

})

it('Validar barras de progreso y contenido de las seccion "Professional Skills"', () => {

// Función para validar una barra de progreso
const validarProgreso = (skill, porcentaje) => {
  cy.contains('span', skill)
    .parent()
    .find('.progreso')
    .as('barra');

  // Esperamos a que la animación termine (ajusta si es necesario)
  cy.wait(2000);

  // Verificamos que el porcentaje mostrado en el <span> es correcto
  cy.get('@barra')
    .find('span')
    .should('have.text', `${porcentaje}%`);

  // Validar que el ancho de la barra sea acorde al porcentaje
  cy.get('@barra')
    .invoke('width')
    .should('be.greaterThan', 0) // Asegura que se llenó algo
    .and('be.lte', 903 ); // Ajusta el número según el tamaño máximo de la barra en píxeles
};

// Validar cada habilidad con su porcentaje correspondiente
validarProgreso('Comunicacion', 90);
validarProgreso('Trabajo en Equipo', 90);
validarProgreso('Creatividad', 70);
validarProgreso('Dedicacion', 100);
validarProgreso('Gestion De Proyectos', 25);

})


it('Validar Titulo de la seccion "Curriculum"', () => {
    cy.get('#curriculum > .contenido-seccion > h2').should('have.text', 'Curriculum')

})

it('Validar Subtitulo de la seccion "Curriculum"', () => {
    cy.get('#curriculum > .contenido-seccion > .fila > .col > h3').should('have.text', 'Experiencia de trabajo')
}) 
it.only('Verifica que la sección "Experiencia de trabajo" esté visible', () => {
  cy.contains('h3', 'Experiencia de trabajo').should('be.visible');
});

// Función para validar cada experiencia laboral
const validarExperiencia = (titulo, empresa, fecha, palabrasClave) => {
  cy.contains('h4', titulo).should('be.visible');
  cy.contains('.casa', empresa).should('be.visible');
  cy.contains('.fecha', fecha).should('be.visible');

  // Verifica que la descripción contenga algunas palabras clave relevantes
  palabrasClave.forEach((palabra) => {
    cy.contains('p', palabra).should('exist');
  });

  // Valida que el círculo conector esté presente
  cy.contains('h4', titulo)
    .parent()
    .find('.conectord .circulod')
    .should('be.visible');
};

// Validar cada experiencia laboral
it.only('Valida la experiencia en Getnet', () => {
  validarExperiencia(
    'QA SSR AUTOMATION',
    'Getnet',
    'Ene. 2025 - actualidad',
    ['QA', 'pruebas de aceptación', 'microservicios', 'certificación de calidad']
  );
});

it('Valida la experiencia en Nave Negocios', () => {
  validarExperiencia(
    'QA Manual/Automation',
    'Nave Negocios',
    'Dic. 2022 - Dic. 2024',
    ['SCRUM', 'regresión', 'exploratorias', 'Azure DevOps']
  );
});

it('Valida la experiencia en UPEX', () => {
  validarExperiencia(
    'Analista de Calidad',
    'UPEX',
    'Jun. 2021 - Ene. 2022',
    ['BDD', 'X-ray', 'pruebas exploratorias', 'SQL']
  );
});
});

