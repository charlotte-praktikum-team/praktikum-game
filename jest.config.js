module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.{js|ts|tsx}?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
    '\\.css?$': 'identity-obj-proxy',
    '\\.svg': "<rootDir>/src/tests/svg.js"
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/jest-setup.js']
};
