export default props => {
  const { primary, info, warning, negative, positive } = props;

  if (primary) {
    return 'primary';
  }

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

  return 'regular';
};
