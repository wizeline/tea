import { Tag } from './tag';

import { TestWindow } from '@stencil/core/testing';

describe('wz-tag', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Tag],
      html: "<wz-tag value='Hello, my name is Marty McFly'></wz-tag>",
    });
    const input = element.querySelector('input');

    expect(input.value).toEqual('Hello, my name is Marty McFly');
    expect(element).toMatchSnapshot();
  });
});
