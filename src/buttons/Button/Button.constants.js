import * as colors from '../../styles/themes/colors';

const priorityColors = {
  primary: {
    backgroundColor: colors.background.buttonPrimary,
    backgroundColorDisabled: colors.background.buttonPrimaryDisabled,
    backgroundColorHover: colors.background.buttonPrimaryHover,
    borderColor: colors.border.buttonPrimary,
    borderColorDisabled: colors.background.buttonPrimaryDisabled,
    borderColorHover: colors.border.buttonPrimaryHover,
    color: colors.text.buttonPrimary,
    colorDisabled: colors.text.buttonPrimaryDisabled,
    colorHover: colors.text.buttonPrimaryHover,
  },
  secondary: {
    backgroundColor: colors.background.buttonSecondary,
    backgroundColorDisabled: colors.background.buttonSecondaryDisabled,
    backgroundColorHover: colors.background.buttonSecondaryHover,
    borderColor: colors.border.buttonSecondary,
    borderColorDisabled: colors.background.buttonSecondaryDisabled,
    borderColorHover: colors.border.buttonSecondaryHover,
    color: colors.text.buttonSecondary,
    colorDisabled: colors.text.buttonSecondaryDisabled,
    colorHover: colors.text.buttonSecondaryHover,
  },
  destructive: {
    backgroundColor: colors.background.buttonDestructive,
    backgroundColorDisabled: colors.background.buttonDestructiveDisabled,
    backgroundColorHover: colors.background.buttonDestructiveHover,
    borderColor: colors.border.buttonDestructive,
    borderColorDisabled: colors.background.buttonDestructiveDisabled,
    borderColorHover: colors.border.buttonDestructiveHover,
    color: colors.text.buttonDestructive,
    colorDisabled: colors.text.buttonDestructiveDisabled,
    colorHover: colors.text.buttonDestructiveHover,
  },
};

const sizesWithText = {
  small: {
    borderRadius: 3,
    fontSize: 12,
    fontWeight: 600,
    height: 24,
    minWidth: 72,
  },
  medium: {
    borderRadius: 3,
    fontSize: 14,
    fontWeight: 600,
    height: 32,
    minWidth: 100,
  },
  large: {
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 600,
    height: 48,
    minWidth: 164,
  },
};

const sizesWithoutText = JSON.parse(JSON.stringify(sizesWithText));

sizesWithoutText.small.minWidth = 20;
sizesWithoutText.medium.minWidth = 36;
sizesWithoutText.large.minWidth = 48;

export {
  priorityColors,
  sizesWithText,
  sizesWithoutText,
};