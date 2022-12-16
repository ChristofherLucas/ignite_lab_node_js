import { Module } from '@nestjs/common';
import { NotificationController } from './http/controllers/notifications.controller';
import { SendNotification } from 'src/application/usecase/send-notification';
import { DatabaseModule } from './database/database.module';
import { CancelNotification } from '@application/usecase/cancel-notification';
import { ReadNotification } from '@application/usecase/read-notification';
import { UnreadNotification } from '@application/usecase/unread-notification';
import { CountRecipientNotifications } from '@application/usecase/count-recipient-notifications';
import { GetRecipietNotifications } from '@application/usecase/get-recipient-notifications';

@Module({
  imports: [DatabaseModule],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotifications,
    GetRecipietNotifications,
  ],
  controllers: [NotificationController],
})
export class HttpModule {}
