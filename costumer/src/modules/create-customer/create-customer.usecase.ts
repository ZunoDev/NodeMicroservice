import { prismaClient } from "../../infra/database/prisma-customer"

type CreateCustomerRequest = {
    name: string,
    password: string,
    email: string,
    phone: string
}

export class CreateCustomerUseCase{
    async execute(data: CreateCustomerRequest){

        const customer = await prismaClient.customer.findFirst({
            where: {
                email: data.email
            }
        })
        
        if (customer) throw new Error('Customer already exists!')

        const customerCreated = await prismaClient.customer.create({
            data: {
                ...data
            }
        })

        return customerCreated;
    }
}