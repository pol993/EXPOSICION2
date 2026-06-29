/*
 CAPA APPLICATION - CASO DE USO

 Contiene la lógica necesaria para ejecutar el proceso de inicio de sesión.
 Coordina las entidades y las interfaces, pero no conoce detalles técnicos
 como SQL o la forma de almacenar información.
*/

import { UsuarioRepository } from "../../interfaces/repositories/UsuarioRepository";

export class LoginUseCase{

constructor(
private usuarioRepo:UsuarioRepository
){}

async ejecutar(correo:string,password:string){

const usuario = await this.usuarioRepo.buscarPorCorreo(correo);

if(!usuario){
return "Usuario no encontrado";
}

if(!usuario.validarPassword(password)){
return "Contraseña incorrecta";
}

return {
mensaje:"Login correcto",
usuario:usuario.nombre
};

}

}
