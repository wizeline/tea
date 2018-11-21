import { newE2EPage } from '@stencil/core/testing';

describe('wz-tag', () => {
  it('renders tag component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-tag>Hello, my name is Marty McFly</wz-tag>');
    const tag = await page.find('wz-tag');
    expect(tag.innerText).toEqual('Hello, my name is Marty McFly');
  });

  it('renders tag with icon', async () => {
    const page = await newE2EPage();
    await page.setContent(
      '<wz-tag icon="edit">Hello, my name is Marty McFly</wz-tag>',
    );
    const tag = await page.find('wz-tag');
    const icon = await tag.find('wz-icon');
    expect(icon).toBeDefined();
  });
});
