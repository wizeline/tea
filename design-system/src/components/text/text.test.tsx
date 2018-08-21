import { Text } from './text';

import { TestWindow } from '@stencil/core/testing';

describe('wz-text', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Text],
      html: '<wz-text>Hello, my name is Marty McFly</wz-text>',
    });
    const text = element.querySelector('span');

    expect(text.innerHTML).toEqual('Hello, my name is Marty McFly');
  });

});
