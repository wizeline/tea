function fontWeight(props) {
  const { semibold, bold } = props;

  if (semibold) {
    return 'semibold';
  }

  if (bold) {
    return 'bold';
  }

  return 'regular';
}

export default fontWeight;
