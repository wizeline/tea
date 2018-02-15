import { getTextPropSupport, getTextStyleSupport } from './TextSupport';

describe('TextSupport', () => {
  it('getTextStyleSupport: functions correctly with body-based prop set', () => {
    const props = { theme: { textBody: 'black' }, priority: 'b150' };
    const result = getTextStyleSupport(props);
    const containsDisplayBlock = result.some(str =>
      str.includes('display: block;'),
    );
    expect(containsDisplayBlock).toBeFalsy();
  });
  it('getTextStyleSupport: functions correctly with heading-based prop set', () => {
    const props = { theme: { textHeading: 'black' }, priority: 'h300' };
    const result = getTextStyleSupport(props);
    const containsDisplayBlock = result.some(str =>
      str.includes('display: block;'),
    );
    expect(containsDisplayBlock).toBeTruthy();
  });
  it('getTextPropSupport: functions correctly with h200 prop set', () => {
    const props = {
      theme: { textHeading: 'black' },
      h200: true,
      children: 'some child',
    };
    const result = getTextPropSupport(props);
    expect(result.children).toBe('SOME CHILD');
  });
  it('getTextPropSupport: functions correctly with subtitle prop set', () => {
    const props = {
      theme: { textSubtitle: 'black' },
      subtitle: true,
      children: ['childA', 'childB'],
    };
    const result = getTextPropSupport(props);
    expect(result.children[0]).toBe('CHILDA');
    expect(result.children[1]).toBe('CHILDB');
  });
  it('getTextPropSupport: functions correctly with color prop set', () => {
    const props = {
      theme: { textSubtitle: 'black' },
      children: ['childA', 'childB'],
      color: 'red',
    };
    const result = getTextStyleSupport(props);
    const containsCorrectColor = result.some(str => str.includes('red'));
    expect(containsCorrectColor).toBeTruthy();
  });
  it('getTextPropSupport: functions correctly with color prop set', () => {
    const props = {
      theme: { textSubtitle: 'black', textLink: 'yellow' },
      children: ['childA', 'childB'],
    };
    const result = getTextStyleSupport(props);
    const containsCorrectColor = result.some(str => str.includes('yellow'));
    expect(containsCorrectColor).toBeTruthy();
  });
});
