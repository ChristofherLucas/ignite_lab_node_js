import { Content } from './content';
describe('Notification content', () => {
  it('', () => {
    const content = new Content('social');
    expect(content).toBeTruthy();
  });
  it('criar conteudo da notificação', () => {
    expect(() => new Content('aaa')).toThrow();
  });
});
