var cov_hp4auldtb = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-inside-src\\src\\ErrorBoundary.test.js";
  var hash = "75d728a5c46a3b768bd82ed583bbcfedcba89dac";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-inside-src\\src\\ErrorBoundary.test.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 18,
          column: 2
        }
      },
      "1": {
        start: {
          line: 8,
          column: 25
        },
        end: {
          line: 8,
          column: 40
        }
      },
      "2": {
        start: {
          line: 8,
          column: 31
        },
        end: {
          line: 8,
          column: 40
        }
      },
      "3": {
        start: {
          line: 9,
          column: 26
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "4": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 73
        }
      },
      "5": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 73
          },
          end: {
            line: 7,
            column: 74
          }
        },
        loc: {
          start: {
            line: 7,
            column: 79
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 25
          },
          end: {
            line: 8,
            column: 26
          }
        },
        loc: {
          start: {
            line: 8,
            column: 31
          },
          end: {
            line: 8,
            column: 40
          }
        },
        line: 8
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "75d728a5c46a3b768bd82ed583bbcfedcba89dac"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import '@testing-library/jest-dom/extend-expect';
cov_hp4auldtb.s[0]++;
test('shlould render fallback page when react take undefined as a node', () => {
  cov_hp4auldtb.f[0]++;
  cov_hp4auldtb.s[1]++;

  const WrongComponent = () => {
    cov_hp4auldtb.f[1]++;
    cov_hp4auldtb.s[2]++;
    return undefined;
  };

  const {
    getByTestId
  } = (cov_hp4auldtb.s[3]++, render(<ErrorBoundary>
      <WrongComponent />
    </ErrorBoundary>));
  cov_hp4auldtb.s[4]++;
  expect(getByTestId('error-boundary-fallback-component')).not.toBeNull();
  cov_hp4auldtb.s[5]++;
  expect(getByTestId('error-boundary-fallback-component')).toHaveTextContent('Something Error Ooccurring');
});