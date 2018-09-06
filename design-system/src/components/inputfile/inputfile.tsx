import { Component, Prop, Element, Listen } from '@stencil/core';

@Component({
  tag: 'wz-input-file',
  styleUrl: 'inputfile.scss',
  shadow: false,
})
export class InputFile {
  @Prop()
  name: string = 'file';
  @Prop()
  placeholder: string = 'Choose a file';
  @Prop()
  disabled: boolean = false;
  @Prop()
  accept: string;
  @Element()
  inputFile: HTMLStencilElement;

  label: string;

  @Listen('change')
  todoCompletedHandler(event: CustomEvent) {
    this.label = (event.target as HTMLInputElement).value.split('\\').pop();
    this.inputFile.forceUpdate();
  }

  byPassOnClick() {
    document.getElementById('file').click();
  }

  render() {
    return [
      <input
        type="file"
        name={this.name}
        id="file"
        class="inputfile"
        accept={this.accept}
      />,
      <label htmlFor="file">
        <wz-button onClick={this.byPassOnClick}>{this.placeholder}</wz-button>
        <span>{this.label}</span>
      </label>,
    ];
  }
}
