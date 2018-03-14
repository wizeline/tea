// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import styled from 'styled-components';

const ButtonsStyled = styled.button`
  background-color: #50a5e7;
  border-radius: 0.1875rem;
  border: #50a5e7;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.03);
  color: white;
  display: flex;
  font-size: 14px;
  justify-content: center;
  min-height: 2rem;
  min-width: 6.25rem;
  outline: none;
  padding: 0 1rem;
  transition: background-color 0.1s;

  &:hover,
  &:focus {
    background-color: #4793cd;
  }
`;

export default ButtonsStyled;
