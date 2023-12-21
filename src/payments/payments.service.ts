import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { StripeService } from 'src/stripe/stripe.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly stripeService: StripeService, private readonly prisma: PrismaService) { }

  async createIntent(createPaymentDto: CreatePaymentDto) {

    const plan = await this.prisma.plans.findUnique({
      where: {
        id: createPaymentDto.planId
      }
    });
    const paymentIntent = await this.stripeService.stripe.paymentIntents.create({
      amount: plan.price * 100,
      currency: 'usd',
      receipt_email: 'test@test.com',
    });

    return {
      message: 'Payment intent created successfully',
      clientSecret: paymentIntent.client_secret,
    };

  }

  create(createPaymentDto: CreatePaymentDto) {
    return 'This action adds a new payment';
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
