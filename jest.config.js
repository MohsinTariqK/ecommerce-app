module.exports = {
  preset: "react-native",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  testPathIgnorePatterns: [
      "\\.snap$",
      "<rootDir>/node_modules/"
  ],
  moduleNameMapper: {
    "\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/image-mock.ts",
    "^@react-native-async-storage/async-storage$": "<rootDir>/__mocks__/@react-native-async-storage/async-storage.js",
    "react-native-gesture-handler": "<rootDir>/__mocks__/react-native-gesture-handler.js"
    }
};

// const { defaults: tsjPreset } = require("ts-jest/presets");

// module.exports = {
//   ...tsjPreset,
//   preset: "react-native",
//   transform: {
//     "^.+\\.jsx$": "babel-jest",
//     "^.+\\.tsx?$": [
//       "ts-jest",
//       {
//         tsconfig: "tsconfig.jest.json",
//       },
//     ],
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   moduleNameMapper: {
//     "\\.(png|jpg|ico|jpeg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/image-mock.ts",
//     "^@react-native-async-storage/async-storage$": "<rootDir>/__mocks__/async-storage.js"
//   }
// };


// module.exports = {
//     "preset": "react-native",
//     "moduleFileExtensions": [
//       "ts",
//       "tsx",
//       "js"
//     ],
//     "transform": {
//       "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
//       "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
//     },
//     "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
//     "testPathIgnorePatterns": [
//       "\\.snap$",
//       "<rootDir>/node_modules/"
//     ],
//     "cacheDirectory": ".jest/cache"
// }