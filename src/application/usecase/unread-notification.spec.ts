import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { UnreadNotification } from './unread-notification';

describe('unread notification', () => {
  it('deve cancelar uma notificação', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnreadNotification(notificationRepository);

    const notification = makeNotification({ readAt: new Date() });

    await notificationRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].canceledAt).toBeNull();
  });

  it('', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const cancelNotification = new UnreadNotification(notificationRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
