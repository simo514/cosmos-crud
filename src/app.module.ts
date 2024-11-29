import { Module } from '@nestjs/common';
import { CosmosModule } from './cosmos.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [CosmosModule, ItemModule],
})
export class AppModule {}
