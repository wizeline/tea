import { Component } from '@stencil/core';

@Component({
  tag: 'icon-building',
  shadow: false,
})
export class IconBuilding {
  render() {
    return (
      <svg viewBox="0 0 48 48">
        <path d="M0 0h48v48H0z" fill="none" />
        <path d="M24 14V6H4v36h40V14H24zM12 38H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm0-8H8v-4h4v4zm8 24h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm0-8h-4v-4h4v4zm20 24H24v-4h4v-4h-4v-4h4v-4h-4v-4h16v20zm-4-16h-4v4h4v-4zm0 8h-4v4h4v-4z"
        />
      </svg>
    );
  }
}