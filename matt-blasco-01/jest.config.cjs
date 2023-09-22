module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', 
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    collectCoverage: true,
    coverageReporters: ['html', 'text-summary'],
    testMatch: ['**/__tests__/**/*.test.ts?(x)'],
};