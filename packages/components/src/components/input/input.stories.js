import { storiesOf } from '@storybook/html';

function myFunction(event) {
  console.log('test test ', event);
}

storiesOf('Input', module).add(
  'default',
  () => `
  <wz-input onchange="myFunction()" value="Default Input"></wz-input>`,
);
