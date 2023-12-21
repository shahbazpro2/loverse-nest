import { IsString } from "class-validator";

export class CreateServiceImageDto {
    @IsString()
    image: string;
}
