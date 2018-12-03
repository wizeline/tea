import { newE2EPage } from '@stencil/core/testing';

describe('wz-error', () => {
  it('should render a error-component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-error>Hello, my name is Marty McFly</wz-error>');
    const error = await page.find('wz-error');
    expect(error.innerText).toBe('Hello, my name is Marty McFly');
  });
});
