import { Module } from '@nestjs/common';
import { ServiceImagesService } from './service-images.service';
import { ServiceImagesController } from './service-images.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ServiceImagesController],
  providers: [ServiceImagesService],
})
export class ServiceImagesModule { }
