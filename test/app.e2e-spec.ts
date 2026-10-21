import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('Tickets (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api/v1');
    await app.init();
  });

  it('/api/v1/tickets (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/tickets')
      .expect(200)
      .expect([
        { id: 1, subject: 'Cannot login' },
        { id: 2, subject: 'Payment failed' },
      ]);
  });

  afterEach(async () => {
    await app.close();
  });
});
