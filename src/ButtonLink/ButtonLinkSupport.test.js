import {
  getButtonLinkPropSupport,
  getButtonLinkStyleSupport,
} from './ButtonLinkSupport';

describe('ButtonLinkSupport', () => {
  it('getLinkPropSupport Defined priority boolean, undefined props.theme.textLink, defined color', () => {
    const childrenString = 'hello';
    const props = {
      b150: true,
      children: childrenString,
    };
    const { children, linkAnchorStyledProps } = getButtonLinkPropSupport(props);
    expect(linkAnchorStyledProps.priority).toBe('b150');
    expect(children).toBe(childrenString);
  });

  it('getLinkPropSupport: Undefined priority boolean, defined props.theme.textLink', () => {
    const childrenString = 'hello';
    const props = {
      b500: true,
      children: childrenString,
      theme: {
        textLink: 'yellow',
      },
    };
    const { children, linkAnchorStyledProps } = getButtonLinkPropSupport(props);
    expect(children).toBe(childrenString);
    expect(linkAnchorStyledProps.priority).toBe('b100');
  });

  it('getLinkStyleSupport: Defined color', () => {
    const childrenString = 'hello';
    const props = {
      b500: true,
      children: childrenString,
      color: 'red',
    };
    const css = getButtonLinkStyleSupport(props);
    const containsColor = css.find(str => String(str).includes('red'));
    expect(containsColor).toBeTruthy();
  });

  it('getLinkStyleSupport: defined props.theme.textLink', () => {
    const childrenString = 'hello';
    const props = {
      b500: true,
      children: childrenString,
      theme: {
        textLink: 'yellow',
      },
    };
    const css = getButtonLinkStyleSupport(props);
    const containsColor = css.find(str => String(str).includes('yellow'));
    expect(containsColor).toBeTruthy();
  });
});
