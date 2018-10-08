import { newE2EPage } from '@stencil/core/testing';

describe('wz-tag', () => {
  it('renders value', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-tag>Hello, my name is Marty McFly</wz-tag>');
    const screenshot = await page.compareScreenshot();
    expect(screenshot).toMatchScreenshot();
  });

  it('renders tag with icon', async () => {
    const page = await newE2EPage();
    await page.setContent(
      "<wz-tag icon='edit'>Hello, my name is Marty McFly</wz-tag>",
    );
    const screenshot = await page.compareScreenshot();
    expect(screenshot).toMatchScreenshot();
  });
});
