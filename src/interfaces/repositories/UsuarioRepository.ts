/*
 CAPA INTERFACES

 Define el contrato que debe cumplir cualquier repositorio de usuarios.
 Permite cambiar la tecnología de almacenamiento sin modificar el negocio.
*/

import { Usuario } from "../../domain/entities/Usuario";

export interface UsuarioRepository {

buscarPorCorreo(correo:string):Promise<Usuario | null>;

}
