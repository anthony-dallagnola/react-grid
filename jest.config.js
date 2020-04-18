module.exports = {
  // verbose to spot errors
  verbose: true,
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'scss',
  ],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.scss$': 'sass-jest',
  },
  testRegex: '/__tests__/.*\\.(ts|tsx|js|scss)$',
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
};
