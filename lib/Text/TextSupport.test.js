'use strict';

var _TextSupport = require('./TextSupport');

describe('TextSupport', function () {
  it('getTextStyleSupport: functions correctly with body-based prop set', function () {
    var props = { theme: { textBody: 'black' }, priority: 'b150' };
    var result = (0, _TextSupport.getTextStyleSupport)(props);
    var containsDisplayBlock = result.some(function (str) {
      return str.includes('display: block;');
    });
    expect(containsDisplayBlock).toBeFalsy();
  });
  it('getTextStyleSupport: functions correctly with heading-based prop set', function () {
    var props = { theme: { textHeading: 'black' }, priority: 'h200' };
    var result = (0, _TextSupport.getTextStyleSupport)(props);
    var containsDisplayBlock = result.some(function (str) {
      return str.includes('display: block;');
    });
    var containsTextTransform = result.some(function (str) {
      return str.includes('text-transform: uppercase;');
    });
    expect(containsDisplayBlock).toBeTruthy();
    expect(containsTextTransform).toBeTruthy();
  });
  it('getTextPropSupport: functions correctly with subtitle prop set', function () {
    var props = {
      theme: { textSubtitle: 'black' },
      subtitle: true,
      children: 'some child'
    };
    var result = (0, _TextSupport.getTextPropSupport)(props);
    expect(result.children).toBe('some child');
  });
  it('getTextPropSupport: functions correctly with multiple children', function () {
    var props = {
      theme: { textSubtitle: 'black' },
      subtitle: true,
      children: ['childA', 'childB']
    };
    var result = (0, _TextSupport.getTextPropSupport)(props);
    expect(result.children[0]).toBe('childA');
    expect(result.children[1]).toBe('childB');
  });
  it('getTextPropSupport: functions correctly with color prop set', function () {
    var props = {
      theme: { textSubtitle: 'black' },
      children: ['childA', 'childB'],
      color: 'red'
    };
    var result = (0, _TextSupport.getTextStyleSupport)(props);
    var containsCorrectColor = result.some(function (str) {
      return str.includes('red');
    });
    expect(containsCorrectColor).toBeTruthy();
  });
});