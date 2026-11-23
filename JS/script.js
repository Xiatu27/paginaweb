// Resalta en el menú la sección que se está leyendo
// y pone el año actual en el pie de página.
(function () {
  var enlaces = document.querySelectorAll("#menu a");
  var secciones = document.querySelectorAll("main section");

  if ("IntersectionObserver" in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          enlaces.forEach(function (enlace) {
            var activo = enlace.getAttribute("href") === "#" + entrada.target.id;
            enlace.classList.toggle("activo", activo);
          });
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });

    secciones.forEach(function (seccion) { observador.observe(seccion); });
  }
  var detalles = document.querySelectorAll("article details");

detalles.forEach(function (d) {
  d.addEventListener("toggle", function () {
    if (d.open) {
      detalles.forEach(function (otro) {
        if (otro !== d) { otro.open = false; }
      });
    }
  });
});

  var anio = document.getElementById("anio");
  if (anio) { anio.textContent = new Date().getFullYear(); }
})();
