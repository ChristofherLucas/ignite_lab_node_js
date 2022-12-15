import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';

interface GetRecipietNotificationsRequest {
  recipientId: string;
}

interface GetRecipietNotificationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipietNotifications {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: GetRecipietNotificationsRequest,
  ): Promise<GetRecipietNotificationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
