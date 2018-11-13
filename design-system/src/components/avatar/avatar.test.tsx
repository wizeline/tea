import { Avatar } from './avatar';
import { TestWindow } from '@stencil/core/testing';

describe('wz-avatar', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Avatar],
      html: `<wz-avatar xlarge square src="https://api.adorable.io/avatars/285/abott@adorable.png" />`,
    });

    expect(element).toMatchSnapshot();
  });
});
