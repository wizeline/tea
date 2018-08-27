import { Select } from './select';
import { TestWindow } from '@stencil/core/testing';

describe('wz-select', () => {
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

    expect(element).toMatchSnapshot();
  });
});
