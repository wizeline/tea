import { InputFile } from './inputfile';

import { TestWindow } from '@stencil/core/testing';

describe('wz-input-file', () => {

  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [InputFile],
      html: "<wz-input-file />",
    });
    const input = element.querySelector('input');
    const label = element.querySelector('label');

    expect(input).toBeTruthy();
    expect(label).toBeTruthy();
    expect(label.textContent).toEqual('Choose a file');

    expect(element).toMatchSnapshot();
  });

});
