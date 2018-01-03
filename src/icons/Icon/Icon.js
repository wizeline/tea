import React, { Component } from 'react';
import { getContainerSize } from '../../utils';
import { viewBox, preserveAspectRatio } from './Icon.constants.js';
import { IconDivStyled, IconSvgStyled } from './Icon.styled.js';

const Icon = (props) => {
  const { icon, ...otherProps } = props;
  return (
    <IconDivStyled size={ getContainerSize(otherProps) }>
      <IconSvgStyled
        viewBox={ viewBox }
        preserveAspectRatio={ preserveAspectRatio }
        fill={ props.fill }
        hoverFill={ props.hoverFill }
      >
        { icon }
      </IconSvgStyled>
    </IconDivStyled>
  );
};

export { Icon };
