// @flow

import React from 'react';
import SVGIcon from '../src/icons/SVGIcon';

const SVGIconRow = ({ name }: { name: string }) => (
  <tr>
    <td className="border-cell">
      <SVGIcon name={name} />
    </td>
    <td className="border-cell">
      <SVGIcon name={name} size="xlarge" />
    </td>
    <td className="border-cell">
      <SVGIcon name={name} size="large" />
    </td>
    <td className="border-cell">
      <SVGIcon name={name} size="medium" />
    </td>
    <td className="border-cell">
      <SVGIcon name={name} size="small" />
    </td>
    <td className="border-cell">
      <SVGIcon name={name} size="xsmall" />
    </td>
    <td className="border-cell">
      <SVGIcon name={name} size="invalid-size" />
    </td>
    <td className="border-cell">{name}</td>
  </tr>
);

export default SVGIconRow;
