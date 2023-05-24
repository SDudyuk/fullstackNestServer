import { Module } from '@nestjs/common';
import { TansactionService } from './tansaction.service';
import { TansactionController } from './tansaction.controller';

@Module({
  controllers: [TansactionController],
  providers: [TansactionService]
})
export class TansactionModule {}
