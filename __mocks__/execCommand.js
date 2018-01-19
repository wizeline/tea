// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

const execCommand = jest.fn();
global.document.execCommand = execCommand;
