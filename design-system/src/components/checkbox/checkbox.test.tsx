import { Checkbox } from './checkbox';


describe('wz-checkbox', () => {

  it('renders value', async () => {
    const checkbox = new Checkbox();

    expect(checkbox.checked).toBeFalsy();
  });

});
