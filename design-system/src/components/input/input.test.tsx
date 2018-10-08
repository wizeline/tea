import { newE2EPage } from '@stencil/core/testing';

describe('wz-input', () => {
  it('renders value', async () => {
    const page = await newE2EPage();
    await page.setContent(
      "<wz-input value='Hello, my name is Marty McFly'></wz-input>",
    );
    const screenshot = await page.compareScreenshot();
    expect(screenshot).toMatchScreenshot();
  });

  it('renders disabled', async () => {
    const page = await newE2EPage();
    await page.setContent("<wz-input disabled='false'></wz-input>");
    const screenshot = await page.compareScreenshot();
    expect(screenshot).toMatchScreenshot();
  });
});
