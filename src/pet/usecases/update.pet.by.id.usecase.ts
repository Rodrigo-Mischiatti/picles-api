import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetByIdPetUseCaseOutput from "./dtos/update.pet.by.id.usecase.output";
import UpdatePetByIdUseCaseInput from "./dtos/update.pet.by.id.usecase.input";
import { Inject, Injectable } from "@nestjs/common";
import PetTokens from "../pet.tokens";
import IPetRepository from "../interfaces/pet.reposity.interface";
import { Pet } from "../schemas/pet.schema";
import PetNotFoundError from "src/domain/errors/pet.not.found.error";
import { threadId } from "worker_threads";
import AppTokens from "src/app.tokens";
import IFileService from "src/interfaces/file.service.interface";

@Injectable()
export default class UpdatePetByIdUseCase
    implements IUseCase<UpdatePetByIdUseCaseInput, UpdatePetByIdPetUseCaseOutput> {

    constructor(
        @Inject(PetTokens.petRepository)
        private readonly petRepository: IPetRepository,

        @Inject(AppTokens.fileService)
        private readonly fileService: IFileService
    ) { }

    async run(input: UpdatePetByIdUseCaseInput): Promise<UpdatePetByIdPetUseCaseOutput> {

        let pet = await this.getPetById(input.id)

        //if (pet === null) é igual if (!pet)
        if (!pet) {
            throw new PetNotFoundError()
        }

        await this.petRepository.updateById({
            ...input,
            _id: input.id
        });

        pet = await this.getPetById(input.id)

        const petPhoto = !!pet.photo ? (await this.fileService.readFile(pet.photo)).toString('base64') : null;

        return new UpdatePetByIdPetUseCaseOutput({
            id: pet._id,
            name: pet.name,
            type: pet.type,
            size: pet.size,
            gender: pet.gender,
            bio: pet.bio,
            photo: petPhoto,
            createdAt: pet.createdAt,
            updatedAt: pet.updatedAt
        })
    }

    private async getPetById(id: string): Promise<Pet> {
        try {
            return await this.petRepository.getById(id)
        } catch (error) {
            return null
        }
    }
}