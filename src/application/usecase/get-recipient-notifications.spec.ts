import { makeNotification } from 'test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { GetRecipietNotifications } from './get-recipient-notifications';

describe('count recipient notifications', () => {
  it('deve cancelar uma notificação', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotifications = new GetRecipietNotifications(
      notificationRepository,
    );

    await notificationRepository.create(makeNotification({ recipientId: '1' }));

    await notificationRepository.create(makeNotification({ recipientId: '2' }));

    await notificationRepository.create(makeNotification({ recipientId: '1' }));

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: '1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipentId: '1' }),
        expect.objectContaining({ recipentId: '1' }),
      ]),
    );
  });
});
