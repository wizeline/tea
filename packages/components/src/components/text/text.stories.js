import { storiesOf } from '@storybook/html';
import { withNotes } from '@storybook/addon-notes';
import textDefaultMD from './text.default.md';

storiesOf('Text', module)
  .add('default', () => '<wz-text>default</wz-text>', {
    notes: { markdown: textDefaultMD },
  })
  .add('small', () => '<wz-text small>Small Text</wz-text>')
  .add('with Modifier', () => '<wz-text small bold>Small Text</wz-text>');
