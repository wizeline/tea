import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-toggle',
  styleUrl: 'toggle.scss',
  shadow: false,
})
export class Switch {
  @Prop()
  id: string = 'wz-toggle';
  checked: boolean = false;

  render() {
    return (
      <div class="checkbox">
        <input type="checkbox" id={this.id} checked={this.checked} />
        <label htmlFor={this.id} />
      </div>
    );
  }
}
