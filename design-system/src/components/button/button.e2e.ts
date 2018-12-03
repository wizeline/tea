import { newE2EPage } from '@stencil/core/testing';

describe('wz-button', () => {
  it('should render a button-component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<wz-button>Hello, my name is Marty McFly</wz-button>',
    );
    const button = await page.find('wz-button');

    expect(button.innerText).toEqual('Hello, my name is Marty McFly');
  });
});
