import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { StripeService } from './stripe.service';
import { ConfigurableModuleClass } from './stripe.module-defination';

@Module({
    providers: [StripeService],
    exports: [StripeService],
    imports: [ConfigModule],
})
export class StripeModule extends ConfigurableModuleClass { }