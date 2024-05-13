export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": ['ts-jest', { diagnostics: { ignoreCodes: ['TS151001'] } }],
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js',
    }
  };