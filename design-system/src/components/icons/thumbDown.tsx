import { Component, h } from '@stencil/core';

@Component({
  tag: 'icon-thumb-down',
  shadow: false,
})
export class IconThumbDown {
  render() {
    return (
      <svg
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        enable-background="new 0 0 24 24"
      >
        <g>
          <g>
            <rect fill="none" width="24" height="24" />
          </g>
          <path
            d="M15,3H6C5.17,3,4.46,3.5,4.16,4.22l-3.02,7.05C1.05,11.5,1,11.74,1,12l0,2c0,1.1,0.9,2,2,2h6.31l-0.95,4.57l-0.03,0.32
		c0,0.41,0.17,0.79,0.44,1.06L9.83,23l6.59-6.59C16.78,16.05,17,15.55,17,15V5C17,3.9,16.1,3,15,3z M19,3v12h4V3H19z"
          />
        </g>
      </svg>
    );
  }
}
