import { Content } from 'src/application/entities/content';
import { Notification } from 'src/application/entities/notification';
import { NotificationProps } from 'src/application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('nova solicitação'),
    recipientId: '2',
    ...override,
  });
}
