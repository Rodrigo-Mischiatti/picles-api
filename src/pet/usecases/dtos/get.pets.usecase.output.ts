export default class GetPetUseCaseOutput {
    currentPage: number;
    totalPages: number;
    items: Response[];

    constructor(data: Partial<GetPetUseCaseOutput>) {
        Object.assign(this, data)
    }
}