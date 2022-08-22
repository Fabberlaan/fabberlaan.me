import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { DbModule } from './db/db.module';

@Module({
  controllers: [AppController, CatsController],
  providers: [AppService],
  imports: [DbModule],
})
export class AppModule {}
