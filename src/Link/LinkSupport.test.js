import getPropSupport from './LinkSupport';

describe('LinkSupport', () => {
  it('getPropSupport Defined priority boolean, undefined props.theme.textLink', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
      b100: true,
      children: childrenString,
    };
    const { children, textProps } = getPropSupport(props);
    expect(children).toBe(childrenString);
    expect(textProps.isLink).toBeTruthy();
    expect(textProps.b100).toBeTruthy();
    expect(textProps.color).toBeFalsy();
  });
  it('getPropSupport: Undefined priority boolean, defined props.theme.textLink', () => {
    const childrenString = 'hello';
    const props = {
      href: 'http://wizeline.com/',
      b500: true,
      children: childrenString,
      theme: {
        textLink: 'yellow',
      },
    };
    const { children, linkAnchorStyledProps, textProps } = getPropSupport(
      props,
    );
    expect(children).toBe(childrenString);
    expect(linkAnchorStyledProps.b500).toBeTruthy();
    expect(textProps.isLink).toBeTruthy();
    expect(textProps.b500).toBeFalsy();
    expect(textProps.color).toBe(props.theme.textLink);
  });
});
