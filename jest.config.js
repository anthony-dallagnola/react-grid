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
    '\\.svg$': '<rootDir>/__mocks__/svgTransformer.ts',
  },
  testRegex: '/__tests__/.*\\.(ts|tsx|js|scss)$',
  setupFilesAfterEnv: ['<rootDir>src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
