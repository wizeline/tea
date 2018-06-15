import { matches } from 'z';

const sizeMatcher = props =>
  matches(props)(
    (_ = { small: true }) => 'small',
    (_ = { medium: true }) => 'medium',
    (_ = { large: true }) => 'large',
    (_ = { xlarge: true }) => 'xlarge',
    _ => 'base',
  );

export default sizeMatcher;
