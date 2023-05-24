import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { TansactionModule } from './tansaction/tansaction.module';

@Module({
  imports: [UserModule, AuthModule, CategoryModule, TansactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
