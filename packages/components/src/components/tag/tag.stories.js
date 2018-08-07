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
      <wz-tag filled="primary" >Cool Tag</wz-tag>
      <wz-tag filled="info" >Cool Tag</wz-tag>
      <wz-tag filled="warning" >Cool Tag</wz-tag>
      <wz-tag filled="negative" >Cool Tag</wz-tag>
      <wz-tag filled="positive" >Cool Tag</wz-tag>
  `,
  )
  .add(
    'removable',
    () => `
      <wz-tag removable >Cool Tag</wz-tag>
      <wz-tag filled="primary" removable>Cool Tag</wz-tag>
      <wz-tag filled="info" removable>Cool Tag</wz-tag>
      <wz-tag filled="warning" removable>Cool Tag</wz-tag>
      <wz-tag filled="negative" removable>Cool Tag</wz-tag>
      <wz-tag filled="positive" removable>Cool Tag</wz-tag>
  `,
  );
