import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { GeneratedImagesService } from './generated-images.service';
import { CreateGeneratedImageDto } from './dto/create-generated-image.dto';
import { UpdateGeneratedImageDto } from './dto/update-generated-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('generated-images')
export class GeneratedImagesController {
  constructor(private readonly generatedImagesService: GeneratedImagesService) { }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@UploadedFile() image: Express.Multer.File, @Body() createGeneratedImageDto: CreateGeneratedImageDto) {
    return this.generatedImagesService.create(createGeneratedImageDto, image);
  }

  @Get()
  findAll() {
    return this.generatedImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generatedImagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneratedImageDto: UpdateGeneratedImageDto) {
    return this.generatedImagesService.update(id, updateGeneratedImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generatedImagesService.remove(id);
  }
}
