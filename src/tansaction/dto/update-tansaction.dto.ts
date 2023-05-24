import { PartialType } from '@nestjs/mapped-types';
import { CreateTansactionDto } from './create-tansaction.dto';

export class UpdateTansactionDto extends PartialType(CreateTansactionDto) {}
