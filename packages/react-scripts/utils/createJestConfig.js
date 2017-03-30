/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

// Note: this file does not exist after ejecting.

const fs = require('fs');
const paths = require('../config/paths');
const path = require('path');

module.exports = (resolve, rootDir, isEjecting) => {
  // Use this instead of `paths.testsSetup` to avoid putting
  // an absolute filename into configuration after ejecting.
  const setupTestsFile = fs.existsSync(paths.testsSetup) ? '<rootDir>/src/setupTests.js' : undefined;

  const compilerOptions = require(path.resolve(paths.appTsConfig)).compilerOptions;
  // Jest gives `SyntaxError: Unexpected token import` error when ES6 module are emitted
  compilerOptions.module = "commonjs";
  // Expected Babel transformer to convert jsx to js
  // but Jest gives `SyntaxError: Unexpected token <` error when set to preserve
  compilerOptions.jsx = "react";

  // TODO: I don't know if it's safe or not to just use / as path separator
  // in Jest configs. We need help from somebody with Windows to determine this.
  const config = {
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
    moduleFileExtensions: ['jsx', 'js', 'json', 'ts', 'tsx'],
    setupTestFrameworkScriptFile: setupTestsFile,
    testPathIgnorePatterns: [
      '<rootDir>[/\\\\](build|docs|node_modules|scripts)[/\\\\]'
    ],
    testEnvironment: 'node',
    testRegex: "(/__tests__/.*|\.(test|spec))\.(ts|tsx|js|jsx)$",
    testURL: 'http://localhost',
    transform: {
      '^.+\\.(js|jsx)$': isEjecting ?
        '<rootDir>/node_modules/babel-jest'
        : resolve('config/jest/babelTransform.js'),
      '^.+\\.(ts|tsx)$': isEjecting ?
        '<rootDir>/config/jest/tsTransform.js'
        : resolve('config/jest/tsTransform.js'),
      '^.+\\.css$': resolve('config/jest/cssTransform.js'),
      '^(?!.*\\.(js|jsx|css|json)$)': resolve('config/jest/fileTransform.js'),
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$'
    ],
    moduleNameMapper: {
      '^react-native$': 'react-native-web'
    },
    testResultsProcessor: require.resolve("ts-jest/coverageprocessor"),
    globals: {
      "__TS_CONFIG__": compilerOptions
    }
  };
  if (rootDir) {
    config.rootDir = rootDir;
  }
  return config;
};
