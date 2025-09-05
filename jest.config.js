export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(test).[jt]s?(x)"
  ],
};
