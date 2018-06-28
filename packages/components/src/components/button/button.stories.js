import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('primary', () => '<wz-button primary>Primary Button</wz-button>')
  .add(
    'destructive',
    () => '<wz-button destructive>Destructive Button</wz-button>',
  )
  .add('secondary', () => '<wz-button>Secondary Button</wz-button>');
