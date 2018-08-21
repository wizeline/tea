import { TextArea } from './textarea';

import { TestWindow } from '@stencil/core/testing';

describe('wz-textarea', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [TextArea],
      html: "<wz-textarea value='Hello, my name is Marty McFly'></wz-textarea>",
    });
    const textarea = element.querySelector('textarea');

    expect(textarea.value).toEqual('Hello, my name is Marty McFly');
    expect(element).toMatchSnapshot();
  });
});
