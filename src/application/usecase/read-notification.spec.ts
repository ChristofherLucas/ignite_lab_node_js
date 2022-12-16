import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { ReadNotification } from './read-notification';

describe('read notification', () => {
  it('deve cancelar uma notificação', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const readNotification = new ReadNotification(notificationRepository);
    const notification = makeNotification({ recipientId: '1' });
    await notificationRepository.create(notification);
    await readNotification.execute({ notificationId: notification.id });
    expect(notificationRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new ReadNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
