/* global document */
import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('primary', () => '<wl-button primary="true">Primary Button</wl-button>')
  .add('secondary', () => '<wl-button>Secondary Button</wl-button>')
  .add('destructive', () => '<wl-button destructive="true">Destructive Button</wl-button>');
