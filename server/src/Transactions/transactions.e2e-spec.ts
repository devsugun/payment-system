import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLRequest } from 'apollo-server-core';
import { AppModule } from '../app.module';
import { DocumentNode } from 'graphql';
import { Transaction } from 'typeorm';

describe('Transactions (GraphQL)', () => {
  let app: INestApplication;
  let apolloServer: ApolloServer;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    apolloServer = moduleFixture.get<ApolloServer>(ApolloServer);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return transactions', async () => {
    // Mock transactions data
    const transactions: Transaction[] = [
      // Add your mock transaction objects here
    ];

    // Execute the GraphQL query
    const query: string | DocumentNode = `
      query {
        transactions {
          id
          amount
          date
          // Add other fields you want to query
        }
      }
    `;

    const result = await apolloServer.executeOperation({
      query,
      contextValue: { transactions },
    } as GraphQLRequest);

    // Assert the result
    expect(result.errors).toBeUndefined();
    expect(result.data).toHaveProperty('transactions');
    expect(result.data.transactions).toHaveLength(transactions.length);
  });
});
