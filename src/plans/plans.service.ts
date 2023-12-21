import { Injectable } from '@nestjs/common';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) { }
  create(createPlanDto: CreatePlanDto) {
    return this.prisma.plans.create({
      data: createPlanDto,
    });
  }

  findAll() {
    return this.prisma.plans.findMany();
  }

  findOne(id: string) {
    return this.prisma.plans.findUnique({
      where: { id },
    });
  }

  update(id: string, updatePlanDto: UpdatePlanDto) {
    return this.prisma.plans.update({
      where: { id },
      data: updatePlanDto,
    });
  }

  remove(id: string) {
    return this.prisma.plans.delete({
      where: { id },
    });
  }
}
