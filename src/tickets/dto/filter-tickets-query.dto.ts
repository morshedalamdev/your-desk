import { IsIn, IsOptional } from 'class-validator';
import { Ticket } from '../ticket.interface';

export class FilterTicketsQueryDto {
  @IsOptional()
  @IsIn(['open', 'in_progress', 'closed'])
  status?: Ticket['status'];

  @IsOptional()
  @IsIn(['high', 'medium', 'low'])
  priority?: Ticket['priority'];
}
