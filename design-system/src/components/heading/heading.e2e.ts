import { newE2EPage } from '@stencil/core/testing';

describe('wz-heading', () => {
  it('should render a heading-component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<wz-heading>Hello, my name is Marty McFly</wz-heading>',
    );
    const link = await page.find('wz-heading');
    expect(link.innerText).toEqual('Hello, my name is Marty McFly');
  });
});
