import { newE2EPage } from '@stencil/core/testing';

describe('wz-avatar', () => {
  it('should render an avatar-component', async () => {
    const page = await newE2EPage();
    await page.setContent(
      `<wz-avatar xlarge square src="https://api.adorable.io/avatars/285/abott@adorable.png" />`,
    );
    const avatar = await page.find('wz-avatar');
    expect(avatar.outerHTML).toMatchSnapshot();
  });
});
