import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceImagesService } from './service-images.service';
import { CreateServiceImageDto } from './dto/create-service-image.dto';
import { UpdateServiceImageDto } from './dto/update-service-image.dto';

@Controller('service-images')
export class ServiceImagesController {
  constructor(private readonly serviceImagesService: ServiceImagesService) { }

  @Post()
  create(@Body() createServiceImageDto: CreateServiceImageDto) {
    return this.serviceImagesService.create(createServiceImageDto);
  }

  @Get()
  findAll() {
    return this.serviceImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceImagesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceImageDto: UpdateServiceImageDto) {
    return this.serviceImagesService.update(id, updateServiceImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceImagesService.remove(id);
  }
}
