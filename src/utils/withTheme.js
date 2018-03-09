// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import * as React from 'react';
import isEmpty from 'ramda/src/isEmpty';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../themes/defaultTheme';

const hasThemeProp = props => props.theme && !isEmpty(props.theme);

const withPhoenixTheme = (Component: React.ComponentType<Object>) => {
  const result = (props: Object) => {
    if (hasThemeProp(props)) {
      return <Component {...props} />;
    }
    return (
      <ThemeProvider theme={{ ...defaultTheme }}>
        <Component {...props} />
      </ThemeProvider>
    );
  };
  return result;
};

export default withPhoenixTheme;
