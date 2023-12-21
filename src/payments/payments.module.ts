import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StripeModule } from 'src/stripe/stripe.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [ConfigModule.forRoot(),
    PrismaModule,
  StripeModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      apiKey: configService.get<string>('STRIPE_API_KEY'),
      options: {
        apiVersion: '2023-10-16',
      },
    })
  })
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule { }
