// @flow

import React from 'react';
import Icon from '../../icons/Icon';
import inputTypes from './InputConstants';
import {
  ErrorLabelStyled,
  InputContainer,
  LabelStyled,
} from './InputLabelStyled';
import { ErrorInputStyled, InputStyled } from './InputStyled';
import type { InputProps, InputLabelProps } from './InputTypes';

const InputWithLabels = ({
  children,
  error,
  label,
  errorMessage,
}: InputLabelProps) => (
  <InputContainer>
    <LabelStyled>{label}</LabelStyled>
    {children}
    <ErrorLabelStyled error={error}>{errorMessage}</ErrorLabelStyled>
  </InputContainer>
);

const Input = (props: InputProps) => {
  const { error, label, errorMessage, onChange, type, readOnly, icon } = props;
  const typeStr =
    type && type === inputTypes.PASSWORD
      ? inputTypes.PASSWORD
      : inputTypes.TEXT;
  const FinalInput = error ? ErrorInputStyled : InputStyled;
  return (
    <InputWithLabels error={error} label={label} errorMessage={errorMessage}>
      <FinalInput
        {...props}
        onchange={onChange}
        type={typeStr}
        readonly={readOnly}
      />
      <Icon xsmall name={icon} />
    </InputWithLabels>
  );
};

export default Input;
