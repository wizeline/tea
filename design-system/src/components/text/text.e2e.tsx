import { newE2EPage } from '@stencil/core/testing';

describe('wz-text', () => {
  it('renders text component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-text>Hello, my name is Marty McFly</wz-text>');
    const text = await page.find('wz-text');
    expect(text.innerHTML).toMatchSnapshot();
  });
});
