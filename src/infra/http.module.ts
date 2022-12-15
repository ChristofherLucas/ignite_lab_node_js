import { Module } from '@nestjs/common';
import { NotificationController } from './http/controllers/notifications.controller';
import { SendNotification } from 'src/application/usecase/send-notification';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SendNotification],
  controllers: [NotificationController],
})
export class HttpModule {}
