const config = {
  preset: "ts-jest",
  coveragePathIgnorePatterns: ["/node_modules/", "/dist"],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 50,
      lines: 90,
      statements: 90,
    },
  },
};

export default config;
