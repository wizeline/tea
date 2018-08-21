import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('default', () =>
    [
      '<wz-button small>Default small Button</wz-button>',
      '<wz-button>Default Button</wz-button>',
      '<wz-button large>Default large Button</wz-button>',
    ].join(''),
  )
  .add(
    'primary',
    () =>
      '<wz-button primary>Primary Button</wz-button>' +
      '<wz-button primary disabled>Primary Button</wz-button>',
  )
  .add(
    'destructive',
    () =>
      '<wz-button destructive>Destructive Button</wz-button>' +
      '<wz-button destructive disabled>Destructive Button</wz-button>',
  )
  .add(
    'secondary',
    () =>
      '<wz-button>Secondary Button</wz-button><wz-button disabled>Secondary Button</wz-button>',
  );
