import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { FilterTicketsQueryDto } from './dto/filter-tickets-query.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  findAll(@Query() query: FilterTicketsQueryDto) {
    return this.ticketsService.findAll(query.status, query.priority);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.findOne(id);
  }

  @Post()
  create(@Body() createDto: CreateTicketDto) {
    return this.ticketsService.create(createDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateTicketDto,
  ) {
    return this.ticketsService.update(id, updateDto);
  }

  @Patch(':id/close')
  closeTicket(@Param('id', ParseIntPipe) id: number) {
    return this.ticketsService.closeTicket(id);
  }
}
