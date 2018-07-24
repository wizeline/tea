import { Input } from './input';

import { TestWindow } from '@stencil/core/testing';

describe('wz-input', () => {

  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Input],
      html: "<wz-input value='Hello, my name is Marty McFly'></wz-input>",
    });
    const input = element.querySelector('input');

    expect(input.value).toEqual('Hello, my name is Marty McFly');
    expect(element).toMatchSnapshot();
  });

  it('renders disabled', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Input],
      html: "<wz-input disabled=\'false\'></wz-input>",
    });

    expect(element).toMatchSnapshot();
  });
});
