import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput> {
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: 'Abrigo Teste 2',
            shelterEmail: 'abrigo2@gmail.com',
            shelterPhone: '19000999191',
            shelterWhatsApp: '19000999191',
            createdAt: new Date(),
            updatedAt: new Date()
        }))
    }
}