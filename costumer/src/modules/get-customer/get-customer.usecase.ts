import { prismaClient } from "../../infra/database/prisma-customer"



export class GetCustomerUseCase{
    async execute(){

        const customers = await prismaClient.customer.findMany();
        return customers;
    }
}