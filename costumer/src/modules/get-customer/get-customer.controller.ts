import {Request, Response} from 'express';
import { GetCustomerUseCase } from './get-customer.usecase';

export class GetCustomerController {
    
    async handle(request: Request, response: Response){
        const useCase = new GetCustomerUseCase();
        try {
            const result = await useCase.execute();
            return response.json(result);
        } catch (error) {
            return response.status(400).json(error)
        }
    }    
    
}