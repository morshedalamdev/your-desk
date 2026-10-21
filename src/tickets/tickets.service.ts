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

  private nextDataId = 4;

  findAll(status?: Ticket['status'], priority?: Ticket['priority']): Ticket[] {
    let tickets = this.tickets;

    if (status) {
      tickets = tickets.filter((ticket) => ticket.status === status);
    }

    if (priority) {
      tickets = tickets.filter((ticket) => ticket.priority === priority);
    }

    if (tickets.length === 0) {
      throw new Error('No tickets found');
    }

    return tickets;
  }

  findOne(id: number): Ticket {
    const ticket = this.tickets.find((ticket) => ticket.id === id);

    if (!ticket) {
      throw new Error(`Ticket with id ${id} not found`);
    }

    return ticket;
  }

  create(payload: Omit<Ticket, 'id' | 'status' | 'createdAt'>): Ticket {
    const ticket: Ticket = {
      id: this.nextDataId++,
      subject: payload.subject,
      description: payload.description,
      priority: payload.priority,
      status: 'open',
      createdAt: new Date().toISOString(),
    };

    this.tickets.push(ticket);
    return ticket;
  }
}
