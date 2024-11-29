import { Injectable, Inject } from '@nestjs/common';
import { CosmosClient, Database, Container } from '@azure/cosmos';

@Injectable()
export class ItemService {
  private readonly database: Database;
  private readonly container: Container;

  constructor(
    @Inject('COSMOS_DB_CLIENT') private readonly cosmosClient: CosmosClient
  ) {
    const databaseName = process.env.COSMOS_DB_DATABASE_NAME;
    const containerName = process.env.COSMOS_DB_CONTAINER_NAME;

    this.database = this.cosmosClient.database(databaseName);
    this.container = this.database.container(containerName);
  }

  async createItem(item: any): Promise<any> {
    const { resource } = await this.container.items.create(item);
    return resource;
  }

  async getItems(): Promise<any[]> {
    const { resources } = await this.container.items.readAll().fetchAll();
    return resources;
  }

  async getItemById(id: string): Promise<any> {
    const { resource } = await this.container.item(id, id).read();
    return resource;
  }

  async updateItem(id: string, item: any): Promise<any> {
    const { resource } = await this.container.item(id, id).replace(item);
    return resource;
  }

  async deleteItem(id: string): Promise<any> {
    const { resource } = await this.container.item(id, id).delete();
    return resource;
  }
}
