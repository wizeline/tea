import { Children, cloneElement } from 'react';

import prepend from 'ramda/src/prepend';
import converge from 'ramda/src/converge';
import compose from 'ramda/src/compose';
import head from 'ramda/src/head';
import tail from 'ramda/src/tail';
import map from 'ramda/src/map';

const addStyleToSiblings = (sibblingStyle, children) => {
  const mergeStyles = ({ style }) => ({ ...style, ...sibblingStyle });
  const cloneWithStyle = (element) =>
    cloneElement(element, { style: mergeStyles(element.props) });
  const addCustomStyle = compose(map(cloneWithStyle), tail);
  const styleSiblings = compose(
    converge(prepend, [head, addCustomStyle]),
    Children.toArray
  );

  return styleSiblings(children);
};

const Transitions = {
  easeOut: function(prop) {
    const property = prop || 'all';
    return property + ' 350ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
  },
};

// We can actually use this for vertical offset, too using transformY if we want,
// instead of a CSS style using 'top' etc.
// This function will never be called without arguments since it's only used here.
// If exported elsewhere, default arguments will be needed and thus tests for them.
function generateCssTransform(rotate, scale) {
  let rotateSpec, scaleSpec, translateSpec;
  if (rotate) {
    rotateSpec = 'rotate(-20deg)';
    translateSpec = 'translateX(-10%)'; // the rotation creates an apparent translation (math thing).
  }
  if (scale !== 1) {
    scaleSpec = `scale(${scale},${scale})`;
  }
  const transform = [rotateSpec, scaleSpec, translateSpec].join(' ').trim();

  if (!transform) return {};

  return {
    WebkitTransform: transform,
    MsTransform: transform,
    transform: transform,
  };
}

const truncateText = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

export { generateCssTransform, addStyleToSiblings, Transitions, truncateText };
