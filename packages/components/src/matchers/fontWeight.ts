import { matches } from 'z';

type Props = {
  semibold?: boolean;
  bold?: boolean;
};

export default (props: Props): String =>
  matches(props)(
    (_ = { semibold: true }) => 'semibold',
    (_ = { bold: true }) => 'bold',
    _ => 'regular',
  );
