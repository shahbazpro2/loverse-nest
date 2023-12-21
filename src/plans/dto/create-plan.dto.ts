import { IsArray, IsNumber, IsString } from "class-validator";

export class CreatePlanDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsNumber()
    price: number;

    @IsString()
    target: string;

    @IsArray()
    features: string[];

}
