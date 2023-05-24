import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TansactionService } from './tansaction.service';
import { CreateTansactionDto } from './dto/create-tansaction.dto';
import { UpdateTansactionDto } from './dto/update-tansaction.dto';

@Controller('tansaction')
export class TansactionController {
  constructor(private readonly tansactionService: TansactionService) {}

  @Post()
  create(@Body() createTansactionDto: CreateTansactionDto) {
    return this.tansactionService.create(createTansactionDto);
  }

  @Get()
  findAll() {
    return this.tansactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tansactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTansactionDto: UpdateTansactionDto) {
    return this.tansactionService.update(+id, updateTansactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tansactionService.remove(+id);
  }
}
