import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateGeneratedImageDto } from './dto/create-generated-image.dto';
import { UpdateGeneratedImageDto } from './dto/update-generated-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GeneratedImagesService {
  constructor(private prisma: PrismaService) { }
  create(createGeneratedImageDto: CreateGeneratedImageDto, image: Express.Multer.File) {
    if (!image) throw new HttpException({ message: ['No image provided'], error: 'Bad Request', statusCode: HttpStatus.BAD_REQUEST }, HttpStatus.BAD_REQUEST);
    const base64 = image.buffer.toString('base64');
    return `This action adds a new generatedImage ${base64}`;
  }

  findAll() {
    return this.prisma.generatedImages.findMany();
  }

  findOne(id: string) {
    return this.prisma.generatedImages.findUnique({
      where: { id },
    });
  }

  update(id: string, updateGeneratedImageDto: UpdateGeneratedImageDto) {
    return this.prisma.generatedImages.update({
      where: { id },
      data: updateGeneratedImageDto,
    });
  }

  remove(id: string) {
    return this.prisma.generatedImages.delete({
      where: { id },
    });
  }
}
