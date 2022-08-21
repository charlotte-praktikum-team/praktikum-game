module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.{ts|tsx}?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '\\.css?$': 'identity-obj-proxy'
  },
};
