const personas =[
    {nombre: "Ana", edad:22},
    {nombre: "Luis", edad:35},
    {nombre: "Maria", edad:28},

]
console.log("");
console.log("Find Luis");
const nom= personas.find(nomb => nomb.nombre === 'Luis');
console.log(nom);

console.log("");
console.log("Imprimir edades");
personas.forEach(personas=>{console.log(personas)});

console.log("");
console.log("Suma edades");
const total=personas.reduce((result, personas)=>result+personas.edad,0);
console.log(total);

