import { Component, Prop, State, Watch } from '@stencil/core';

/**
 * A button component.
 *
 * @example
 * ````html
 * <cs-button
 *  cs-disabled="<boolean>"
 *  cs-type="<string>"
 * >
 *   Button
 * </cs-button>
 * ````
 */
@Component({
  tag: 'cs-button',
  styleUrl: 'cs-button.scss',
  shadow: false
})
export class CsButton {

  //
  // Internal state (data flow: @Prop -> @State)
  //
  @State() intDisabled: boolean;
  @State() intType: string;

  @Prop() csDisabled: boolean;
  @Watch('csDisabled')

  /**
   * @name cs-disabled
   * @type {boolean}
   * @default false
   * @summary Disables the element when set.
   * @example
   * ````html
   * <cs-button cs-disabled>You can't interact with me</cs-button>
   * ````
   */
  setDisabled(newVal) {
    this.intDisabled = newVal;
  }

  @Prop() csName: string;
  @Watch('csName')

  @Prop() csType: string;
  @Watch('csType')

  /**
   * @name cs-type
   * @type {string}
   * @default button
   * @summary Can either be `button`, `submit` or `reset`.
   * @example
   * ````html
   * <cs-button cs-type="reset">When used in a form, I reset your fields</cs-button>
   * ````
   */
  setType(newVal) {
    this.intType = newVal;
  }

  //
  // Lifecycle hooks
  //
  componentWillLoad() {
    // getting the attribute values the first time -> value from host properties or default
    this.intType = this.csType || 'button';
    this.intDisabled = this.csDisabled || false;
  }

  render() {
    return (
      <button type={this.intType} disabled={this.intDisabled}>
        <slot />
      </button>
    );
  }
}
