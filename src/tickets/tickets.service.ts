import { Injectable } from '@nestjs/common';
import { Ticket } from './ticket.interface';

@Injectable()
export class TicketsService {
  constructor() {}

  private readonly tickets: Ticket[] = [
    {
      id: 1,
      subject: 'Cannot login',
      description: 'User cannot login to the system',
      priority: 'high',
      status: 'open',
      createdAt: '2026-10-10T00:00:00Z',
    },
    {
      id: 2,
      subject: 'Payment failed',
      description: 'Payment transaction failed',
      priority: 'medium',
      status: 'in_progress',
      createdAt: '2026-10-10T01:00:00Z',
    },
    {
      id: 3,
      subject: 'Feature request',
      description: 'Request for a new feature',
      priority: 'low',
      status: 'closed',
      createdAt: '2026-10-10T02:00:00Z',
    },
  ];

  findAll() {
    return this.tickets;
  }
}
