import { TestWindow } from '@stencil/core/testing';
import { Tag } from './tag';

describe('wz-tag', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Tag],
      html: '<wz-tag>Hello, my name is Marty McFly</wz-tag>',
    });
    const tagDiv = element.querySelector('div');

    expect(tagDiv.textContent).toEqual('Hello, my name is Marty McFly');
    expect(element).toMatchSnapshot();
  });

  it('renders tag with icon', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Tag],
      html: '<wz-tag icon="edit">Hello, my name is Marty McFly</wz-tag>',
    });
    const tagDiv = element.querySelector('div');

    expect(tagDiv.textContent).toEqual('Hello, my name is Marty McFly');
    expect(element).toMatchSnapshot();
  });
});
