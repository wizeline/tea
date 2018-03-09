// @flow

module.exports = {
  browser: true,
  setupFiles: ['./jest.setup.js'],
  setupTestFrameworkScriptFile: './jest/setupTest.js',
  verbose: true,
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib/'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(eot|woff|woff2|ttf|eot#[a-z]+)$': '<rootDir>/__mocks__/fontMock.js',
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
