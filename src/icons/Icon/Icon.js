import React, { Component } from 'react';
import { getContainerSize } from '../../utils';
import { viewBox, preserveAspectRatio } from './Icon.constants.js';
import { IconDivStyled, IconSvgStyled, CircleIconStyled } from './Icon.styled.js';

const CircleIconWrapper = (props) => {
  const { background, children } = props;
  return (
    <CircleIconStyled background={ background } >{ children }</CircleIconStyled>
  );
};

const Icon = (props) => {
  const { icon, circle, background, ...otherProps } = props;
  const IconWithoutCircle = (
    <IconDivStyled
      size={ getContainerSize(otherProps) }
    >
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
  return (
    circle ?
      <CircleIconWrapper>{ IconWithoutCircle }</CircleIconWrapper> :
      IconWithoutCircle
  );
};

export { Icon };
