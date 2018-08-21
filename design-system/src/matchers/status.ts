export const PRIMARY_STATUS = 'primary';
export const NEUTRAL_STATUS = 'neutral';
export const INFO_STATUS = 'info';
export const WARNING_STATUS = 'warning';
export const NEGATIVE_STATUS = 'negative';
export const POSITIVE_STATUS = 'positive';

export default props => {
  const { primary, info, warning, negative, positive, neutral } = props;

  // placeholder bc missing alias for primary color
  if (primary) {
    return PRIMARY_STATUS;
  }

  if (info) {
    return INFO_STATUS;
  }

  if (warning) {
    return WARNING_STATUS;
  }

  if (negative) {
    return NEGATIVE_STATUS;
  }

  if (positive) {
    return POSITIVE_STATUS;
  }

  if (neutral) {
    return NEUTRAL_STATUS;;
  }

  return '';
};
