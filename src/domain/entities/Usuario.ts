/*
 CAPA DOMAIN - ENTIDAD

 La entidad representa el objeto principal del negocio.
 Contiene reglas propias del usuario y no depende de bases de datos,
 frameworks o servicios externos.
*/

export class Usuario {

constructor(
public id:number,
public nombre:string,
public correo:string,
private password:string
){}

validarPassword(password:string){
return this.password === password;
}

}
