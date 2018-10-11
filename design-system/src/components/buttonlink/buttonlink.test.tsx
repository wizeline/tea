import { ButtonLink } from './buttonlink';

import { TestWindow } from '@stencil/core/testing';

describe('wz-button-link', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [ButtonLink],
      html: '<wz-button-link>Hello, my name is Marty McFly</wz-button-link>',
    });
    const buttonLink = element.querySelector('button');

    expect(buttonLink).toMatchSnapshot();
    expect(buttonLink.innerHTML).toEqual('Hello, my name is Marty McFly');
  });

  it('renders disabled', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [ButtonLink],
      html: '<wz-button-link disabled>Hello, my name is Marty McFly</wz-button-link>',
    });
    const buttonLink = element.querySelector('button');

    expect(buttonLink).toMatchSnapshot();
    expect(buttonLink.innerHTML).toEqual('Hello, my name is Marty McFly');
  });
});
