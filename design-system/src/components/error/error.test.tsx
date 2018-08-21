import { Error } from './error';

import { TestWindow } from '@stencil/core/testing';

describe('wz-error', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Error],
      html: '<wz-error>Hello, my name is Marty McFly</wz-error>',
    });
    const error = element.querySelector('wz-text');
    
    expect(error).toBeTruthy();
    expect(element.innerHTML).toContain('Hello, my name is Marty McFly');
  });
});
