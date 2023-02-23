// quitar espacios en blanco

function clearSpaces(str) {
  // using join
  return str.split(" ").join("");
}

console.log(clearSpaces("Pl ayTha tF u nkyM usi c"));

// obtener digitos

function getDigits(str) {
  return parseInt(str.replace(/\D/g, ""));
}

console.log(getDigits("0s1a3y5w7h9a2t4? 6! 8? 0"));

// acronimos

function acronym(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}

console.log(acronym("no hay almuerzo gratis. Debes pagar por tu comida"));
console.log(acronym("En vivo desde Nueva York, es sábado por la noche"));

// contar no espacios

function countNonSpaces(str) {
  // using join
  return str.split(" ").join("").length;
}

console.log(countNonSpaces("Amor, me estás volviendo loca")); // el ejemplo tiene 29 caracteres con los espacios, sin los espacios tiene 25 caracteres.

// quitar cadenas mas cortas

function removeShorterStrings(arr, val) {
  return arr.filter((str) => str.length >= val);
}

console.log(
  removeShorterStrings(
    [
      "sucursal",
      "peleas de robots",
      "acronimo",
      "uno",
      "dos",
      "cerveceria",
      "cajon",
      "hola",
    ],
    5
  )
);
