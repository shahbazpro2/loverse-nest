import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneratedImageDto } from './create-generated-image.dto';

export class UpdateGeneratedImageDto extends PartialType(CreateGeneratedImageDto) {}
