export default {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  coverageThreshold: {
    global: {
      lines: 10,
      branch: 10
    }
  }
};
