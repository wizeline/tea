import { newE2EPage } from '@stencil/core/testing';

describe('wz-select', () => {
  it('should render a select-component', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <wz-select>
        <option selected value="1">First Option</option>
        <option option="2">Second Option</option>
      </wz-select>`);
    const select = await page.find('wz-select');
    expect(select.outerHTML).toMatchSnapshot();
  });
});
