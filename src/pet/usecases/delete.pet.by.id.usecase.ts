import { Inject, Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import DeletePetByIdUseCaseInput from "./dtos/delete.pet.by.id.usecase.input";
import DeletePetByIdUseCaseOutput from "./dtos/delete.pet.by.id.usecase.output";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.reposity.interface";
import { Pet } from "../schemas/pet.schema";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";

@Injectable()
export default class DeletePetByIdUseCase
    implements IUseCase<DeletePetByIdUseCaseInput, DeletePetByIdUseCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository
    ) { }

    async run(input: DeletePetByIdUseCaseInput): Promise<DeletePetByIdUseCaseOutput> {
        const pet = await this.getPetById(input.id)

        if (pet === null) {
            //throw new Error('Pet Não Encontrado')   //thow faz morrer o codigo
            throw new PetNotFoundError()
        }

        await this.petRepository.deleteById(input.id)

        return new DeletePetByIdUseCaseOutput()
    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }

    }
}