import { getLinkPropSupport, getLinkStyleSupport } from './LinkSupport';

describe('LinkSupport', () => {
  it('getLinkPropSupport Defined priority boolean, undefined props.theme.textLink', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
      b150: true,
      children: childrenString,
    };
    const { children, linkAnchorStyledProps } = getLinkPropSupport(props);
    expect(linkAnchorStyledProps.priority).toBe('b150');
    expect(children).toBe(childrenString);
  });
  it('getLinkPropSupport: Undefined priority boolean, defined props.theme.textLink', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
      b500: true,
      children: childrenString,
      theme: {
        textLink: 'yellow',
      },
    };
    const { children, linkAnchorStyledProps } = getLinkPropSupport(props);
    expect(children).toBe(childrenString);
    expect(linkAnchorStyledProps.priority).toBe('b100');
  });
  it('getLinkStyleSupport: Defined props.theme.textLink', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
      b500: true,
      children: childrenString,
      theme: {
        textLink: 'yellow',
      },
    };
    const css = getLinkStyleSupport(props);
    const containsYellow = css.find(str => String(str).includes('yellow'));
    expect(containsYellow).toBeTruthy();
  });
});
