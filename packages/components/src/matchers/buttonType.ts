import { matches } from 'z';

export default props =>
  matches(props)(
    (_ = { primary: true }) => 'primary',
    (_ = { secondary: true }) => 'secondary',
    (_ = { destructive: true }) => 'destructive',
    _ => 'secondary',
  );
