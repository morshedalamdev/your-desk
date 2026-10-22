import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { Ticket } from '../ticket.interface';

export class UpdateTicketDto {
  @IsString()
  @IsNotEmpty()
  subject?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsIn(['low', 'medium', 'high'])
  priority?: Ticket['priority'];
}
