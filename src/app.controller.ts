import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notification')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getNotifications() {
    return await this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        category: body.category,
        content: body.content,
        recipientId: body.recipientId,
      },
    });
  }
}
