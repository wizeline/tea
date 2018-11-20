import { newE2EPage } from '@stencil/core/testing';

describe('wz-icon', () => {
  it('renders icon', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-icon icon="clear" />');
    const icon = await page.find('wz-icon');
    expect(icon.outerHTML).toMatchSnapshot();
  });
});
