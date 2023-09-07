import {Router} from 'express';
import { CreateCustomerController } from '../modules/create-customer/create-customer.controller';
import { GetCustomerController } from '../modules/get-customer/get-customer.controller';

const router = Router();

router.post("/customers", (request, response) =>  {
    new CreateCustomerController().handle(request, response)
});

router.get("/customers", (request, response) => {
    new GetCustomerController().handle(request,response)
})

export {router}