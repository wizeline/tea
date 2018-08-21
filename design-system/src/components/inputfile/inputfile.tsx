import { Component, Prop, Element, Listen } from '@stencil/core';

@Component({
  tag: 'wz-input-file',
  styleUrl: 'inputfile.scss',
  shadow: false,
})
export class InputFile {
  @Prop()
  name: string;
  @Prop()
  placeholder: string = 'Choose a file';
  @Prop()
  disabled: boolean = false;
  @Element()
  inputFile: HTMLStencilElement;

  label: string;

  @Listen('change')
  todoCompletedHandler(event: CustomEvent) {
    this.label = (event.target as HTMLInputElement).value.split('\\').pop();
    this.inputFile.forceUpdate();
  }

  render() {
    return [
      <input type="file" name="file" id="file" class="inputfile" />,
      <label htmlFor="file">
        <wz-button>{this.placeholder}</wz-button>
        <span>{this.label}</span>
      </label>,
    ];
  }
}
