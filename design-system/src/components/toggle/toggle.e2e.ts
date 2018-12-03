import { newE2EPage } from '@stencil/core/testing';

describe('wz-toggle', () => {
  it('should render a toggle-component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-toggle />');
    const toggle = await page.find('wz-toggle');
    expect(toggle.outerHTML).toMatchSnapshot();
  });
});
