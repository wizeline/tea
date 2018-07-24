import { storiesOf } from '@storybook/html';

storiesOf('Text Area', module).add(
  'default',
  () =>
    '<div style="width: 200px">' +
    '<wz-textarea value="Default Text area" oninput="(function(e) { console.log(this.event.target.value) })()"></wz-textarea>' +
    '</div>',
);
