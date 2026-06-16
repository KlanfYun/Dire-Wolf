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
              </nav>
      `;
      document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('navbar-catalogo').innerHTML = nav_catalogo;
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
  const footer1 = `
    <div class="footer-logo"><img class="logo logo-footer" src="img/logo-texto.png" alt="" width="90px"></div>
      <ul class="footer-links">
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#personalizar">Personalizar</a></li>
        <li><a href="#">Local</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    <p class="footer-copy">© 2025 Dire Wolf — Todos los diseños son propiedad de la marca. Hecho en México 🇲🇽</p>
  `
  const footer2 = `
    <div class="footer-logo"><img class="logo logo-footer" src="../img/logo-texto.png" alt="" width="90px"></div>
      <ul class="footer-links">
        <li><a href="#catalogo">Catálogo</a></li>
        <li><a href="#personalizar">Personalizar</a></li>
        <li><a href="#">Local</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    <p class="footer-copy">© 2025 Dire Wolf — Todos los diseños son propiedad de la marca. Hecho en México 🇲🇽</p>
  `
  let title = document.title;
  if(title == 'Dire Wolf | Colecciones' || title == 'Dire Wolf | Prendas listas' || title == 'Dire Wolf | Inicio'){
      document.getElementById('footer').innerHTML = footer1;
  }else{
      document.getElementById('footer').innerHTML = footer2;
  }


