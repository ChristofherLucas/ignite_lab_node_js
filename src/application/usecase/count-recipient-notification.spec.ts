import { makeNotification } from 'test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('count recipient notifications', () => {
  it('deve cancelar uma notificação', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationRepository,
    );

    await notificationRepository.create(makeNotification({ recipientId: '1' }));

    await notificationRepository.create(makeNotification({ recipientId: '2' }));

    await notificationRepository.create(makeNotification({ recipientId: '1' }));

    const { count } = await countRecipientNotifications.execute({
      recipientId: '2',
    });

    expect(count).toEqual(1);
  });
});
