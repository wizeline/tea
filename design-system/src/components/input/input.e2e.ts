import { newE2EPage } from '@stencil/core/testing';

describe('wz-input', () => {
  it('should render a input-component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      "<wz-input value='Hello, my name is Marty McFly'></wz-input>",
    );
    const input = await page.find('wz-input');
    const value = await input.getProperty('value');
    expect(value).toEqual('Hello, my name is Marty McFly');
  });

  it('renders disabled', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-input disabled></wz-input>');
    const input = await page.find('wz-input');
    const disabled = await input.getProperty('disabled');
    expect(disabled).toBeTruthy();
  });
});
