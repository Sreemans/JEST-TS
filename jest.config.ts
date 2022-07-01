import { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
};
module.exports = config;

// {

//     testRegex: "(/__test__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
//     moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   };
