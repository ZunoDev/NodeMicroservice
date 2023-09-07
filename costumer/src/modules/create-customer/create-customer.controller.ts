import {Request, Response} from 'express';
import { CreateCustomerUseCase } from './create-customer.usecase';

export class CreateCustomerController {
    
    async handle(request: Request, response: Response){
        const useCase = new CreateCustomerUseCase();
        try {
            const result = await useCase.execute(request.body)
            return response.json(result);
        } catch (error) {
            return response.status(400).json(error)
        }
    }    
    
}