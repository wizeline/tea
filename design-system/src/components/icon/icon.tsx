import { Component, Prop } from '@stencil/core';
import IconSet from '../icons';

@Component({
  tag: 'wz-icon',
  styleUrl: 'icon.scss',
  shadow: false,
})
export class Icon {
  @Prop()
  icon: string;
  @Prop()
  size: number = 40;
  render() {
    const SelectedIcon = IconSet(this);
    debugger;
    return <div>{SelectedIcon}</div>;
  }
}
