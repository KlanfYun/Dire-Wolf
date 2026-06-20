## DIRE WOLF (CATALOGO DE PLAYERAS)
# v1.0
 En la primera version de la pagina web, solo se estructura por completo el catalogo y todo a la perfeccion, lo unico que me falto es llenar la pagina principal (index.html) en proximas actualizaciones se añadira esa pagina de bienvenida
# v1.1
 Ajustes despues de aver recuperado la pagina, despues de haberla recuperado de mi antiguia computadora
# v1.2
 Asignamiento de secciones de la pagina index
# v1.3
 Ya se cargo por cmopleto la pagina index con buenos apartados como mencion de playeras personalizadas, mas de 200 diseños como lo menciona la pagina, proximamente se cargaran los diseños de ropa completos que tengo guardados
# v1.4
 Se corrijio la plantilla generada por mi cordial gemmini flow, ahora se ve muy profecional la pagina principal, con todas las secciones destacadas, todo esta marchando bien, proximamente, quiero añadir todos los diseños dentro del catalgo, ahora toca esperar resultados de este pequeño catalogo
# v1.4.1
  - **Carrusel de categorías** — Agregamos la sección de tarjetas con imágenes en el index para que cada categoría (urbano, floral, gym, etc.) tenga su propia card con link directo al catálogo.
  - **Logo cobra / mascota** — Corregimos la posición de la ilustración de la cobra que va detrás del título de cada categoría, ahora se ve centrada y con el tamaño adecuado.
  - **Menú desplegable (dropdown)** — Arreglamos el submenú del nav para que se desplace hacia abajo correctamente con `top: 100%` y centrado con `translateX(-50%)`, sin romperse en pantallas chicas.
  - **Menú hamburguesa responsive** — Reparamos el toggle del menú móvil para que abra y cierre correctamente en celular.
  - **Nav fuera del body (9 páginas)** — Nos dimos cuenta de que los `<div id="navbar">` estaban fuera del `<body>` en catalogo.html, anti.html, artistas.html, carros.html, motos.html, urbano.html, floral.html, gym.html y prendasEchas.html. Los movimos dentro del body para que el HTML sea válido y el navegador los renderice como debe ser.
  - **Padding del catálogo** — Agregamos `padding-top: 85px` al `.container-grandfather` para que el contenido del catálogo no quede escondido detrás del nav fijo.
  - **Margen de títulos** — Bajamos el `margin-top` exagerado de 120px a 0 en los `h1` generales y a 10px en `.titulo-elegante`, así los encabezados quedan justo donde deben.

