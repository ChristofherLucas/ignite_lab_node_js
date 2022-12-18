import { SendNotification } from '@application/usecase/send-notification';
import { DatabaseModule } from '@infra/database/database.module';
import { NotificationController } from '@infra/http/controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationController],
})
export class MessagingModule {}
