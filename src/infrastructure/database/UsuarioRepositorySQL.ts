/*
 CAPA INFRASTRUCTURE

 Implementación concreta del repositorio.
 Aquí se encuentran detalles externos como consultas SQL o conexiones a BD.
 Esta capa depende de las interfaces, no al contrario.
*/

import { UsuarioRepository } from "../../interfaces/repositories/UsuarioRepository";
import { Usuario } from "../../domain/entities/Usuario";

export class UsuarioRepositorySQL implements UsuarioRepository {

async buscarPorCorreo(correo:string){

const usuario = new Usuario(
1,
"Juan",
correo,
"12345"
);

return usuario;

}

}
