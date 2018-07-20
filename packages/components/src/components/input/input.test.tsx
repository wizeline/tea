import { Input } from './input';

import { TestWindow } from '@stencil/core/testing';

describe('wz-input', () => {
  // let element;
  it('renders', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Input],
      html: '<wz-input value=\'Hello, my name is Marty McFly\'></wz-input>',
    });

    console.log(element, '-----------')

    expect(element.textContent).toEqual('Hello, my name is Marty McFly');
  });

  // beforeEach(async () => {
  //   const window = new TestWindow();
  //   element = await window.load({ components: [Input], html: '<wz-input value="test"></wz-input><p>test</p>' });
  //   console.log('------await')
  //   // element = await render();
  // });
  // describe('handleToggle()', () => {
  //   it('emits changed event', () => {
  // //     const cmp = new Input;
  //     console.log(window.document.getElementsByTagName('wz-input').length, '-----00-------');
  //     // const spy = jest.spyOn(element.changed, 'emit');
  //     console.log(element, '--------2---');
  //     // element.handleChange('test');
  //     // expect(spy).toHaveBeenCalled();
  //   });
  // });
});



// it('should be the new way', async () => {
//   const window = new TestWindow();
//   const element = await window.load({
//     components: [MyComponent],
//     html: '<my-cmp first="Marty" last-name="McFly"></my-cmp>',
//   });
//   expect(element.textContent).toEqual('Hello, my name is Marty McFly');

//   element.first = 'George';
//   await window.flush();

//   expect(element.textContent).toEqual('Hello, my name is George McFly');
// });
