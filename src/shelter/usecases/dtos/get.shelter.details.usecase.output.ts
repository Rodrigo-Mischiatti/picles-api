export default class GetShelterDetailsUseCaseOutput {
    shelterName: string
    shelterWhatsApp: string
    shelterEmail: string
    shelterPhone: string
    createdAt: Date
    updatedAt: Date

    //partial vc diz que vc pode devolver o resultado parcial, somente com alguns campos não todos
    constructor(data: Partial<GetShelterDetailsUseCaseOutput>) {
        Object.assign(this, data)
    }
}