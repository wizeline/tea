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
  @Prop()
  error: string;
  @Element()
  inputFile: HTMLStencilElement;

  label: string;

  @Listen('change')
  todoCompletedHandler(event: CustomEvent) {
    this.label = (event.target as HTMLInputElement).value.split('\\').pop();
    this.inputFile.forceUpdate();
  }

  bypassOnClick(event) {
    event.preventDefault();
    document.getElementById('file').click();
  }

  render() {
    return [
      <wz-form-error error={this.error}>
        <div>
          <input
            type="file"
            name={this.name}
            id="file"
            class="inputfile"
            accept={this.accept}
          />
        </div>
      </wz-form-error>,
      <label htmlFor="file">
        <wz-button onClick={this.bypassOnClick}>{this.placeholder}</wz-button>
        <span>{this.label}</span>
      </label>,
    ];
  }
}
