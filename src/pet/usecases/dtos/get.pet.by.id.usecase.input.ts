export default class GetPetByIdUseCaseInput {
    id: string;

    constructor(data: Partial<GetPetByIdUseCaseInput>) {
        Object.assign(this, data);   //atribui os dados que chegam em data para a propria classe (this)
    }
}