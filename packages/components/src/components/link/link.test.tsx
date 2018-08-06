import { Link } from './link';

import { TestWindow } from '@stencil/core/testing';

describe('wz-link', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Link],
      html: '<wz-link>Hello, my name is Marty McFly</wz-link>',
    });
    const link = element.querySelector('a');
 
    expect(link.innerHTML).toEqual('Hello, my name is Marty McFly');
  });
});
