// @flow

import type { Node } from 'react';

export type BaseInputProps = {
  autofocus: boolean,
  disabled: boolean,
  name: string,
  onChange: () => void,
  readOnly: boolean,
  required: boolean,
  type: string,
  value: string,
  theme: {
    borderInput: string,
    borderInputFocus: string,
    borderInputInvalid: string,
    borderSecondary: string,
    borderSecondaryDisabled: string,
    borderSecondaryHover: string,
    textBody: string,
    textDanger: string,
    textDangerDisabled: string,
    textDangerHover: string,
    textHeading: string,
    textIcon: string,
    textIconInvert: string,
    textInput: string,
    textInputFocus: string,
    textInputInvalid: string,
    textInputPlaceholder: string,
    textPrimary: string,
    textPrimaryDisabled: string,
    textPrimaryHover: string,
    textPrimaryInvert: string,
    textSecondary: string,
    textSecondaryDisabled: string,
    textSecondaryHover: string,
    textSubtitle: string,
  },
};

export type InputProps = BaseInputProps & {
  autocomplete: string,
  error: boolean,
  errorMessage: string,
  label: string,
  maxLenght: number,
  placeholder: string,
  size: number,
  icon: string,
};

export type InputLabelProps = {
  children: Node,
  error?: boolean,
  errorMessage?: string,
  label?: string,
};
