// @flow

import { lispToCamelCase } from '../../../utils';

import addItem from './add-item';
import addPeople from './add-people';
import arrowDown from './arrow-down';
import bell from './bell';
import book from './book';
import building from './building';
import calendar from './calendar';
import check from './check';
import creditCard from './credit-card';
import cross from './cross';
import dotsH from './dots-h';
import duplicate from './duplicate';
import flag from './flag';
import heart from './heart';
import info from './info';
import lock from './lock';
import magnifier from './magnifier';
import missingViewBox from './missingViewBox';
import pencil from './pencil';
import people from './people';
import plus from './plus';
import trash from './trash';

const data = {
  addItem,
  addPeople,
  arrowDown,
  bell,
  book,
  building,
  calendar,
  check,
  creditCard,
  cross,
  dotsH,
  duplicate,
  flag,
  heart,
  info,
  lock,
  magnifier,
  missingViewBox,
  pencil,
  people,
  plus,
  trash,
};

const getSVG = (name: string) =>
  name === undefined ? null : data[lispToCamelCase(name)];

export default getSVG;
