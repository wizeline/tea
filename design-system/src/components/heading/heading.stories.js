import { storiesOf } from '@storybook/html';

storiesOf('Heading', module)
  .add('default', () => '<wz-heading>Default Text</wz-heading>')
  .add('small', () => '<wz-heading small>Small Text</wz-heading>')
  .add('medium', () => '<wz-heading medium>Small Text</wz-heading>')
  .add('large', () => '<wz-heading large>Small Text</wz-heading>')
  .add('xlarge', () => '<wz-heading xlarge>Small Text</wz-heading>');
