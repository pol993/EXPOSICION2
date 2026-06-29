/*
 CAPA PRESENTATION

 Recibe las solicitudes externas y comunica la interfaz con el caso de uso.
 Su responsabilidad es manejar la entrada y salida de información.
*/

import { LoginUseCase } from "../../application/usecases/LoginUseCase";

export class LoginController{

constructor(
private loginUseCase:LoginUseCase
){}

async login(correo:string,password:string){

return await this.loginUseCase.ejecutar(
correo,
password
);

}

}
