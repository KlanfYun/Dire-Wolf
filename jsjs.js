      //** NAVVV--------------------------------------------------------------------------------------------------
      const nav = `
            <nav>
              <div>
                <a href="index.html">
                  <img class="logo" src="img/logo-texto.png">
                </a>
              </div>
              <div>
              <ol>
                <h2><a href="catalogo.html">Catalogo</a></h2>
                <h2><a href="prendasEchas.html">Listas</a></h2>
              </ol>
              </div>
              </nav>
              `
      document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('navbar').innerHTML = nav;
      });      
      const nav_catalogo = `
            <nav>
              <div>
                <a href="../index.html">
                  <img class="logo" src="../img/logo-texto.png" px="100" alt="Logo">
                </a>
              </div>
              <div>
                <ol>
                  <h2><a href="../catalogo.html">Catalogo</a></h2>
                  <h2><a href="../prendasEchas.html">Listas</a></h2>
                </ol>
              </div>
              </nav>
      `;
      document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('navbar-catalogo').innerHTML = nav_catalogo;
      });

      //**BACKGROUND PARA CADA CATEGORIA-------------------------------------
//*     if(document.title != 'Dire Wolf | Colecciones' && 
//*        document.title != 'Dire Wolf | Contacto' && 
//*        document.title != 'Dire Wolf | Inicio'){
//*        back_img = {
//*          Florales: '../img/zbackback/back-flor.jpg',
//*          Calakas:  '../img/zbackback/back_calaka.jpg',
//*          Artistas: '../img/zbackback/back_artistas.jpg',
//*          Anti:     '../img/zbackback/back_anti.jpg',
//*          Motos:    '../img/zbackback/back_motos.jpg',
//*          Carros:   '../img/zbackback/back_carros.jpg',
//*          Urbano:   '../img/zbackback/back_urbano.jpg',
//*          Prendas:  'img/prendasechas.jpg'
//*        }
//*        
//*        document.addEventListener('DOMContentLoaded', () => {
//*            titulo = (document.title).split(" ");//Covertir en lista o vector
//*            cual = titulo[3];//luego selecionar el nombre de la categoria 
//*            document.body.style.backgroundImage = `url('${back_img[cual]}')`;
//*            document.body.style.backgroundSize = 'cover';
//*        });
//*      }

      //**MARCAR EL NAV EN DONDE ESTE------------------------------------------------------------------------------------------------------------------------------------------------------ */
      document.addEventListener('DOMContentLoaded', () =>{

      });

      //** PANALES--------------------------------------------------------------------------------------------------
       const panels = document.querySelectorAll('.panel')

        panels.forEach(panel => {
            panel.addEventListener('click', () => {
                removeActiveClasses()
                panel.classList.add('active')
            })
        })

        function removeActiveClasses() {
            panels.forEach(panel => {
                panel.classList.remove('active')
            })
        }

  //**FOOTER---------------------------------------------------------------------------------------------------------------------------------------- */
  const footer = `
  
  `

