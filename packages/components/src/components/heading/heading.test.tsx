import { Heading } from './heading';

import { TestWindow } from '@stencil/core/testing';

describe('wz-heading', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Heading],
      html: '<wz-heading>Hello, my name is Marty McFly</wz-heading>',
    });
    const heading = element.querySelector('span');

    expect(heading.innerHTML).toEqual('Hello, my name is Marty McFly');
  });
});
