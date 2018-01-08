# phoenix
Wizeline Design System

## Steps to verify successful styleguide setup

1. `yarn install`
2. `npm run styleguide`
3. `Open localhost:6060 in your favourite browser`


## Theming Support

The goal of theming support is to allow consumers to configure their own theme that will consistently propagate throughout the design system with minimal effort.

Engineering proposes to:
1. Create a mapping between color representations and component surfaces.
2. Provide an interface to consumers to override color values assigned to component surfaces.
3. Allow the Design System to fall back on the values specified in the default phoenix theme when a custom theme variable has not been specified.
4. Draw inspiration from the Design Tokens from Saleforce's Lightning Design System.
5. Provide a structured naming convention for configuration files with assistance from UX.


### Proposed API

Color Representations declared in a file containing color codes (hexidecimal or rgba)

```jsx
// myCustomColors.js or defaultColors.js

export default {
  red: '#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  black: '#000000',
  white: '#ffffff',
}
```

Colors mapped to theme variables
```jsx
// myCustomTheme.js or defaultTheme.js

import colors from 'myCustomColors.js';

export default {
  backgroundPrimary: colors.blue,
  backgroundPrimaryHover: colors.black,
  textPrimary: colors.white,
  textPrimaryHover: colors.white,
  borderPrimaryHover: colors.white,
  // ... etc ...
}
```

The Phoenix API will provide its own ThemeProvider wrapper component that
consumers can pass an alternative theme to as a prop.

```jsx
// WrappedApp.js

import ThemeWrapper from 'phoenix';
import myCustomTheme from './myCustomTheme';

// ...

// Theme variables in the default theme will not be
// overridden if a theme prop is not provided.
<ThemeProvider theme={ myCustomTheme } />
  <App />
</ThemeProvider>

// ...
```
