import { Component } from '@stencil/core';

@Component({
  tag: 'icon-thumb-up',
  shadow: false,
})
export class IconThumbUp {
  render() {
    return (
      <svg
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        enable-background="new 0 0 24 24"
      >
        <path fill="none" d="M0,0h24v24H0V0z" />
        <path
          d="M1,21h4V9H1V21z M23,10c0-1.1-0.9-2-2-2h-6.31l0.95-4.57l0.03-0.32c0-0.41-0.17-0.79-0.44-1.06L14.17,1L7.59,7.59
	C7.22,7.95,7,8.45,7,9v10c0,1.1,0.9,2,2,2h9c0.83,0,1.54-0.5,1.84-1.22l3.02-7.05C22.95,12.5,23,12.26,23,12V10z"
        />
      </svg>
    );
  }
}
