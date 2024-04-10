// export default class CreatePetUseCaseInput {
//     name: string;
//     type: string;
//     size: string;
//     gender: string;
//     bio: string;
//     constructor(data: Partial<CreatePetUseCaseInput>) {
//         Object.assign(this, data);   
//     }
// }
import CreatePetUseCaseInput from "./create.pet.usecases.input";

export default class UpdatePetByIdUseCaseInput
    extends CreatePetUseCaseInput {

    id: string

    constructor(data:
        Partial<UpdatePetByIdUseCaseInput>) {
        super(data)
        Object.assign(this, data)
    }
} 