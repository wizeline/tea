// @flow

import React from 'react';
import SVGIcon from '../src/icons/SVGIcon';

const SVGIconRow = ({ name }: { name: string }) => (
  <tr>
    <td className="border-cell">
      <SVGIcon name={name} />
    </td>
    <td>
      <SVGIcon name={name} xlarge />
    </td>
    <td>
      <SVGIcon name={name} large />
    </td>
    <td>
      <SVGIcon name={name} medium />
    </td>
    <td>
      <SVGIcon name={name} small />
    </td>
    <td>
      <SVGIcon name={name} xsmall />
    </td>
    <td className="border-cell">
      <SVGIcon name={name} size="invalid-size" />
    </td>
    <td className="border-cell">{name}</td>
  </tr>
);

export default SVGIconRow;
