// @flow

import React from 'react';
import Icon from '../src/Icon';

const IconRow = ({ name }: { name: string }) => (
  <tr>
    <td>
      <Icon name={name} size="xlarge" />
    </td>
    <td>
      <Icon name={name} size="large" />
    </td>
    <td>
      <Icon name={name} size="medium" />
    </td>
    <td>
      <Icon name={name} size="small" />
    </td>
    <td>
      <Icon name={name} size="xsmall" />
    </td>
    <td>
      <Icon name={name} />
    </td>
    <td>{name}</td>
  </tr>
);

export default IconRow;
