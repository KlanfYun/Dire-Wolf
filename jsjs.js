//** NAV UNIFICADO ------------------------------------------------------------------------------------------------ */
function createNav(prefix) {
  return `
<nav>
  <div>
    <a href="${prefix}/index.html">
      <img class="logo" src="${prefix}/img/logo-texto.png" alt="Dire Wolf">
    </a>
  </div>
  <div>
    <ol>
      <h2 class="nav-has-dropdown">
        <a href="${prefix}/catalogo.html">Cat&aacute;logo &#x25BE;</a>
        <div class="nav-drop">
          <a href="${prefix}/catalogo/carros.html">Motor</a>
          <a href="${prefix}/catalogo/artistas.html">Artistas</a>
          <a href="${prefix}/catalogo/anti.html">Antisocial</a>
          <a href="${prefix}/catalogo/motos.html">Rider</a>
          <a href="${prefix}/catalogo/urbano.html">Urbano</a>
          <a href="${prefix}/catalogo/gym.html">Fitness</a>
          <a href="${prefix}/catalogo/floral.html">Floral</a>
        </div>
      </h2>
      <h2><a href="${prefix}/prendasEchas.html">Listas</a></h2>
      <h2><a href="${prefix}/index.html#personalizar">Personalizar</a></h2>
    </ol>
  </div>
</nav>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.innerHTML = createNav('.');

  const navbarCat = document.getElementById('navbar-catalogo');
  if (navbarCat) navbarCat.innerHTML = createNav('..');

  //** DROPDOWN TOGGLE (mobile) ---------------------------------------------------------------------------------- */
  document.querySelectorAll('.nav-has-dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 1000) {
        e.preventDefault();
        const drop = link.parentElement.querySelector('.nav-drop');
        if (drop) drop.classList.toggle('open');
      }
    });
  });

  document.querySelectorAll('.nav-drop a').forEach(a => {
    a.addEventListener('click', () => {
      const drop = a.closest('.nav-drop');
      if (drop) drop.classList.remove('open');
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-has-dropdown')) {
      document.querySelectorAll('.nav-drop.open').forEach(d => d.classList.remove('open'));
    }
  });

  //** FOOTER ---------------------------------------------------------------------------------------------------- */
  function createFooter(prefix) {
    return `
    <div class="footer-logo"><img class="logo logo-footer" src="${prefix}/img/logo-texto.png" alt="" width="90px"></div>
      <ul class="footer-links">
        <li><a href="${prefix}/catalogo.html">Cat&aacute;logo</a></li>
        <li><a href="${prefix}/index.html#personalizar">Personalizar</a></li>
        <li><a href="#">Local</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    <p class="footer-copy">&copy; 2025 Dire Wolf &mdash; Todos los dise&ntilde;os son propiedad de la marca. Hecho en M&eacute;xico &#x1F1F2;&#x1F1FD;</p>`;
  }
  const t = document.title;
  if (t === 'Dire Wolf | Colecciones' || t === 'Dire Wolf | Prendas listas' || t === 'Dire Wolf | Inicio') {
    document.getElementById('footer').innerHTML = createFooter('.');
  } else {
    document.getElementById('footer').innerHTML = createFooter('..');
  }

  //** SCROLL REVEAL --------------------------------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => observer.observe(el));

  //** CARRUSEL DE CATEGORÍAS ------------------------------------------------------------------------------------ */
  const track = document.getElementById('carruselTrack');
  if (track) {
    const categories = [
      { name: 'Motor', img: 'img/zportadas/carros.jpg', link: 'catalogo/carros.html' },
      { name: 'Artistas', img: 'img/zportadas/artistas.jpg', link: 'catalogo/artistas.html' },
      { name: 'Antisocial', img: 'img/zportadas/antisocial.jpg', link: 'catalogo/anti.html' },
      { name: 'Rider', img: 'img/zportadas/motos.jpg', link: 'catalogo/motos.html' },
      { name: 'Urbano', img: 'img/zportadas/urbano.jpg', link: 'catalogo/urbano.html' },
      { name: 'Fitness', img: 'img/zportadas/gym.jpg', link: 'catalogo/gym.html' },
      { name: 'Floral', img: 'img/zportadas/floral.jpg', link: 'catalogo/floral.html' }
    ];
    let currentIndex = 0;
    const total = categories.length;
    let cards = [];

    categories.forEach(cat => {
      const a = document.createElement('a');
      a.href = cat.link;
      a.className = 'carrusel-card';
      a.innerHTML = `
        <img src="${cat.img}" alt="${cat.name}" loading="lazy">
        <div class="card-overlay">
          <span>${cat.name}</span>
          <span>Ver colecci&oacute;n &rarr;</span>
        </div>`;
      a.addEventListener('click', e => { e.preventDefault(); window.location.href = cat.link; });
      track.appendChild(a);
      cards.push(a);
    });

    function render() {
      cards.forEach((card, i) => {
        let offset = i - currentIndex;
        if (offset < -Math.floor(total / 2)) offset += total;
        if (offset > Math.floor(total / 2)) offset -= total;
        card.className = 'carrusel-card';
        const dir = offset >= 0 ? 1 : -1;
        card.style.setProperty('--dir', dir);
        const abs = Math.abs(offset);
        if (offset === 0) card.classList.add('focused');
        else if (abs === 1) card.classList.add('adjacent');
        else if (abs === 2) card.classList.add('distant');
        else card.classList.add('hidden');
      });
    }

    document.getElementById('carruselPrev').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + total) % total;
      render();
    });
    document.getElementById('carruselNext').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % total;
      render();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') document.getElementById('carruselPrev').click();
      else if (e.key === 'ArrowRight') document.getElementById('carruselNext').click();
    });
    render();
  }
});
