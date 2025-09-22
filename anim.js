// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Veinte millas de calor", time: 25 },
  { text: "Y el camino no tiene retorno", time: 28 },
  { text: "Algo pasa entre tú y yo", time: 35 },
  { text: "Sudo gotas de licor y polvo", time: 38 },
  { text: "Y ahora que te vuelvo a ver", time: 46 },
  { text: "Ya no quiero amanecer tan solo", time: 49 },
  { text: "Otra vez", time: 55 },
  { text: "Porque ahora somos únicos, los únicos", time: 60 },
  { text: "Y ahora que te vuelvo a ver", time: 67 },
  { text: "Ya no quiero amanecer tan solo", time: 70 },
  { text: "Veinte millas de calor", time: 99 },
  { text: "Y el camino que se hundió en el polvo", time: 102 },
  { text: "Una ráfaga de amor", time: 109 },
  { text: "Lentamente sacudió el entorno", time: 112 },
  { text: "Y ahora que te vuelvo a ver", time: 120 },
  { text: "Ya no quiero amanecer tan solo", time: 123 },
  { text: "Otra vez", time: 129 },
  { text: "Porque ahora somos únicos, los únicos", time: 134 },
  { text: "Y ahora que te vuelvo a ver", time: 141 },
  { text: "Ya no quiero amanecer tan solo", time: 144 },
  { text: "Y otra vez", time: 150 },
  { text: "Porque ahora somos únicos, los únicos", time: 155 },
  { text: "Y ahora que te vuelvo a ver", time: 161 },
  { text: "Ya no quiero amanecer tan solo", time: 165 },
  { text: "Otra vez", time: 194 },
  { text: "Porque ahora somos únicos, los únicos", time: 198 },
  { text: "Y ahora que te vuelvo a ver", time: 204 },
  { text: "Ya no quiero amanecer tan solo", time: 208 },
  {text: "Y otra vez", time: 214 },
  { text: "Porque ahora somos únicos, los únicos", time: 219 },
  { text: "Y ahora que te vuelvo a ver", time: 225 },
  { text: "Ya no quiero amanecer tan solo", time: 229 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 27000);