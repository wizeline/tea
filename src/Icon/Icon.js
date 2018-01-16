// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import { getContainerSize } from '../utils';
import constants from './IconConstants';
import { IconDivStyled, IconSvgStyled } from './IconStyled';

import getSVG from './data';
import type { Props } from './IconTypes';

const Icon = (props: Props) => {
  const { name, size } = props;
  const svg = getSVG(name);
  if (!svg) return null;
  const iconViewBox = svg.props.viewBox || constants.defaultViewBox;
  const iconChildren = svg.props.children;
  const iconSize = getContainerSize(size);
  return (
    <IconDivStyled iconSize={iconSize}>
      <IconSvgStyled
        iconFillColor={props.color}
        viewBox={iconViewBox}
        preserveAspectRatio={constants.preserveAspectRatio}
      >
        {iconChildren}
      </IconSvgStyled>
    </IconDivStyled>
  );
};

export default Icon;
