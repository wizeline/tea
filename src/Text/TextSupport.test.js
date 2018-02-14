import { getPropSupport, getStyleSupport } from './TextSupport';

describe('TextSupport', () => {
  it('getStyleSupport: functions correctly with body-based prop set', () => {
    const props = { theme: { textBody: 'black' }, priority: 'b150' };
    const result = getStyleSupport(props);
    const containsDisplayBlock = result.some(str =>
      str.includes('display: block;'),
    );
    expect(containsDisplayBlock).toBeFalsy();
  });
  it('getStyleSupport: functions correctly with heading-based prop set', () => {
    const props = { theme: { textHeading: 'black' }, priority: 'h300' };
    const result = getStyleSupport(props);
    const containsDisplayBlock = result.some(str =>
      str.includes('display: block;'),
    );
    expect(containsDisplayBlock).toBeTruthy();
  });
  it('getPropSupport: functions correctly with h200 prop set', () => {
    const props = {
      theme: { textHeading: 'black' },
      h200: true,
      children: 'some child',
    };
    const result = getPropSupport(props);
    expect(result.children).toBe('SOME CHILD');
  });
  it('getPropSupport: functions correctly with subtitle prop set', () => {
    const props = {
      theme: { textSubtitle: 'black' },
      subtitle: true,
      children: ['childA', 'childB'],
    };
    const result = getPropSupport(props);
    expect(result.children[0]).toBe('CHILDA');
    expect(result.children[1]).toBe('CHILDB');
  });
  it('getPropSupport: functions correctly with color prop set', () => {
    const props = {
      theme: { textSubtitle: 'black' },
      children: ['childA', 'childB'],
      color: 'red',
      isLink: true,
    };
    const result = getStyleSupport(props);
    const containsCorrectColor = result.some(str => str.includes('red'));
    expect(containsCorrectColor).toBeTruthy();
  });
  it('getPropSupport: functions correctly with color prop set', () => {
    const props = {
      theme: { textSubtitle: 'black', textLink: 'yellow' },
      children: ['childA', 'childB'],
      isLink: true,
    };
    const result = getStyleSupport(props);
    const containsCorrectColor = result.some(str => str.includes('yellow'));
    expect(containsCorrectColor).toBeTruthy();
  });
});
