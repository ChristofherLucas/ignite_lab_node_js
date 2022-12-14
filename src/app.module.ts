import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  providers: [PrismaService],
  controllers: [AppController],
})
export class AppModule {}
