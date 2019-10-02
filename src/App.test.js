var cov_v7cyzuql9 = function () {
  var path = "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-inside-src\\src\\App.test.js";
  var hash = "4a55f553baae486388eba563ace15e36f6f02bf1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\FSantoro\\WebstormProjects\\nyc-test-folder-inside-src\\src\\App.test.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 19,
          column: 2
        }
      },
      "2": {
        start: {
          line: 11,
          column: 14
        },
        end: {
          line: 11,
          column: 43
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "4": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 38
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 31
          },
          end: {
            line: 10,
            column: 32
          }
        },
        loc: {
          start: {
            line: 10,
            column: 37
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "4a55f553baae486388eba563ace15e36f6f02bf1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from 'muriatic';
const initialStore = (cov_v7cyzuql9.s[0]++, {
  todoList: []
});
cov_v7cyzuql9.s[1]++;
it('renders without crashing', () => {
  cov_v7cyzuql9.f[0]++;
  const div = (cov_v7cyzuql9.s[2]++, document.createElement('div'));
  cov_v7cyzuql9.s[3]++;
  ReactDOM.render(<Provider store={initialStore}>
      <App path="/" />
    </Provider>, div);
  cov_v7cyzuql9.s[4]++;
  ReactDOM.unmountComponentAtNode(div);
});