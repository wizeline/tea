// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import React from 'react';

import SquareIconProps, { type Props } from './SquareIconProps';
import { getContainerSize, getPreserveAspectRatio } from './SquareIconHelpers';
import { SquareIconDivStyled, SquareIconSvgStyled } from './SquareIconStyled';

import getSVG from './data';

const SquareIcon = (props: Props) => {
  const { name, size } = props;
  const svg = getSVG(name);
  if (!svg) return null;
  const { viewBox } = svg.props;
  const iconChildren = svg.props.children;
  return (
    <SquareIconDivStyled iconSize={getContainerSize(size)} top={props.top}>
      <SquareIconSvgStyled
        iconFillColor={props.color}
        viewBox={viewBox}
        preserveAspectRatio={getPreserveAspectRatio()}
        inverse={props.inverse}
      >
        {iconChildren}
      </SquareIconSvgStyled>
    </SquareIconDivStyled>
  );
};

SquareIcon.defaultProps = SquareIconProps.defaultProps;

export default SquareIcon;
