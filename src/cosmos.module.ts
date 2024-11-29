import { Module } from '@nestjs/common';
import { CosmosClient } from '@azure/cosmos';

export const COSMOS_DB_CLIENT = 'COSMOS_DB_CLIENT';

@Module({
  providers: [
    {
      provide: COSMOS_DB_CLIENT,
      useFactory: () => {
        const endpoint = process.env.COSMOS_DB_ENDPOINT;
        const key = process.env.COSMOS_DB_KEY;

        if (!endpoint || !key) {
          throw new Error('Cosmos DB Endpoint or Key is missing.');
        }

        console.log('Using Cosmos DB endpoint:', endpoint);

        return new CosmosClient({
          endpoint: endpoint,
          key: key,
        });
      },
    },
  ],
  exports: [COSMOS_DB_CLIENT],
})
export class CosmosModule {}
