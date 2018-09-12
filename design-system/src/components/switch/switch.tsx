import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-switch',
  styleUrl: 'switch.scss',
  shadow: false,
})
export class Switch {
  @Prop()
  id: string = 'wz-switch';

  render() {
    return (
      <div class="checkbox">
        <input type="checkbox" id={this.id} />
        <label htmlFor={this.id} />
      </div>
    );
  }
}
