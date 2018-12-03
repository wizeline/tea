import { newE2EPage } from '@stencil/core/testing';

describe('wz-formerror', () => {
  it('renders form error', async () => {
    const page = await newE2EPage();
    await page.setContent("<wz-form-error error='Uh, oh'>Something</wz-input>");
    const errorText = await page.find('wz-error');
    expect(errorText.innerText).toEqual('Uh, oh');
  });
});
