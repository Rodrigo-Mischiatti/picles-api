//define aqui o que vai servir de entrada para ser alterado
//os campos colocados aqui é o que pode ser informado pelo usuario
//poder atualizar. pode passar um ou mais ou todos os dados
//se tem alguma coisa que não vai atualizar, nao coloca aqui

import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length, isNotEmpty } from "class-validator"

export default class UpdateShelterControllerInput {
    @IsString() @IsNotEmpty()
    name: string
    @IsString() @Length(10, 11) @IsNotEmpty()
    whatsApp: string
    @IsString() @IsNumberString() @Length(10, 11) @IsNotEmpty()
    phone: string
    @IsString() @IsEmail() @IsNotEmpty()
    email: string
}