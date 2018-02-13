// @flow

import pick from 'ramda/src/pick';
import isEmpty from 'ramda/src/isEmpty';
import omit from 'ramda/src/omit';
import type { LinkProps } from './LinkTypes';

const supportedPriorities = ['b50', 'b100', 'b150', 'h300'];
const defaultPriority = 'b100';

const getPrioritySupport = (props: LinkProps) => {
  const priorities = pick(supportedPriorities, props);
  const priority = isEmpty(priorities)
    ? { [defaultPriority]: true }
    : priorities;
  return priority;
};

const getPropSupport = (props: LinkProps) => {
  const { children, href, ...otherProps } = props;
  const priority = getPrioritySupport(props);
  const linkAnchorProps = omit(supportedPriorities, otherProps);
  const linkAnchorStyledProps = { href, ...linkAnchorProps };
  const textProps = {
    ...priority,
    isLink: true,
    color: props.theme ? props.theme.textLink : undefined,
  };
  return {
    children,
    linkAnchorStyledProps,
    textProps,
  };
};

export default getPropSupport;
