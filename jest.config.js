const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // testEnvironment: 'jest-environment-jsdom',
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json',
    },
  },
}

module.exports = createJestConfig(customJestConfig)
