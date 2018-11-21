import { newE2EPage } from '@stencil/core/testing';

describe('wz-dropdown', () => {
  it('should render a dropdown-component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-dropdown></wz-dropdown>');
  });
});
