import { newE2EPage } from '@stencil/core/testing';

describe('wz-input-file', () => {
  it('renders an input file component', async () => {
    const page = await newE2EPage();
    await page.setContent('<wz-input-file />');
    const inputFile = await page.find('wz-input-file');
    const label = await inputFile.find('label');
    expect(label.innerText).toEqual('Choose a file');
  });
});
