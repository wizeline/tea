export const ROUND = 'round';
export const SQUARE = 'square';

export default props => {
  const { round, square } = props;

  if (square) {
    return SQUARE;
  }

  if (round) {
    return ROUND;
  }
};
