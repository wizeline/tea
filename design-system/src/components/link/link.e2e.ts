import { newE2EPage } from '@stencil/core/testing';

describe('wz-link', () => {
  it('should render a link-component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-link>Hello, my name is Marty McFly</wz-link>');
    const link = await page.find('wz-link');
    expect(link.innerText).toMatchSnapshot();
  });
});
