import { IsString } from "class-validator";

export class CreatePaymentDto {
    @IsString()
    planId: string;
}
