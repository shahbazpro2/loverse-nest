import { Injectable } from '@nestjs/common';
import { CreateServiceImageDto } from './dto/create-service-image.dto';
import { UpdateServiceImageDto } from './dto/update-service-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServiceImagesService {
  constructor(private prisma: PrismaService) { }
  create(createServiceImageDto: CreateServiceImageDto) {
    return this.prisma.serviceImages.create({
      data: createServiceImageDto,
    });
  }

  findAll() {
    return this.prisma.serviceImages.findMany();
  }

  findOne(id: string) {
    return this.prisma.serviceImages.findUnique({
      where: { id },
    });
  }

  update(id: string, updateServiceImageDto: UpdateServiceImageDto) {
    return this.prisma.serviceImages.update({
      where: { id },
      data: updateServiceImageDto,
    });
  }

  remove(id: string) {
    return this.prisma.serviceImages.delete({
      where: { id },
    });
  }
}
