// Array con los URLs de los fondos
var backgrounds = [
  'url("imagenes/nebulosa-15k_1920x1080_xtrafondos.com.jpg")',
  'url("imagenes/astronautas-en-el-espacio_1920x1080_xtrafondos.com.jpg")',
  'url("imagenes/estructura-abstracta-3d-gris-oscuro_1920x1080_xtrafondos.com.jpg")',
  'url("imagenes/montanas-minimalista-flat_1920x1080_xtrafondos.com.jpg")',
  'url("imagenes/ondas-con-distorsion-abstractro_1920x1080_xtrafondos.com.jpg")'
];

// Función para obtener un índice aleatorio del array
function getRandomIndex() {
  return Math.floor(Math.random() * backgrounds.length);
}

// Función para cambiar el fondo
function changeBackground() {
  var randomIndex = getRandomIndex();
  document.body.style.backgroundImage = backgrounds[randomIndex];
}

// Cambiar el fondo al cargar la página
window.onload = function() {
  changeBackground();
};
