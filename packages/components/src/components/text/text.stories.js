import { storiesOf } from '@storybook/html';

storiesOf('Text', module)
  .add('default', () => '<wz-text>Default Text</wz-text>')
  .add('small', () => '<wz-text small>Small Text</wz-text>')
  .add(
    'with Modifier',
    () => '<wz-text small bold>Small Text</wz-text>',
  );
