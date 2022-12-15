import { makeNotification } from 'test/factories/notification-factory';
import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notification-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('cancel notification', () => {
  it('deve cancelar uma notificação', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);
    const notification = makeNotification({ recipientId: '1' });
    await notificationRepository.create(notification);
    await cancelNotification.execute({ notificationId: notification.id });
    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new CancelNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
