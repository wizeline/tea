import { storiesOf } from '@storybook/html';

storiesOf('Tag', module)
  .add(
    'default',
    () => `
  <wz-tag>Cool Tag</wz-tag>`,
  )
  .add(
    'filled',
    () => `
      <wz-tag primary>Cool Tag</wz-tag>
      <wz-tag info>Cool Tag</wz-tag>
      <wz-tag warning>Cool Tag</wz-tag>
      <wz-tag negative>Cool Tag</wz-tag>
      <wz-tag positive>Cool Tag</wz-tag>
  `,
  )
  .add(
    'removable',
    () => `
      <wz-tag removable>Cool Tag</wz-tag>
      <wz-tag primary removable>Cool Tag</wz-tag>
      <wz-tag info removable>Cool Tag</wz-tag>
      <wz-tag warning removable>Cool Tag</wz-tag>
      <wz-tag negative removable>Cool Tag</wz-tag>
      <wz-tag positive removable>Cool Tag</wz-tag>
  `,
  );
