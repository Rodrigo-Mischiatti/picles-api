import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";
import { Inject } from "@nestjs/common";
import IShelterRepository from "../interfaces/shelter.repository.interface";
import ShelterTokens from "../shelter.tokens";

export default class GetShelterDetailsUseCase
    implements IUseCase<null, GetShelterDetailsUseCaseOutput> {

    constructor(
        @Inject(ShelterTokens.shelterRepository)
        private readonly shelterRopsitory: IShelterRepository,
    ) { }

    async run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        const shelter = await this.shelterRopsitory.get();
        console.log(shelter)
        return new GetShelterDetailsUseCaseOutput({
            shelterName: shelter.name,
            shelterEmail: shelter.email,
            shelterPhone: shelter.phone,
            shelterWhatsApp: shelter.whatsApp,
            createdAt: shelter.createdAt,
            updatedAt: shelter.updatedAt,
        });
    }
}
