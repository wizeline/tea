import { newE2EPage } from '@stencil/core/testing';

describe('wz-dropdownmenuitem', () => {
  it('should render a wz-dropdownmenuitem component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-dropdownmenuitem></wz-dropdownmenuitem>');
  });
});
