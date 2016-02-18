'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.values = values;
exports.range = range;
exports.fragment = fragment;
exports.toLengthTree = toLengthTree;
exports.toPaths = toPaths;
exports.prependToPaths = prependToPaths;

var _falcorPathUtils = require('falcor-path-utils');

var _marked = [iterateTree].map(regeneratorRuntime.mark);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function values(obj) {
  if (!obj) {
    return [];
  }
  return Object.keys(obj).filter(function (key) {
    return key !== '$__path';
  }).map(function (key) {
    return obj[key];
  });
}

function range(from, to, obj) {
  if (!obj) {
    return new Error('obj cannot be falsy');
  }
  if (to < from) {
    return new Error('to cannot be greater than from');
  }
  var result = {};
  for (var i = from; i <= to; i++) {
    result[i] = obj;
  }
  return result;
}

function fragment(queries) {
  return (0, _falcorPathUtils.toTree)((0, _falcorPathUtils.toPaths)(queries));
}

function depthOf(obj) {
  var level = 1;
  for (var key in obj) {
    if (!obj.hasOwnProperty(key)) continue;
    if (obj[key] && obj[key].constructor === Object) {
      var depth = depthOf(obj[key]) + 1;
      level = Math.max(depth, level);
    }
  }
  return level;
}

function iterateTree(tree) {
  var key, value;
  return regeneratorRuntime.wrap(function iterateTree$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.t0 = regeneratorRuntime.keys(tree);

        case 1:
          if ((_context.t1 = _context.t0()).done) {
            _context.next = 9;
            break;
          }

          key = _context.t1.value;

          if (!tree.hasOwnProperty(key)) {
            _context.next = 7;
            break;
          }

          value = _defineProperty({}, key, tree[key]);
          _context.next = 7;
          return { value: value, length: depthOf(value) };

        case 7:
          _context.next = 1;
          break;

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

function toLengthTree(tree) {
  var result = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = iterateTree(tree)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _step.value;
      var _value2 = _step$value.value;
      var length = _step$value.length;

      if (!result[length]) {
        result[length] = {};
      }
      result[length] = _extends({}, result[length], _value2);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

function toPaths(tree) {
  return (0, _falcorPathUtils.toPaths)(toLengthTree(tree));
}

function prependToPaths(toPrepend, paths) {
  if (!toPrepend && !paths) {
    return new Error('arguments cannot be falsy');
  }
  if (toPrepend.constructor !== Array) {
    return new Error('argument must be an array which will be prepented to every path');
  }
  if (paths.constructor !== Array) {
    return new Error('paths must be an array');
  }
  var result = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = paths[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var path = _step2.value;

      result.push(toPrepend.concat(path));
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
}
//# sourceMappingURL=utils.js.map