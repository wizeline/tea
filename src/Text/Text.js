// @flow

import React from 'react';
import PropTypes from 'prop-types';
import TextSpanStyled from './TextStyled';
import type { TextProps } from './TextTypes';
import { getTextPropSupport } from './TextSupport';
import defaultTextTheme from '../themes/defaultTheme/components/Text';

const Text = (props: TextProps) => {
  const { textSpanStyledProps, children } = getTextPropSupport(props);
  return <TextSpanStyled {...textSpanStyledProps}>{children}</TextSpanStyled>;
};

Text.propTypes = {
  theme: PropTypes.shape({ textText: PropTypes.string }),
};

Text.defaultProps = {
  theme: defaultTextTheme,
};

export default Text;
