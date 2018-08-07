export default props => {
  const { info, warning, negative, positive } = props;

  if (info) {
    return 'info';
  }

  if (warning) {
    return 'warning';
  }

  if (negative) {
    return 'negative';
  }

  if (positive) {
    return 'positive';
  }

  return 'neutral';
};
