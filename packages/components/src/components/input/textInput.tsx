import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { Validator } from './validator';
import { validatorFactory } from './validatorFactory';

@Component({
  tag: 'wz-validator',
  styleUrl: 'input.scss',
  shadow: false,
})
export class textInput {
  @Prop({ mutable: true })
  value: string;
  @Prop() validator: string;
  @Event() changed: EventEmitter<string>;

  _validator: Validator<string> = defaultValidator;

  componentWillLoad() {
    this._validator = validatorFactory(this.validator);
  }

  componentWillUpdate() {
    this._validator = validatorFactory(this.validator);
  }

  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.changed.emit(this.value);
  }

  render() {
    console.log(this._validator, this._validator.validate(this.value));

    return (
      <div>
        <div class="input-container">
          <input value={this.value} onInput={ev => this.handleChange(ev)} />
        </div>
        {!this._validator.validate(this.value) ? (
          <span class="validation-error">{this._validator.errorMessage}</span>
        ) : null}
      </div>
    );
  }
}

const defaultValidator: Validator<any> = {
  validate: (_x: any) => true,
};
