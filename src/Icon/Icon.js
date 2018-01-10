// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';
import getContainerSize from '../utils';
import constants from './IconConstants';
import { IconDivStyled, IconSvgStyled } from './IconStyled';

import getSVG from './data';

type Props = {
  name: string,
  color?: string,
  size?: string,
};

const Icon = (props: Props) => {
  const { name, size } = props;
  const svg = getSVG(name);
  if (!svg) return null;
  const { viewBox } = svg.props;
  const iconChildren = svg.props.children;
  const iconSize = getContainerSize(size);
  return (
    <IconDivStyled iconSize={iconSize}>
      <IconSvgStyled
        iconFillColor={props.color}
        viewBox={viewBox}
        preserveAspectRatio={constants.preserveAspectRatio}
      >
        {iconChildren}
      </IconSvgStyled>
    </IconDivStyled>
  );
};

Icon.defaultProps = {
  size: undefined,
  color: undefined,
};

export default Icon;
