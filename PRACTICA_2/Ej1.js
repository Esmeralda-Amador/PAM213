const persona = {
    nombre: "Iván Isay",
    edad: 37,
    direccion:{
        ciudad: "QRO",
        pais: "MX"
    }
};
console.log("");
const{nombre, edad, direccion} = persona;
console.log("Me llamo " + nombre +", tengo " + edad + ",vivo en " +direccion.ciudad);