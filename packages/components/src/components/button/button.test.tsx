import { Button } from './button';

import { TestWindow } from '@stencil/core/testing';

describe('wz-button', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Button],
      html: '<wz-button>Hello, my name is Marty McFly</wz-button>',
    });
    const button = element.querySelector('button');

    expect(button.innerHTML).toEqual('Hello, my name is Marty McFly');
  });
});
