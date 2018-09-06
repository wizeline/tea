import { TestWindow } from '@stencil/core/testing';
import { FormError } from './formerror';

describe('wz-input', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [FormError],
      html: "<wz-form-error error='Uh, oh'>Something</wz-input>",
    });
    const wzErrorText = element.querySelector('wz-error').textContent;

    expect(wzErrorText).toEqual('Uh, oh');
    expect(element).toMatchSnapshot();
  });
});
