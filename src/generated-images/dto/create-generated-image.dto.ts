import { IsString } from "class-validator";

export class CreateGeneratedImageDto {
    @IsString()
    serviceImageId: string;

    @IsString()
    userId: string;
}
