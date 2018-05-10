// @flow

import React from 'react';
import { ErrorInputStyled, InputStyled } from './InputStyled';
import type { InputProps, InputLabelProps } from './InputTypes';
import { LabelStyled, ErrorLabelStyled } from './InputLabelStyled';
import inputTypes from './InputConstants';

const InputWithLabels = ({
  children,
  error,
  label,
  errorMessage,
}: InputLabelProps) => (
  <div>
    <LabelStyled>{label}</LabelStyled>
    {children}
    <ErrorLabelStyled error={error}>{errorMessage}</ErrorLabelStyled>
  </div>
);

const Input = (props: InputProps) => {
  const { error, label, errorMessage, onChange, type, readOnly } = props;
  const typeStr =
    type && type === inputTypes.PASSWORD
      ? inputTypes.PASSWORD
      : inputTypes.TEXT;
  return error ? (
    <InputWithLabels error label={label} errorMessage={errorMessage}>
      <ErrorInputStyled
        {...props}
        onchange={onChange}
        type={typeStr}
        readonly={readOnly}
      />
    </InputWithLabels>
  ) : (
    <InputWithLabels label={label} errorMessage={errorMessage}>
      <InputStyled
        {...props}
        onchange={onChange}
        type={typeStr}
        readonly={readOnly}
      />
    </InputWithLabels>
  );
};

export default Input;
