// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });
