import { newE2EPage } from '@stencil/core/testing';

describe('wz-radio', () => {
  it('should render a wz-radio component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-radio></wz-radio>');
    const radio = await page.find('wz-radio');
    const checked = await radio.getProperty('checked');
    expect(checked).toBeFalsy();
  });
});
