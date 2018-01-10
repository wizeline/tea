// @flow

import palette from './palette';

const background = {
  buttonPrimary: palette.darkSkyBlue,
  buttonPrimaryHover: palette.dullBlue,
  buttonPrimaryDisabled: palette.paleGrey3,
  buttonSecondary: palette.white,
  buttonSecondaryHover: palette.white,
  buttonSecondaryDisabled: palette.white,
  buttonDestructive: palette.rosyPink,
  buttonDestructiveHover: palette.tomato,
  buttonDestructiveDisabled: palette.paleGrey3,
  input: palette.white,
  inputError: palette.white,
  inputDisabled: palette.paleGrey3,
  inputFocus: palette.white,
};

const text = {
  iconDefault: palette.white,
  iconDefaultHover: palette.white,
  iconDefaultInverse: palette.paleGrey3,
  iconDefaultInverseHover: palette.darkSkyBlue,
  buttonPrimary: palette.white,
  buttonPrimaryHover: palette.white,
  buttonPrimaryDisabled: palette.coolGrey,
  buttonSecondary: palette.charcoalGrey,
  buttonSecondaryHover: palette.charcoalGrey,
  buttonSecondaryDisabled: palette.silver,
  buttonDestructive: palette.white,
  buttonDestructiveHover: palette.white,
  buttonDestructiveDisabled: palette.coolGrey,
  buttonLink: palette.darkSkyBlue,
  buttonLinkHover: palette.darkSkyBlue,
  buttonLinkDisabled: palette.white,
  input: palette.charcoalGrey,
  inputPlaceholder: palette.coolGrey,
  inputDisabled: palette.coolGrey,
  inputFeedbackError: palette.tomato,
};

const border = {
  buttonSecondary: palette.coolGrey,
  buttonSecondaryHover: palette.darkSkyBlue,
  buttonSecondaryDisabled: palette.paleGrey3,
  buttonLink: palette.darkSkyBlue,
  buttonLinkHover: palette.dullBlue,
  buttonLinkDisabled: palette.paleGrey3,
  input: palette.paleGrey3,
  inputFocus: palette.darkSkyBlue,
  inputError: palette.rosyPink,
};

const shadowAlpha = {
  button: 0.03,
  buttonSmall: 0.1,
  buttonLarge: 0.03,
  buttonLargeInset: 0.08,
  buttonLargeInsetHover: 0.08,
  buttonIconOnlyLarge: 0.11,
};

export { background, text, border, shadowAlpha };
