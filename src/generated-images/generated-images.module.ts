import { Module } from '@nestjs/common';
import { GeneratedImagesService } from './generated-images.service';
import { GeneratedImagesController } from './generated-images.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GeneratedImagesController],
  providers: [GeneratedImagesService],
})
export class GeneratedImagesModule { }
