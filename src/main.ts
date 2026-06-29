/*
 PUNTO DE ENTRADA DE LA APLICACION

 En Clean Architecture este archivo se encarga de crear las implementaciones
 concretas y conectar las diferentes capas mediante inyección de dependencias.
 No contiene reglas del negocio.
*/

import { UsuarioRepositorySQL } from "./infrastructure/database/UsuarioRepositorySQL";
import { LoginUseCase } from "./application/usecases/LoginUseCase";
import { LoginController } from "./presentation/controllers/LoginController";

const repo = new UsuarioRepositorySQL();

const casoUso = new LoginUseCase(repo);

const controller = new LoginController(casoUso);

controller.login(
"test@gmail.com",
"12345"
)
.then(console.log);
