import { BadRequestException, Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import CreatePetControllerInput from './dtos/create.pet.controller.input';
import CreatePetUseCaseOutput from './usecases/dtos/create.pet.usecases.output';
import CreatePetUseCaseInput from './usecases/dtos/create.pet.usecases.input';
import PetTokens from './pet.tokens';
import { IUseCase } from 'src/domain/iusecase.interface';
import GetPetByIdUseCaseInput from './usecases/dtos/get.pet.by.id.usecase.input';
import GetPetByIdUseCaseOutput from './usecases/dtos/get.pet.by.id.usecase.output';
import { ConnectionStates } from 'mongoose';

@Controller('pet')
export class PetController {

    @Inject(PetTokens.createPetUseCase)
    private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>

    @Inject(PetTokens.getPetByIdUseCase)
    private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>

    @Post()
    async createPet(@Body() input: CreatePetControllerInput):
        Promise<CreatePetUseCaseOutput> {
        const useCaseInput = new CreatePetUseCaseInput({ ...input });
        return await this.createPetUseCase.run(useCaseInput)
    }

    @Get(':id')   //isso ele vai montar o complemento /id no endpoint
    async getPetById(@Param('id') id: string): Promise<GetPetByIdUseCaseOutput> {
        try {
            const useCaseInput = new GetPetByIdUseCaseInput({ id });
            return await this.getPetByIdUseCase.run(useCaseInput)
        } catch (error) {
            //ajusta para que o retorno seja um 400-bad request caso não encontre o ID 
            //o error.messaga aqui vai retornar a mensagem customizad em pet.not.found.error.ts  vide a validação if (pet === null) em usecases
            throw new BadRequestException(JSON.parse(error.message))
        }
    }
}


