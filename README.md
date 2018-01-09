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

### Proposed Naming Convention of Theme Variable names

The proposed naming convention for theme variables draws inspiration from the [Design Tokens in Salesforce's Lightning Design System](https://www.lightningdesignsystem.com/design-tokens)

To produce example theme variable names concatenate examples below from left to right columns.

* Surface Type (mandatory): { background, text, border, shadow }
* Function Type (optional): { Primary, Secondary, Destructive }
* Component Type (optional): { Icon, CircleIcon, Input, Select, Button, CircleButton }
* Sub-Component Type (optional): See Component Set Above
* Component State (optional): { Hovered, Disabled, Invalidated }
* Inverse State (optional): { inverse }

Example variable names to be used in code:

```jsx
props.theme.backgroundPrimaryHovered  // yields #4793cd
props.theme.borderSecondaryDisabled // yields #e2e8ea
props.theme.borderPrimary
props.theme.borderPrimaryInputHoveredInverse
```

The general idea is to specify more specific name segments to the right of less specific name segments.

### Proposed API

CSS Color codes (hexidecimal, rgba, etc.) are assigned human-readable color names.

```jsx
// defaultColors.js

// Example colors are from the freya project and are subject to change by request from UX.
export default {
  charcoalGrey: '#3f484b',
  coolGrey: '#a2abaf',
  darkSkyBlue: '#50a5e7',
  duskyBlue: '#4f55a1',
  rosyPink: '#ec5659',
  tomato: '#e62a2a',
  // ... etc ...
}
```

Color names are then mapped to theme variables. Each theme variable represents a surface on a given component or multiple components.

```jsx
// defaultTheme.js

import colors from './defaultColors.js';

export default {
  backgroundPrimary: colors.darkSkyBlue,
  backgroundPrimaryHovered: colors.dullBlue,
  textPrimary: colors.white,
  textPrimaryHovered: colors.white,
  borderSecondaryHovered: colors.white,
  // ... etc ...
}
```

A flat object hierachy has been opted for to allow the default theme to be easily overriden (explained later). The number of theme variables is expected to grow over time. To allow for increased maintainability, theme variables will be grouped into separate files.

```jsx
// defaultBackgroundTheme.js

import colors from './defaultColors.js';

export default {
  backgroundPrimary: colors.darkSkyBlue,
  backgroundPrimaryHovered: colors.dullBlue,
  // ... etc ...
}
```

```jsx
// defaultTextTheme.js

import colors from './defaultColors.js';

export default {
  textPrimary: colors.white,
  textPrimaryHovered: colors.white,
  // ... etc ...
}
```

```jsx
// defaultBorderTheme.js
import colors from './defaultColors.js';

export default {
  borderSecondaryHovered: colors.white,
  // ... etc ...
}
```

```jsx
// A more maintainable version of defaultTheme.js

import backgroundTheme from './defaultBackgroundTheme'
import textTheme from './defaultTextTheme'
import borderTheme from './defaultBorderTheme'

export default {
  ...backgroundTheme,
  ...textTheme,
  ...borderTheme,
  // ... etc ...
}
```

Consumers have the freedom to manage their own colours and theme overrides however they desire as long as they later provide a flat object with keys that correspond to supported theme variables. These theme variables will be listed publicly in the API documentation.

```jsx
// myCustomColors.js

export default {
  hotPink: '#ff69b4',
  deepPurple: '#502075',
}
```

```jsx
// myCustomTheme.js

import colors from './myCustomColors';

export default {
  backgroundPrimary: colors.deepPurple,
  textPrimary: colors.hotPink,
  borderPrimary: colors.hotPink,
}
```

The Phoenix API will expose its own ThemeProvider wrapper component that consumers can pass an alternative theme to as a prop.

```jsx
// WrappedApp.js

import ThemeProvider from 'phoenix';
import myCustomTheme from './myCustomTheme';

// ...

// Theme variables in the default theme will not be
// overridden if a theme prop is not provided.
<ThemeProvider theme={ myCustomTheme } />
  <App />
</ThemeProvider>

// ...
```

### Under the Hood

The current approach under consideration is to allow Phoenix to expose it's own ThemeProvider to consumers, which wraps the ThemeProvider from styled-components.

```jsx
// PhoenixThemeProvider.js

import ThemeProvider from 'styled-components';
import defaultTheme from './defaultTheme';

const PhoenixThemeProvider = (props) => {
  const finalTheme = { ...defaultTheme, ...props.theme };
  return (
    <ThemeProvider theme={ finalTheme } >
      { props.children }
    </ThemeProvider>
  );
};

export default PhoenixThemeProvider;
```
