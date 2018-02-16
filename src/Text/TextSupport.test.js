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
    const props = { theme: { textHeading: 'black' }, priority: 'h200' };
    const result = getTextStyleSupport(props);
    const containsDisplayBlock = result.some(str =>
      str.includes('display: block;'),
    );
    const containsTextTransform = result.some(str =>
      str.includes('text-transform: uppercase;'),
    );
    expect(containsDisplayBlock).toBeTruthy();
    expect(containsTextTransform).toBeTruthy();
  });
  it('getTextPropSupport: functions correctly with subtitle prop set', () => {
    const props = {
      theme: { textSubtitle: 'black' },
      subtitle: true,
      children: 'some child',
    };
    const result = getTextPropSupport(props);
    expect(result.children).toBe('some child');
  });
  it('getTextPropSupport: functions correctly with multiple children', () => {
    const props = {
      theme: { textSubtitle: 'black' },
      subtitle: true,
      children: ['childA', 'childB'],
    };
    const result = getTextPropSupport(props);
    expect(result.children[0]).toBe('childA');
    expect(result.children[1]).toBe('childB');
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
});
