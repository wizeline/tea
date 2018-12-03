import { newE2EPage } from '@stencil/core/testing';

describe('wz-checkbox', () => {
  it('should render a checkbox-component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-checkbox></wz-checkbox>');
    const checkbox = await page.find('wz-checkbox');
    const checked = await checkbox.getProperty('checked');
    expect(checked).toBeFalsy();
  });
});
