// @flow

const Transitions = {
  easeOut(prop?: string) {
    const property = prop || 'all';
    return `${property} 350ms cubic-bezier(0.23, 1, 0.32, 1) 0ms`;
  },
};

export default Transitions;
