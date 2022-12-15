import { Content } from './content';
import { Notification } from './notification';

describe('Notification ', () => {
  it('', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'example',
    });
    expect(notification).toBeTruthy();
  });
});
