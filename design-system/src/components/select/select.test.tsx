import { Select } from './select';
import { TestWindow } from '@stencil/core/testing';

describe.skip('wz-select', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Select],
      html: `
      <wz-select>
        <option selected value="1">First Option</option>
        <option option="2">Second Option</option>
      </wz-select>`,
    });
    const select = element.querySelector('select');

    expect(select.value).toEqual('');
    expect(element).toMatchSnapshot();
  });
});
