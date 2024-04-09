export default class CreatePetUseCaseInput {
    name: string;
    type: string;
    size: string;
    gender: string;
    bio: string;

    constructor(data: Partial<CreatePetUseCaseInput>) {
        Object.assign(this, data);   //atribui os dados que chegam em data para a propria classe (this)

        //mesmo que 
        //Object.name = data.name 
        //Object.  .....
    }
}