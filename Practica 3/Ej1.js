function verifcarUsuario(usuario){
return new Promise((resolve,reject)=> {
    if (usuario==="admin"){
           resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
}

verifcarUsuario("admin")
.then(res=>console.log(res))
.catch(err=>console.error(err));

verifcarUsuario("Ivan")
.then(res=> console.log(res))
.catch(err=>console.error(err));