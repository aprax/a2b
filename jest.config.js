const config = {
  preset: "ts-jest",
  coveragePathIgnorePatterns: ["/node_modules/", "/dist"],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};

export default config;
