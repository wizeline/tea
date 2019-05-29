import { Component, Prop, h } from '@stencil/core';
import sizeMatcher, { MEDIUM_SIZE } from '../../matchers/size';
import shapeMatcher, { ROUND } from '../../matchers/shape';

@Component({
  tag: 'wz-avatar',
  styleUrl: 'avatar.scss',
  shadow: false,
})
export class Avatar {
  @Prop()
  src: string;
  @Prop()
  backgroundsize: string;
  @Prop()
  square: boolean;
  // Size props
  @Prop()
  xsmall: boolean;
  @Prop()
  small: boolean;
  @Prop()
  medium: boolean;
  @Prop()
  large: boolean;
  @Prop()
  xlarge: boolean;
  @Prop()
  xxlarge: boolean;

  getClass() {
    const size = sizeMatcher(this) || MEDIUM_SIZE;
    const shape = shapeMatcher(this) || ROUND;

    return [shape, size].join(' ');
  }

  render() {
    const componentClass = this.getClass();
    const style = {
      backgroundImage: `url('${this.src}')`,
      backgroundSize: this.backgroundsize,
    };

    return <div class={componentClass} style={style} />;
  }
}
