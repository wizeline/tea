'use strict';

var _LinkSupport = require('./LinkSupport');

describe('LinkSupport', function () {
  it('getLinkPropSupport Defined priority boolean, undefined props.theme.textLink', function () {
    var childrenString = 'hello';
    var props = {
      href: 'http://wizeline.com/',
      b150: true,
      children: childrenString
    };

    var _getLinkPropSupport = (0, _LinkSupport.getLinkPropSupport)(props),
        children = _getLinkPropSupport.children,
        linkAnchorStyledProps = _getLinkPropSupport.linkAnchorStyledProps;

    expect(linkAnchorStyledProps.href).toBeTruthy();
    expect(linkAnchorStyledProps.priority).toBe('b150');
    expect(children).toBe(childrenString);
  });
  it('getLinkPropSupport: Undefined priority boolean, defined props.theme.textLink', function () {
    var childrenString = 'hello';
    var props = {
      href: 'http://wizeline.com/',
      b500: true,
      children: childrenString,
      theme: {
        textLink: 'yellow'
      }
    };

    var _getLinkPropSupport2 = (0, _LinkSupport.getLinkPropSupport)(props),
        children = _getLinkPropSupport2.children,
        linkAnchorStyledProps = _getLinkPropSupport2.linkAnchorStyledProps;

    expect(children).toBe(childrenString);
    expect(linkAnchorStyledProps.priority).toBe('b100');
    expect(linkAnchorStyledProps.href).toBeTruthy();
  });
  it('getLinkStyleSupport: Undefined props.theme.textLink', function () {
    var childrenString = 'hello';
    var props = {
      href: 'http://wizeline.com/',
      b500: true,
      children: childrenString
    };
    var css = (0, _LinkSupport.getLinkStyleSupport)(props);
    expect(css).toBeTruthy();
  });
  it('getLinkStyleSupport: Defined props.theme.textLink', function () {
    var childrenString = 'hello';
    var props = {
      href: 'http://wizeline.com/',
      b500: true,
      children: childrenString,
      theme: {
        textLink: 'yellow'
      }
    };
    var css = (0, _LinkSupport.getLinkStyleSupport)(props);
    var containsYellow = css.find(function (str) {
      return String(str).includes('yellow');
    });
    expect(containsYellow).toBeTruthy();
  });
});