// @flow

/* eslint flowtype-errors/enforce-min-coverage: 0 */

const { jest } = global;
const execCommand = jest.fn();
global.document.execCommand = execCommand;
