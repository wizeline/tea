import { newE2EPage } from '@stencil/core/testing';

describe('wz-textarea', () => {
  it('renders textarea component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      "<wz-textarea value='Hello, my name is Marty McFly'></wz-textarea>",
    );
    const textArea = await page.find('wz-textarea');
    const value = await textArea.getProperty('value');
    expect(value).toEqual('Hello, my name is Marty McFly');
  });
});
