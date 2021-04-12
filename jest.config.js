module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    },
    verbose: true,
  moduleNameMapper: {
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{tsx,js,jsx,mjs}'],
  coverageReporters: ['lcov', 'text-summary'],
  setupFiles: ['<rootDir>/src/tests/common/jest-init.ts']
}