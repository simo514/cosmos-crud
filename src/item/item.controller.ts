import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemService } from './item.service';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

 
  @Post()
  async createItem(@Body() item: any) {
      return this.itemService.createItem(item);
  }


  @Get()
  async getItems() {
     return this.itemService.getItems();
  }


  @Get(':id')
  async getItemById(@Param('id') id: string) {
    return this.itemService.getItemById(id);
  }


  @Put(':id')
  async updateItem(@Param('id') id: string, @Body() item: any) {
    item.id = id;  
    return this.itemService.updateItem(id, item);
  }

 
  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
      return this.itemService.deleteItem(id);
  }
}
