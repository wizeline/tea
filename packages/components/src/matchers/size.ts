function sizeMatcher(props) {
  const { small, medium, large, xlarge } = props;

  if (small) {
    return 'small';
  }

  if (medium) {
    return 'medium';
  }

  if (large) {
    return 'large';
  }

  if (xlarge) {
    return 'xlarge';
  }

  return 'base';
}

export default sizeMatcher;
