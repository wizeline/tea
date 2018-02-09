// @flow

import React from 'react';
import SVGIcon from '../src/icons/SVGIcon';

const SVGIconRow = ({ name }: { name: string }) => (
  <tr>
    <td>
      <SVGIcon name={name} />
    </td>
    <td>
      <SVGIcon name={name} size="xlarge" />
    </td>
    <td>
      <SVGIcon name={name} size="large" />
    </td>
    <td>
      <SVGIcon name={name} size="medium" />
    </td>
    <td>
      <SVGIcon name={name} size="small" />
    </td>
    <td>
      <SVGIcon name={name} size="xsmall" />
    </td>
    <td>
      <SVGIcon name={name} size="invalid-size" />
    </td>
    <td>{name}</td>
  </tr>
);

export default SVGIconRow;
