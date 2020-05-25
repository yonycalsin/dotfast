const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
   transform: {
      ...tsjPreset.transform,
   },
   preset: 'ts-jest',
   testEnvironment: 'node',
   moduleNameMapper: {
      // '^@App/(.*)$': '<rootDir>/src/$1',
      // '^lib/(.*)$': '<rootDir>/lib/$1',
   },
};
