// @flow

import styled from 'styled-components';
import defaultErrorTheme from '../../themes/defaultTheme/components/Error';
import defaultTextTheme from '../../themes/defaultTheme/components/Text';
import {
  otherConstants,
  textConstants,
} from '../../themes/defaultTheme/constants';
import { getThemeProp } from '../../utils';

const BaseLabelStyled = styled.label`
  display: block;
  font-size: 0.75rem;
`;

const LabelStyled = BaseLabelStyled.extend`
  color: ${getThemeProp(textConstants.TEXT_INPUT)};
  margin: 0 0 0.5rem;
`;

const ErrorLabelStyled = BaseLabelStyled.extend`
  color: ${getThemeProp(otherConstants.TEXT_ERROR)};
  visibility: ${({ error }) => (error ? 'visible' : 'hidden')};
  margin: 0.125rem 0 0 0;
`;

const InputContainer = styled.div`
  position: relative;
  & > div {
    position: absolute;
    top: calc(50% + 0.2125rem);
    left: 1rem;
    transform: translateY(-50%);

    & > svg {
      fill: ${getThemeProp(textConstants.TEXT_INPUT_PLACEHOLDER)};
    }
  }
`;

LabelStyled.defaultProps = {
  theme: {
    ...defaultTextTheme,
  },
};

ErrorLabelStyled.defaultProps = {
  theme: {
    ...defaultErrorTheme,
  },
};

export { LabelStyled, ErrorLabelStyled, InputContainer };
