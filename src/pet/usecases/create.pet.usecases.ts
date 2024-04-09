import { IUseCase } from "src/domain/iusecase.interface";
import CreatePetUseCaseInput from "./dtos/create.pet.usecases.input";
import CreatePetUseCaseOutput from "./dtos/create.pet.usecases.output";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class CreatePetUseCase
    implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput> {
    run(input: CreatePetUseCaseInput):
        Promise<CreatePetUseCaseOutput> {
        throw new Error("Method not implemented.");
    }
}

