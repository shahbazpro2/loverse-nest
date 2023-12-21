import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ServiceImagesModule } from './service-images/service-images.module';
import { PlansModule } from './plans/plans.module';
import { GeneratedImagesModule } from './generated-images/generated-images.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [UsersModule, ServiceImagesModule, PlansModule, GeneratedImagesModule, PaymentsModule],
})
export class AppModule { }
