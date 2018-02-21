import { lispToCamelCase } from './stringUtils';

describe('stringUtils', () => {
  it('lispToCamelCase functions correctly', () => {
    const lispy = 'hello-my-name-is';
    const camely = lispToCamelCase(lispy);
    expect(camely).toBe('helloMyNameIs');
  });
});
