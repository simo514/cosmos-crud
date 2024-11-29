import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { CosmosModule } from '../cosmos.module';  // Import CosmosModule

@Module({
  imports: [CosmosModule],  // Add CosmosModule to imports
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemModule {}
