export const PRIMARY_SIGNIFICANCE = 'primary';
export const SECONDARY_SIGNIFICANCE = 'secondary';
export const DESTRUCTIVE_SIGNIFICANCE = 'destructive';

export default props => {
  const { primary, secondary, destructive } = props;

  if (primary) {
    return PRIMARY_SIGNIFICANCE;
  }

  if (secondary) {
    return SECONDARY_SIGNIFICANCE;
  }

  if (destructive) {
    return DESTRUCTIVE_SIGNIFICANCE;
  }

  return '';
};
