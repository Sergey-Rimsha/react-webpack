/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules'],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  modulePaths: ['<rootDir>src'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/config/jest/mocks.js',
  },
};

export default config;
