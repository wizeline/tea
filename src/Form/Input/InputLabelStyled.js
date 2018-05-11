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
    left: 1rem;
    /*
      To centre the Icon we have to use calc, as the current layout
      is something like this:
        <InputContainer>
          <TopLabel />
          <Input />
          <Icon />
          <BottomLabel />
        </InputContainer>
      The height of the InputContainer is 78px because:
        TopLabel height + margin = 14px + 8px = 22px
        Input height = 40px
        BottomLabel height + margin = 14px + 2px = 16px
        Thus, 22px + 40px +  16px = 78px
      To centre the Icon we push it down by 50%
        then we have to pull it up by half of the TopLabel's height, 11px
        after that, we push it down by half of the BottomLabel's height, 8px
        so, at the end, we have 50% + 11px - 8px = 50% + 3px
        which in rem is 50% + 0.1875rem
    */
    top: calc(50% + 0.1875rem);
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
