import { CustomError } from "./custom.error";

export default class PetNotFoundError
    extends CustomError {                 //como o proprio comando diz, extendendo a classe CustomError
    constructor() {
        super('Pet Not Found', '0001');   //super é chamada a classe pai, herança... 
    }
}