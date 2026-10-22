import { IsIn, IsNotEmpty, IsString } from 'class-validator';
import { Ticket } from '../ticket.interface';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  subject!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsIn(['low', 'medium', 'high'])
  priority!: Ticket['priority'];
}
