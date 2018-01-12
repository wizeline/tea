// @flow

module.exports = {
  browser: true,
  setupFiles: ['./jest.setup.js'],
  verbose: true,
  testMatch: ['**/.test.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  coverageThreshold: {
    global: {
      statements: 99,
      branches: 90,
      functions: 90,
      lines: 99,
    },
  },
};
