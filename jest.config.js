// @flow

module.exports = {
  browser: true,
  setupFiles: ['./jest.setup.js'],
  setupTestFrameworkScriptFile: './jest/setupTest.js',
  verbose: true,
  testMatch: ['**/*.test.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  coverageThreshold: {
    global: {
      statements: 99,
      branches: 95,
      functions: 95,
      lines: 99,
    },
  },
};
