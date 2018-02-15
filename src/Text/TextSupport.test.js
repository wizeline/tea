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
    const props = { theme: { textHeading: 'black' }, priority: 'h200' };
    const result = getStyleSupport(props);
    const containsDisplayBlock = result.some(str =>
      str.includes('display: block;'),
    );
    const containsTextTransform = result.some(str =>
      str.includes('text-transform: uppercase;'),
    );
    expect(containsDisplayBlock).toBeTruthy();
    expect(containsTextTransform).toBeTruthy();
  });
  it('getPropSupport: functions correctly with h200 prop set', () => {
    const props = {
      theme: { textHeading: 'black' },
      h200: true,
      children: 'some child',
    };
    const result = getPropSupport(props);
    expect(result.children).toBe('some child');
  });
});
