// Función para generar un color hexadecimal aleatorio
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Obtener los elementos de los botones
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

// Variable para almacenar el intervalo de cambio de color
let intervalId;

// Función para cambiar el color de fondo del body
function changeBackgroundColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
}

// Evento al hacer clic en el botón "Start"
startButton.addEventListener('click', function () {
  // Desactivar el botón "Start" mientras se ejecuta el cambio de color
  startButton.disabled = true;

  // Cambiar el color de fondo cada segundo
  intervalId = setInterval(changeBackgroundColor, 1000);
});

// Evento al hacer clic en el botón "Stop"
stopButton.addEventListener('click', function () {
  // Habilitar el botón "Start" y detener el cambio de color
  startButton.disabled = false;
  clearInterval(intervalId);
});
