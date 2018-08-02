import { storiesOf } from '@storybook/html';

storiesOf('Select', module).add(
  'default',
  () => `
  <wz-select onchange="(function(e) { console.log(this.event.target.value) })()">
    <option value="volvo">Volvo</option>
    <option value="saab" selected>Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </wz-select>`,
);
