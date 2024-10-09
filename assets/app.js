let who = ["the dog", "my grandma", "his turtle", "my bird"];
let what = ["ate", "peed on", "crushed", "broke"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// Función para generar una excusa aleatoria
function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)]; //length al final del array se refiere a la cantidad de elemento que contine(0,1,2 y3 en este caso)
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  return `${randomWho} ${randomWhat} ${randomWhen}`;
}

// Actualiza el contenido del párrafo con la excusa generada
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("excuse").textContent = generateExcuse();
});
