import { newE2EPage } from '@stencil/core/testing';

describe('wz-dropdownmenu', () => {
  it('should render a wz-dropdownmenu component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-dropdownmenu></wz-dropdownmenu>');
  });
});
