export default props => {
  const { primary, secondary, destructive } = props;

  if (primary) {
    return 'primary';
  }

  if (secondary) {
    return 'secondary';
  }

  if (destructive) {
    return 'destructive';
  }

  return 'secondary';
};
