import { newE2EPage } from '@stencil/core/testing';

describe('wz-dropdown', () => {
  it('should render a dropdown-component', async () => {
    const page = await newE2EPage();
    await page.setContent(`
    <wz-dropdown>
      <wz-button small>test</wz-button>
      <wz-dropdown-menu>
        <wz-dropdown-menu-item selected>
          <wz-text color="var(--dropdown-menu-item-color)">
            a
          </wz-text>
        </wz-dropdown-menu-item>
        <wz-dropdown-menu-item>
          <wz-text color="var(--dropdown-menu-item-color)">
            a
          </wz-text>
        </wz-dropdown-menu-item>
        <wz-dropdown-menu-item>
          <wz-text color="var(--dropdown-menu-item-color)">
            c
          </wz-text>
        </wz-dropdown-menu-item>
      </wz-dropdown-menu>
    </wz-dropdown>
  `);
    const dropdown = await page.find('wz-dropdown');
    const dropdownMenuItems = await dropdown.find('wz-dropdown-menu-item');
    expect(dropdownMenuItems).toMatchSnapshot();
  });
});
