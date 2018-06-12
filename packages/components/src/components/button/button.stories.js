/* global document */
import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('primary', () => '<wz-button primary="true">Primary Button</wz-button>')
  .add('secondary', () => '<wz-button>Secondary Button</wz-button>')
  .add('destructive', () => '<wz-button destructive="true">Destructive Button</wz-button>');
