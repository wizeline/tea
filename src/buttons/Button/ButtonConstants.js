// @flow

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

export { sizesWithText, sizesWithoutText };
