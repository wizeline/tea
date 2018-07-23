import { storiesOf } from '@storybook/html';

storiesOf('Input', module).add(
  'default',
  () => `
  <wz-input oninput="(function(e) { console.log(this.event.target.value) })()" value="Default Input"></wz-input>`,
);
