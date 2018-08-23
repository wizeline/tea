import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wz-input',
  styleUrl: 'input.scss',
  shadow: false,
})
export class Input {
  @Prop({ mutable: true })
  value: string;
  @Prop()
  name: string;
  @Prop()
  type: string = 'text';
  @Prop()
  disabled: boolean = false;
  @Prop()
  placeholder: string;

  render() {
    if (this.type === 'file') {
      return <wz-input-file {...this} />;
    }

    return (
      <div class="input-container">
        <input
          placeholder={this.placeholder}
          disabled={this.disabled}
          name={this.name}
          value={this.value}
          type={this.type}
        />
      </div>
    );
  }
}
