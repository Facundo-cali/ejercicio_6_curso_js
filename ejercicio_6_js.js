let compra = ["leche", "arroz", "huevo", "carne", "mayonesa"];

compra.push("Aceite de Girasol");

compra.pop();

let peliculas = [
    {titulo:"El club de los poetas muertos", director:"Peter Weir", fecha: new Date(1990, 8, 30)},
    {titulo:"Good Morning, Vietnam", director:"Barry Levinson", fecha: new Date(1988, 1, 15)},
    {titulo:"Alta fidelidad", director:"Stephen Frears", fecha: new Date(2000, 9, 21)}
]

const posteriorADosMilDiez = peliculas.filter(peli => peli.fecha > new Date (2010, 1, 1));
const directores = peliculas.map(peli => peli.director);
const titulos = peliculas.map(peli => peli.titulo);

const direcYTitulos = directores.concat(titulos);
const direcYTitulosPropagacion = [...directores, ...titulos];


