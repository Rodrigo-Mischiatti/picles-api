import CreatePetUseCaseOutput from "./create.pet.usecases.output"

export default class UpdatePetPhotoByIdUseCaseOutput
    extends CreatePetUseCaseOutput {

    constructor(data:
        Partial<UpdatePetPhotoByIdUseCaseOutput>) {
        super(data)
        Object.assign(this, data)
    }
} 