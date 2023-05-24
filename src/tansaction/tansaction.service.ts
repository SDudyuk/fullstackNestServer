import { Injectable } from '@nestjs/common';
import { CreateTansactionDto } from './dto/create-tansaction.dto';
import { UpdateTansactionDto } from './dto/update-tansaction.dto';

@Injectable()
export class TansactionService {
  create(createTansactionDto: CreateTansactionDto) {
    return 'This action adds a new tansaction';
  }

  findAll() {
    return `This action returns all tansaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tansaction`;
  }

  update(id: number, updateTansactionDto: UpdateTansactionDto) {
    return `This action updates a #${id} tansaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} tansaction`;
  }
}
