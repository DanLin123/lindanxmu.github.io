"bundle";
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function () {/* empty */};
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.iter-step.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iobject.js', ['npm:core-js@1.2.7/library/modules/$.cof.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.to-iobject.js', ['npm:core-js@1.2.7/library/modules/$.iobject.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('npm:core-js@1.2.7/library/modules/$.iobject.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (it) {
    return IObject(defined(it));
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.array.iterator.js', ['npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js', 'npm:core-js@1.2.7/library/modules/$.iter-step.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.to-iobject.js', 'npm:core-js@1.2.7/library/modules/$.iter-define.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('npm:core-js@1.2.7/library/modules/$.add-to-unscopables.js'),
      step = $__require('npm:core-js@1.2.7/library/modules/$.iter-step.js'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
      toIObject = $__require('npm:core-js@1.2.7/library/modules/$.to-iobject.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.iter-define.js')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/web.dom.iterable.js', ['npm:core-js@1.2.7/library/modules/es6.array.iterator.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/es6.array.iterator.js');
  var Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.to-integer.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.defined.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.string-at.js', ['npm:core-js@1.2.7/library/modules/$.to-integer.js', 'npm:core-js@1.2.7/library/modules/$.defined.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('npm:core-js@1.2.7/library/modules/$.to-integer.js'),
      defined = $__require('npm:core-js@1.2.7/library/modules/$.defined.js');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.library.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.a-function.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.ctx.js', ['npm:core-js@1.2.7/library/modules/$.a-function.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('npm:core-js@1.2.7/library/modules/$.a-function.js');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.export.js', ['npm:core-js@1.2.7/library/modules/$.global.js', 'npm:core-js@1.2.7/library/modules/$.core.js', 'npm:core-js@1.2.7/library/modules/$.ctx.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
      core = $__require('npm:core-js@1.2.7/library/modules/$.core.js'),
      ctx = $__require('npm:core-js@1.2.7/library/modules/$.ctx.js'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.redefine.js', ['npm:core-js@1.2.7/library/modules/$.hide.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.hide.js');
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.property-desc.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.fails.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.descriptors.js', ['npm:core-js@1.2.7/library/modules/$.fails.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('npm:core-js@1.2.7/library/modules/$.fails.js')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.hide.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.descriptors.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      createDesc = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.descriptors.js') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-create.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.property-desc.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('npm:core-js@1.2.7/library/modules/$.js'),
      descriptor = $__require('npm:core-js@1.2.7/library/modules/$.property-desc.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      IteratorPrototype = {};
  $__require('npm:core-js@1.2.7/library/modules/$.hide.js')(IteratorPrototype, $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.has.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', ['npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('npm:core-js@1.2.7/library/modules/$.js').setDesc,
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.iter-define.js', ['npm:core-js@1.2.7/library/modules/$.library.js', 'npm:core-js@1.2.7/library/modules/$.export.js', 'npm:core-js@1.2.7/library/modules/$.redefine.js', 'npm:core-js@1.2.7/library/modules/$.hide.js', 'npm:core-js@1.2.7/library/modules/$.has.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.iter-create.js', 'npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js', 'npm:core-js@1.2.7/library/modules/$.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('npm:core-js@1.2.7/library/modules/$.library.js'),
      $export = $__require('npm:core-js@1.2.7/library/modules/$.export.js'),
      redefine = $__require('npm:core-js@1.2.7/library/modules/$.redefine.js'),
      hide = $__require('npm:core-js@1.2.7/library/modules/$.hide.js'),
      has = $__require('npm:core-js@1.2.7/library/modules/$.has.js'),
      Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js'),
      $iterCreate = $__require('npm:core-js@1.2.7/library/modules/$.iter-create.js'),
      setToStringTag = $__require('npm:core-js@1.2.7/library/modules/$.set-to-string-tag.js'),
      getProto = $__require('npm:core-js@1.2.7/library/modules/$.js').getProto,
      ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/es6.string.iterator.js', ['npm:core-js@1.2.7/library/modules/$.string-at.js', 'npm:core-js@1.2.7/library/modules/$.iter-define.js'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('npm:core-js@1.2.7/library/modules/$.string-at.js')(true);
  $__require('npm:core-js@1.2.7/library/modules/$.iter-define.js')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.is-object.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.an-object.js', ['npm:core-js@1.2.7/library/modules/$.is-object.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('npm:core-js@1.2.7/library/modules/$.is-object.js');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.cof.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.classof.js', ['npm:core-js@1.2.7/library/modules/$.cof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('npm:core-js@1.2.7/library/modules/$.cof.js'),
        TAG = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.shared.js', ['npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('npm:core-js@1.2.7/library/modules/$.global.js'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
    return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.uid.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.global.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.wks.js', ['npm:core-js@1.2.7/library/modules/$.shared.js', 'npm:core-js@1.2.7/library/modules/$.uid.js', 'npm:core-js@1.2.7/library/modules/$.global.js'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('npm:core-js@1.2.7/library/modules/$.shared.js')('wks'),
        uid = $__require('npm:core-js@1.2.7/library/modules/$.uid.js'),
        Symbol = $__require('npm:core-js@1.2.7/library/modules/$.global.js').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
    return module.exports;
});
System.registerDynamic("npm:core-js@1.2.7/library/modules/$.iterators.js", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', ['npm:core-js@1.2.7/library/modules/$.classof.js', 'npm:core-js@1.2.7/library/modules/$.wks.js', 'npm:core-js@1.2.7/library/modules/$.iterators.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('npm:core-js@1.2.7/library/modules/$.classof.js'),
        ITERATOR = $__require('npm:core-js@1.2.7/library/modules/$.wks.js')('iterator'),
        Iterators = $__require('npm:core-js@1.2.7/library/modules/$.iterators.js');
    module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/$.core.js', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/modules/core.get-iterator.js', ['npm:core-js@1.2.7/library/modules/$.an-object.js', 'npm:core-js@1.2.7/library/modules/core.get-iterator-method.js', 'npm:core-js@1.2.7/library/modules/$.core.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('npm:core-js@1.2.7/library/modules/$.an-object.js'),
      get = $__require('npm:core-js@1.2.7/library/modules/core.get-iterator-method.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/$.core.js').getIterator = function (it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  return module.exports;
});
System.registerDynamic('npm:core-js@1.2.7/library/fn/get-iterator.js', ['npm:core-js@1.2.7/library/modules/web.dom.iterable.js', 'npm:core-js@1.2.7/library/modules/es6.string.iterator.js', 'npm:core-js@1.2.7/library/modules/core.get-iterator.js'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('npm:core-js@1.2.7/library/modules/web.dom.iterable.js');
  $__require('npm:core-js@1.2.7/library/modules/es6.string.iterator.js');
  module.exports = $__require('npm:core-js@1.2.7/library/modules/core.get-iterator.js');
  return module.exports;
});
System.registerDynamic("npm:babel-runtime@5.8.38/core-js/get-iterator.js", ["npm:core-js@1.2.7/library/fn/get-iterator.js"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("npm:core-js@1.2.7/library/fn/get-iterator.js"), __esModule: true };
  return module.exports;
});
System.registerDynamic("github:knockout/knockout@3.4.1/dist/knockout.debug.js", [], false, function ($__require, $__exports, $__module) {
    var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, "ko", null);

    (function ($__global) {
        /* */
        "format global";
        "exports ko";
        /*!
         * Knockout JavaScript library v3.4.1
         * (c) The Knockout.js team - http://knockoutjs.com/
         * License: MIT (http://www.opensource.org/licenses/mit-license.php)
         */

        (function () {
            var DEBUG = true;
            (function (undefined) {
                // (0, eval)('this') is a robust way of getting a reference to the global object
                // For details, see http://stackoverflow.com/questions/14119988/return-this-0-evalthis/14120023#14120023
                var window = this || (0, eval)('this'),
                    document = window['document'],
                    navigator = window['navigator'],
                    jQueryInstance = window["jQuery"],
                    JSON = window["JSON"];
                (function (factory) {
                    // Support three module loading scenarios
                    if (typeof define === 'function' && define['amd']) {
                        // [1] AMD anonymous module
                        define(['exports', 'require'], factory);
                    } else if (typeof exports === 'object' && typeof module === 'object') {
                        // [2] CommonJS/Node.js
                        factory(module['exports'] || exports); // module.exports is for Node.js
                    } else {
                        // [3] No module loader (plain <script> tag) - put directly in global namespace
                        factory(window['ko'] = {});
                    }
                })(function (koExports, amdRequire) {
                    // Internally, all KO objects are attached to koExports (even the non-exported ones whose names will be minified by the closure compiler).
                    // In the future, the following "ko" variable may be made distinct from "koExports" so that private objects are not externally reachable.
                    var ko = typeof koExports !== 'undefined' ? koExports : {};
                    // Google Closure Compiler helpers (used only to make the minified file smaller)
                    ko.exportSymbol = function (koPath, object) {
                        var tokens = koPath.split(".");

                        // In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
                        // At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
                        var target = ko;

                        for (var i = 0; i < tokens.length - 1; i++) target = target[tokens[i]];
                        target[tokens[tokens.length - 1]] = object;
                    };
                    ko.exportProperty = function (owner, publicName, object) {
                        owner[publicName] = object;
                    };
                    ko.version = "3.4.1";

                    ko.exportSymbol('version', ko.version);
                    // For any options that may affect various areas of Knockout and aren't directly associated with data binding.
                    ko.options = {
                        'deferUpdates': false,
                        'useOnlyNativeEvents': false
                    };

                    //ko.exportSymbol('options', ko.options);   // 'options' isn't minified
                    ko.utils = function () {
                        function objectForEach(obj, action) {
                            for (var prop in obj) {
                                if (obj.hasOwnProperty(prop)) {
                                    action(prop, obj[prop]);
                                }
                            }
                        }

                        function extend(target, source) {
                            if (source) {
                                for (var prop in source) {
                                    if (source.hasOwnProperty(prop)) {
                                        target[prop] = source[prop];
                                    }
                                }
                            }
                            return target;
                        }

                        function setPrototypeOf(obj, proto) {
                            obj.__proto__ = proto;
                            return obj;
                        }

                        var canSetPrototype = { __proto__: [] } instanceof Array;
                        var canUseSymbols = !DEBUG && typeof Symbol === 'function';

                        // Represent the known event types in a compact way, then at runtime transform it into a hash with event name as key (for fast lookup)
                        var knownEvents = {},
                            knownEventTypesByEventName = {};
                        var keyEventTypeName = navigator && /Firefox\/2/i.test(navigator.userAgent) ? 'KeyboardEvent' : 'UIEvents';
                        knownEvents[keyEventTypeName] = ['keyup', 'keydown', 'keypress'];
                        knownEvents['MouseEvents'] = ['click', 'dblclick', 'mousedown', 'mouseup', 'mousemove', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave'];
                        objectForEach(knownEvents, function (eventType, knownEventsForType) {
                            if (knownEventsForType.length) {
                                for (var i = 0, j = knownEventsForType.length; i < j; i++) knownEventTypesByEventName[knownEventsForType[i]] = eventType;
                            }
                        });
                        var eventsThatMustBeRegisteredUsingAttachEvent = { 'propertychange': true }; // Workaround for an IE9 issue - https://github.com/SteveSanderson/knockout/issues/406

                        // Detect IE versions for bug workarounds (uses IE conditionals, not UA string, for robustness)
                        // Note that, since IE 10 does not support conditional comments, the following logic only detects IE < 10.
                        // Currently this is by design, since IE 10+ behaves correctly when treated as a standard browser.
                        // If there is a future need to detect specific versions of IE10+, we will amend this.
                        var ieVersion = document && function () {
                            var version = 3,
                                div = document.createElement('div'),
                                iElems = div.getElementsByTagName('i');

                            // Keep constructing conditional HTML blocks until we hit one that resolves to an empty fragment
                            while (div.innerHTML = '<!--[if gt IE ' + ++version + ']><i></i><![endif]-->', iElems[0]) {}
                            return version > 4 ? version : undefined;
                        }();
                        var isIe6 = ieVersion === 6,
                            isIe7 = ieVersion === 7;

                        function isClickOnCheckableElement(element, eventType) {
                            if (ko.utils.tagNameLower(element) !== "input" || !element.type) return false;
                            if (eventType.toLowerCase() != "click") return false;
                            var inputType = element.type;
                            return inputType == "checkbox" || inputType == "radio";
                        }

                        // For details on the pattern for changing node classes
                        // see: https://github.com/knockout/knockout/issues/1597
                        var cssClassNameRegex = /\S+/g;

                        function toggleDomNodeCssClass(node, classNames, shouldHaveClass) {
                            var addOrRemoveFn;
                            if (classNames) {
                                if (typeof node.classList === 'object') {
                                    addOrRemoveFn = node.classList[shouldHaveClass ? 'add' : 'remove'];
                                    ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function (className) {
                                        addOrRemoveFn.call(node.classList, className);
                                    });
                                } else if (typeof node.className['baseVal'] === 'string') {
                                    // SVG tag .classNames is an SVGAnimatedString instance
                                    toggleObjectClassPropertyString(node.className, 'baseVal', classNames, shouldHaveClass);
                                } else {
                                    // node.className ought to be a string.
                                    toggleObjectClassPropertyString(node, 'className', classNames, shouldHaveClass);
                                }
                            }
                        }

                        function toggleObjectClassPropertyString(obj, prop, classNames, shouldHaveClass) {
                            // obj/prop is either a node/'className' or a SVGAnimatedString/'baseVal'.
                            var currentClassNames = obj[prop].match(cssClassNameRegex) || [];
                            ko.utils.arrayForEach(classNames.match(cssClassNameRegex), function (className) {
                                ko.utils.addOrRemoveItem(currentClassNames, className, shouldHaveClass);
                            });
                            obj[prop] = currentClassNames.join(" ");
                        }

                        return {
                            fieldsIncludedWithJsonPost: ['authenticity_token', /^__RequestVerificationToken(_.*)?$/],

                            arrayForEach: function (array, action) {
                                for (var i = 0, j = array.length; i < j; i++) action(array[i], i);
                            },

                            arrayIndexOf: function (array, item) {
                                if (typeof Array.prototype.indexOf == "function") return Array.prototype.indexOf.call(array, item);
                                for (var i = 0, j = array.length; i < j; i++) if (array[i] === item) return i;
                                return -1;
                            },

                            arrayFirst: function (array, predicate, predicateOwner) {
                                for (var i = 0, j = array.length; i < j; i++) if (predicate.call(predicateOwner, array[i], i)) return array[i];
                                return null;
                            },

                            arrayRemoveItem: function (array, itemToRemove) {
                                var index = ko.utils.arrayIndexOf(array, itemToRemove);
                                if (index > 0) {
                                    array.splice(index, 1);
                                } else if (index === 0) {
                                    array.shift();
                                }
                            },

                            arrayGetDistinctValues: function (array) {
                                array = array || [];
                                var result = [];
                                for (var i = 0, j = array.length; i < j; i++) {
                                    if (ko.utils.arrayIndexOf(result, array[i]) < 0) result.push(array[i]);
                                }
                                return result;
                            },

                            arrayMap: function (array, mapping) {
                                array = array || [];
                                var result = [];
                                for (var i = 0, j = array.length; i < j; i++) result.push(mapping(array[i], i));
                                return result;
                            },

                            arrayFilter: function (array, predicate) {
                                array = array || [];
                                var result = [];
                                for (var i = 0, j = array.length; i < j; i++) if (predicate(array[i], i)) result.push(array[i]);
                                return result;
                            },

                            arrayPushAll: function (array, valuesToPush) {
                                if (valuesToPush instanceof Array) array.push.apply(array, valuesToPush);else for (var i = 0, j = valuesToPush.length; i < j; i++) array.push(valuesToPush[i]);
                                return array;
                            },

                            addOrRemoveItem: function (array, value, included) {
                                var existingEntryIndex = ko.utils.arrayIndexOf(ko.utils.peekObservable(array), value);
                                if (existingEntryIndex < 0) {
                                    if (included) array.push(value);
                                } else {
                                    if (!included) array.splice(existingEntryIndex, 1);
                                }
                            },

                            canSetPrototype: canSetPrototype,

                            extend: extend,

                            setPrototypeOf: setPrototypeOf,

                            setPrototypeOfOrExtend: canSetPrototype ? setPrototypeOf : extend,

                            objectForEach: objectForEach,

                            objectMap: function (source, mapping) {
                                if (!source) return source;
                                var target = {};
                                for (var prop in source) {
                                    if (source.hasOwnProperty(prop)) {
                                        target[prop] = mapping(source[prop], prop, source);
                                    }
                                }
                                return target;
                            },

                            emptyDomNode: function (domNode) {
                                while (domNode.firstChild) {
                                    ko.removeNode(domNode.firstChild);
                                }
                            },

                            moveCleanedNodesToContainerElement: function (nodes) {
                                // Ensure it's a real array, as we're about to reparent the nodes and
                                // we don't want the underlying collection to change while we're doing that.
                                var nodesArray = ko.utils.makeArray(nodes);
                                var templateDocument = nodesArray[0] && nodesArray[0].ownerDocument || document;

                                var container = templateDocument.createElement('div');
                                for (var i = 0, j = nodesArray.length; i < j; i++) {
                                    container.appendChild(ko.cleanNode(nodesArray[i]));
                                }
                                return container;
                            },

                            cloneNodes: function (nodesArray, shouldCleanNodes) {
                                for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                                    var clonedNode = nodesArray[i].cloneNode(true);
                                    newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
                                }
                                return newNodesArray;
                            },

                            setDomNodeChildren: function (domNode, childNodes) {
                                ko.utils.emptyDomNode(domNode);
                                if (childNodes) {
                                    for (var i = 0, j = childNodes.length; i < j; i++) domNode.appendChild(childNodes[i]);
                                }
                            },

                            replaceDomNodes: function (nodeToReplaceOrNodeArray, newNodesArray) {
                                var nodesToReplaceArray = nodeToReplaceOrNodeArray.nodeType ? [nodeToReplaceOrNodeArray] : nodeToReplaceOrNodeArray;
                                if (nodesToReplaceArray.length > 0) {
                                    var insertionPoint = nodesToReplaceArray[0];
                                    var parent = insertionPoint.parentNode;
                                    for (var i = 0, j = newNodesArray.length; i < j; i++) parent.insertBefore(newNodesArray[i], insertionPoint);
                                    for (var i = 0, j = nodesToReplaceArray.length; i < j; i++) {
                                        ko.removeNode(nodesToReplaceArray[i]);
                                    }
                                }
                            },

                            fixUpContinuousNodeArray: function (continuousNodeArray, parentNode) {
                                // Before acting on a set of nodes that were previously outputted by a template function, we have to reconcile
                                // them against what is in the DOM right now. It may be that some of the nodes have already been removed, or that
                                // new nodes might have been inserted in the middle, for example by a binding. Also, there may previously have been
                                // leading comment nodes (created by rewritten string-based templates) that have since been removed during binding.
                                // So, this function translates the old "map" output array into its best guess of the set of current DOM nodes.
                                //
                                // Rules:
                                //   [A] Any leading nodes that have been removed should be ignored
                                //       These most likely correspond to memoization nodes that were already removed during binding
                                //       See https://github.com/knockout/knockout/pull/440
                                //   [B] Any trailing nodes that have been remove should be ignored
                                //       This prevents the code here from adding unrelated nodes to the array while processing rule [C]
                                //       See https://github.com/knockout/knockout/pull/1903
                                //   [C] We want to output a continuous series of nodes. So, ignore any nodes that have already been removed,
                                //       and include any nodes that have been inserted among the previous collection

                                if (continuousNodeArray.length) {
                                    // The parent node can be a virtual element; so get the real parent node
                                    parentNode = parentNode.nodeType === 8 && parentNode.parentNode || parentNode;

                                    // Rule [A]
                                    while (continuousNodeArray.length && continuousNodeArray[0].parentNode !== parentNode) continuousNodeArray.splice(0, 1);

                                    // Rule [B]
                                    while (continuousNodeArray.length > 1 && continuousNodeArray[continuousNodeArray.length - 1].parentNode !== parentNode) continuousNodeArray.length--;

                                    // Rule [C]
                                    if (continuousNodeArray.length > 1) {
                                        var current = continuousNodeArray[0],
                                            last = continuousNodeArray[continuousNodeArray.length - 1];
                                        // Replace with the actual new continuous node set
                                        continuousNodeArray.length = 0;
                                        while (current !== last) {
                                            continuousNodeArray.push(current);
                                            current = current.nextSibling;
                                        }
                                        continuousNodeArray.push(last);
                                    }
                                }
                                return continuousNodeArray;
                            },

                            setOptionNodeSelectionState: function (optionNode, isSelected) {
                                // IE6 sometimes throws "unknown error" if you try to write to .selected directly, whereas Firefox struggles with setAttribute. Pick one based on browser.
                                if (ieVersion < 7) optionNode.setAttribute("selected", isSelected);else optionNode.selected = isSelected;
                            },

                            stringTrim: function (string) {
                                return string === null || string === undefined ? '' : string.trim ? string.trim() : string.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');
                            },

                            stringStartsWith: function (string, startsWith) {
                                string = string || "";
                                if (startsWith.length > string.length) return false;
                                return string.substring(0, startsWith.length) === startsWith;
                            },

                            domNodeIsContainedBy: function (node, containedByNode) {
                                if (node === containedByNode) return true;
                                if (node.nodeType === 11) return false; // Fixes issue #1162 - can't use node.contains for document fragments on IE8
                                if (containedByNode.contains) return containedByNode.contains(node.nodeType === 3 ? node.parentNode : node);
                                if (containedByNode.compareDocumentPosition) return (containedByNode.compareDocumentPosition(node) & 16) == 16;
                                while (node && node != containedByNode) {
                                    node = node.parentNode;
                                }
                                return !!node;
                            },

                            domNodeIsAttachedToDocument: function (node) {
                                return ko.utils.domNodeIsContainedBy(node, node.ownerDocument.documentElement);
                            },

                            anyDomNodeIsAttachedToDocument: function (nodes) {
                                return !!ko.utils.arrayFirst(nodes, ko.utils.domNodeIsAttachedToDocument);
                            },

                            tagNameLower: function (element) {
                                // For HTML elements, tagName will always be upper case; for XHTML elements, it'll be lower case.
                                // Possible future optimization: If we know it's an element from an XHTML document (not HTML),
                                // we don't need to do the .toLowerCase() as it will always be lower case anyway.
                                return element && element.tagName && element.tagName.toLowerCase();
                            },

                            catchFunctionErrors: function (delegate) {
                                return ko['onError'] ? function () {
                                    try {
                                        return delegate.apply(this, arguments);
                                    } catch (e) {
                                        ko['onError'] && ko['onError'](e);
                                        throw e;
                                    }
                                } : delegate;
                            },

                            setTimeout: function (handler, timeout) {
                                return setTimeout(ko.utils.catchFunctionErrors(handler), timeout);
                            },

                            deferError: function (error) {
                                setTimeout(function () {
                                    ko['onError'] && ko['onError'](error);
                                    throw error;
                                }, 0);
                            },

                            registerEventHandler: function (element, eventType, handler) {
                                var wrappedHandler = ko.utils.catchFunctionErrors(handler);

                                var mustUseAttachEvent = ieVersion && eventsThatMustBeRegisteredUsingAttachEvent[eventType];
                                if (!ko.options['useOnlyNativeEvents'] && !mustUseAttachEvent && jQueryInstance) {
                                    jQueryInstance(element)['bind'](eventType, wrappedHandler);
                                } else if (!mustUseAttachEvent && typeof element.addEventListener == "function") element.addEventListener(eventType, wrappedHandler, false);else if (typeof element.attachEvent != "undefined") {
                                    var attachEventHandler = function (event) {
                                        wrappedHandler.call(element, event);
                                    },
                                        attachEventName = "on" + eventType;
                                    element.attachEvent(attachEventName, attachEventHandler);

                                    // IE does not dispose attachEvent handlers automatically (unlike with addEventListener)
                                    // so to avoid leaks, we have to remove them manually. See bug #856
                                    ko.utils.domNodeDisposal.addDisposeCallback(element, function () {
                                        element.detachEvent(attachEventName, attachEventHandler);
                                    });
                                } else throw new Error("Browser doesn't support addEventListener or attachEvent");
                            },

                            triggerEvent: function (element, eventType) {
                                if (!(element && element.nodeType)) throw new Error("element must be a DOM node when calling triggerEvent");

                                // For click events on checkboxes and radio buttons, jQuery toggles the element checked state *after* the
                                // event handler runs instead of *before*. (This was fixed in 1.9 for checkboxes but not for radio buttons.)
                                // IE doesn't change the checked state when you trigger the click event using "fireEvent".
                                // In both cases, we'll use the click method instead.
                                var useClickWorkaround = isClickOnCheckableElement(element, eventType);

                                if (!ko.options['useOnlyNativeEvents'] && jQueryInstance && !useClickWorkaround) {
                                    jQueryInstance(element)['trigger'](eventType);
                                } else if (typeof document.createEvent == "function") {
                                    if (typeof element.dispatchEvent == "function") {
                                        var eventCategory = knownEventTypesByEventName[eventType] || "HTMLEvents";
                                        var event = document.createEvent(eventCategory);
                                        event.initEvent(eventType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, element);
                                        element.dispatchEvent(event);
                                    } else throw new Error("The supplied element doesn't support dispatchEvent");
                                } else if (useClickWorkaround && element.click) {
                                    element.click();
                                } else if (typeof element.fireEvent != "undefined") {
                                    element.fireEvent("on" + eventType);
                                } else {
                                    throw new Error("Browser doesn't support triggering events");
                                }
                            },

                            unwrapObservable: function (value) {
                                return ko.isObservable(value) ? value() : value;
                            },

                            peekObservable: function (value) {
                                return ko.isObservable(value) ? value.peek() : value;
                            },

                            toggleDomNodeCssClass: toggleDomNodeCssClass,

                            setTextContent: function (element, textContent) {
                                var value = ko.utils.unwrapObservable(textContent);
                                if (value === null || value === undefined) value = "";

                                // We need there to be exactly one child: a text node.
                                // If there are no children, more than one, or if it's not a text node,
                                // we'll clear everything and create a single text node.
                                var innerTextNode = ko.virtualElements.firstChild(element);
                                if (!innerTextNode || innerTextNode.nodeType != 3 || ko.virtualElements.nextSibling(innerTextNode)) {
                                    ko.virtualElements.setDomNodeChildren(element, [element.ownerDocument.createTextNode(value)]);
                                } else {
                                    innerTextNode.data = value;
                                }

                                ko.utils.forceRefresh(element);
                            },

                            setElementName: function (element, name) {
                                element.name = name;

                                // Workaround IE 6/7 issue
                                // - https://github.com/SteveSanderson/knockout/issues/197
                                // - http://www.matts411.com/post/setting_the_name_attribute_in_ie_dom/
                                if (ieVersion <= 7) {
                                    try {
                                        element.mergeAttributes(document.createElement("<input name='" + element.name + "'/>"), false);
                                    } catch (e) {} // For IE9 with doc mode "IE9 Standards" and browser mode "IE9 Compatibility View"
                                }
                            },

                            forceRefresh: function (node) {
                                // Workaround for an IE9 rendering bug - https://github.com/SteveSanderson/knockout/issues/209
                                if (ieVersion >= 9) {
                                    // For text nodes and comment nodes (most likely virtual elements), we will have to refresh the container
                                    var elem = node.nodeType == 1 ? node : node.parentNode;
                                    if (elem.style) elem.style.zoom = elem.style.zoom;
                                }
                            },

                            ensureSelectElementIsRenderedCorrectly: function (selectElement) {
                                // Workaround for IE9 rendering bug - it doesn't reliably display all the text in dynamically-added select boxes unless you force it to re-render by updating the width.
                                // (See https://github.com/SteveSanderson/knockout/issues/312, http://stackoverflow.com/questions/5908494/select-only-shows-first-char-of-selected-option)
                                // Also fixes IE7 and IE8 bug that causes selects to be zero width if enclosed by 'if' or 'with'. (See issue #839)
                                if (ieVersion) {
                                    var originalWidth = selectElement.style.width;
                                    selectElement.style.width = 0;
                                    selectElement.style.width = originalWidth;
                                }
                            },

                            range: function (min, max) {
                                min = ko.utils.unwrapObservable(min);
                                max = ko.utils.unwrapObservable(max);
                                var result = [];
                                for (var i = min; i <= max; i++) result.push(i);
                                return result;
                            },

                            makeArray: function (arrayLikeObject) {
                                var result = [];
                                for (var i = 0, j = arrayLikeObject.length; i < j; i++) {
                                    result.push(arrayLikeObject[i]);
                                };
                                return result;
                            },

                            createSymbolOrString: function (identifier) {
                                return canUseSymbols ? Symbol(identifier) : identifier;
                            },

                            isIe6: isIe6,
                            isIe7: isIe7,
                            ieVersion: ieVersion,

                            getFormFields: function (form, fieldName) {
                                var fields = ko.utils.makeArray(form.getElementsByTagName("input")).concat(ko.utils.makeArray(form.getElementsByTagName("textarea")));
                                var isMatchingField = typeof fieldName == 'string' ? function (field) {
                                    return field.name === fieldName;
                                } : function (field) {
                                    return fieldName.test(field.name);
                                }; // Treat fieldName as regex or object containing predicate
                                var matches = [];
                                for (var i = fields.length - 1; i >= 0; i--) {
                                    if (isMatchingField(fields[i])) matches.push(fields[i]);
                                };
                                return matches;
                            },

                            parseJson: function (jsonString) {
                                if (typeof jsonString == "string") {
                                    jsonString = ko.utils.stringTrim(jsonString);
                                    if (jsonString) {
                                        if (JSON && JSON.parse) // Use native parsing where available
                                            return JSON.parse(jsonString);
                                        return new Function("return " + jsonString)(); // Fallback on less safe parsing for older browsers
                                    }
                                }
                                return null;
                            },

                            stringifyJson: function (data, replacer, space) {
                                // replacer and space are optional
                                if (!JSON || !JSON.stringify) throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return JSON.stringify(ko.utils.unwrapObservable(data), replacer, space);
                            },

                            postJson: function (urlOrForm, data, options) {
                                options = options || {};
                                var params = options['params'] || {};
                                var includeFields = options['includeFields'] || this.fieldsIncludedWithJsonPost;
                                var url = urlOrForm;

                                // If we were given a form, use its 'action' URL and pick out any requested field values
                                if (typeof urlOrForm == 'object' && ko.utils.tagNameLower(urlOrForm) === "form") {
                                    var originalForm = urlOrForm;
                                    url = originalForm.action;
                                    for (var i = includeFields.length - 1; i >= 0; i--) {
                                        var fields = ko.utils.getFormFields(originalForm, includeFields[i]);
                                        for (var j = fields.length - 1; j >= 0; j--) params[fields[j].name] = fields[j].value;
                                    }
                                }

                                data = ko.utils.unwrapObservable(data);
                                var form = document.createElement("form");
                                form.style.display = "none";
                                form.action = url;
                                form.method = "post";
                                for (var key in data) {
                                    // Since 'data' this is a model object, we include all properties including those inherited from its prototype
                                    var input = document.createElement("input");
                                    input.type = "hidden";
                                    input.name = key;
                                    input.value = ko.utils.stringifyJson(ko.utils.unwrapObservable(data[key]));
                                    form.appendChild(input);
                                }
                                objectForEach(params, function (key, value) {
                                    var input = document.createElement("input");
                                    input.type = "hidden";
                                    input.name = key;
                                    input.value = value;
                                    form.appendChild(input);
                                });
                                document.body.appendChild(form);
                                options['submitter'] ? options['submitter'](form) : form.submit();
                                setTimeout(function () {
                                    form.parentNode.removeChild(form);
                                }, 0);
                            }
                        };
                    }();

                    ko.exportSymbol('utils', ko.utils);
                    ko.exportSymbol('utils.arrayForEach', ko.utils.arrayForEach);
                    ko.exportSymbol('utils.arrayFirst', ko.utils.arrayFirst);
                    ko.exportSymbol('utils.arrayFilter', ko.utils.arrayFilter);
                    ko.exportSymbol('utils.arrayGetDistinctValues', ko.utils.arrayGetDistinctValues);
                    ko.exportSymbol('utils.arrayIndexOf', ko.utils.arrayIndexOf);
                    ko.exportSymbol('utils.arrayMap', ko.utils.arrayMap);
                    ko.exportSymbol('utils.arrayPushAll', ko.utils.arrayPushAll);
                    ko.exportSymbol('utils.arrayRemoveItem', ko.utils.arrayRemoveItem);
                    ko.exportSymbol('utils.extend', ko.utils.extend);
                    ko.exportSymbol('utils.fieldsIncludedWithJsonPost', ko.utils.fieldsIncludedWithJsonPost);
                    ko.exportSymbol('utils.getFormFields', ko.utils.getFormFields);
                    ko.exportSymbol('utils.peekObservable', ko.utils.peekObservable);
                    ko.exportSymbol('utils.postJson', ko.utils.postJson);
                    ko.exportSymbol('utils.parseJson', ko.utils.parseJson);
                    ko.exportSymbol('utils.registerEventHandler', ko.utils.registerEventHandler);
                    ko.exportSymbol('utils.stringifyJson', ko.utils.stringifyJson);
                    ko.exportSymbol('utils.range', ko.utils.range);
                    ko.exportSymbol('utils.toggleDomNodeCssClass', ko.utils.toggleDomNodeCssClass);
                    ko.exportSymbol('utils.triggerEvent', ko.utils.triggerEvent);
                    ko.exportSymbol('utils.unwrapObservable', ko.utils.unwrapObservable);
                    ko.exportSymbol('utils.objectForEach', ko.utils.objectForEach);
                    ko.exportSymbol('utils.addOrRemoveItem', ko.utils.addOrRemoveItem);
                    ko.exportSymbol('utils.setTextContent', ko.utils.setTextContent);
                    ko.exportSymbol('unwrap', ko.utils.unwrapObservable); // Convenient shorthand, because this is used so commonly

                    if (!Function.prototype['bind']) {
                        // Function.prototype.bind is a standard part of ECMAScript 5th Edition (December 2009, http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf)
                        // In case the browser doesn't implement it natively, provide a JavaScript implementation. This implementation is based on the one in prototype.js
                        Function.prototype['bind'] = function (object) {
                            var originalFunction = this;
                            if (arguments.length === 1) {
                                return function () {
                                    return originalFunction.apply(object, arguments);
                                };
                            } else {
                                var partialArgs = Array.prototype.slice.call(arguments, 1);
                                return function () {
                                    var args = partialArgs.slice(0);
                                    args.push.apply(args, arguments);
                                    return originalFunction.apply(object, args);
                                };
                            }
                        };
                    }

                    ko.utils.domData = new function () {
                        var uniqueId = 0;
                        var dataStoreKeyExpandoPropertyName = "__ko__" + new Date().getTime();
                        var dataStore = {};

                        function getAll(node, createIfNotFound) {
                            var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
                            var hasExistingDataStore = dataStoreKey && dataStoreKey !== "null" && dataStore[dataStoreKey];
                            if (!hasExistingDataStore) {
                                if (!createIfNotFound) return undefined;
                                dataStoreKey = node[dataStoreKeyExpandoPropertyName] = "ko" + uniqueId++;
                                dataStore[dataStoreKey] = {};
                            }
                            return dataStore[dataStoreKey];
                        }

                        return {
                            get: function (node, key) {
                                var allDataForNode = getAll(node, false);
                                return allDataForNode === undefined ? undefined : allDataForNode[key];
                            },
                            set: function (node, key, value) {
                                if (value === undefined) {
                                    // Make sure we don't actually create a new domData key if we are actually deleting a value
                                    if (getAll(node, false) === undefined) return;
                                }
                                var allDataForNode = getAll(node, true);
                                allDataForNode[key] = value;
                            },
                            clear: function (node) {
                                var dataStoreKey = node[dataStoreKeyExpandoPropertyName];
                                if (dataStoreKey) {
                                    delete dataStore[dataStoreKey];
                                    node[dataStoreKeyExpandoPropertyName] = null;
                                    return true; // Exposing "did clean" flag purely so specs can infer whether things have been cleaned up as intended
                                }
                                return false;
                            },

                            nextKey: function () {
                                return uniqueId++ + dataStoreKeyExpandoPropertyName;
                            }
                        };
                    }();

                    ko.exportSymbol('utils.domData', ko.utils.domData);
                    ko.exportSymbol('utils.domData.clear', ko.utils.domData.clear); // Exporting only so specs can clear up after themselves fully

                    ko.utils.domNodeDisposal = new function () {
                        var domDataKey = ko.utils.domData.nextKey();
                        var cleanableNodeTypes = { 1: true, 8: true, 9: true }; // Element, Comment, Document
                        var cleanableNodeTypesWithDescendants = { 1: true, 9: true }; // Element, Document

                        function getDisposeCallbacksCollection(node, createIfNotFound) {
                            var allDisposeCallbacks = ko.utils.domData.get(node, domDataKey);
                            if (allDisposeCallbacks === undefined && createIfNotFound) {
                                allDisposeCallbacks = [];
                                ko.utils.domData.set(node, domDataKey, allDisposeCallbacks);
                            }
                            return allDisposeCallbacks;
                        }
                        function destroyCallbacksCollection(node) {
                            ko.utils.domData.set(node, domDataKey, undefined);
                        }

                        function cleanSingleNode(node) {
                            // Run all the dispose callbacks
                            var callbacks = getDisposeCallbacksCollection(node, false);
                            if (callbacks) {
                                callbacks = callbacks.slice(0); // Clone, as the array may be modified during iteration (typically, callbacks will remove themselves)
                                for (var i = 0; i < callbacks.length; i++) callbacks[i](node);
                            }

                            // Erase the DOM data
                            ko.utils.domData.clear(node);

                            // Perform cleanup needed by external libraries (currently only jQuery, but can be extended)
                            ko.utils.domNodeDisposal["cleanExternalData"](node);

                            // Clear any immediate-child comment nodes, as these wouldn't have been found by
                            // node.getElementsByTagName("*") in cleanNode() (comment nodes aren't elements)
                            if (cleanableNodeTypesWithDescendants[node.nodeType]) cleanImmediateCommentTypeChildren(node);
                        }

                        function cleanImmediateCommentTypeChildren(nodeWithChildren) {
                            var child,
                                nextChild = nodeWithChildren.firstChild;
                            while (child = nextChild) {
                                nextChild = child.nextSibling;
                                if (child.nodeType === 8) cleanSingleNode(child);
                            }
                        }

                        return {
                            addDisposeCallback: function (node, callback) {
                                if (typeof callback != "function") throw new Error("Callback must be a function");
                                getDisposeCallbacksCollection(node, true).push(callback);
                            },

                            removeDisposeCallback: function (node, callback) {
                                var callbacksCollection = getDisposeCallbacksCollection(node, false);
                                if (callbacksCollection) {
                                    ko.utils.arrayRemoveItem(callbacksCollection, callback);
                                    if (callbacksCollection.length == 0) destroyCallbacksCollection(node);
                                }
                            },

                            cleanNode: function (node) {
                                // First clean this node, where applicable
                                if (cleanableNodeTypes[node.nodeType]) {
                                    cleanSingleNode(node);

                                    // ... then its descendants, where applicable
                                    if (cleanableNodeTypesWithDescendants[node.nodeType]) {
                                        // Clone the descendants list in case it changes during iteration
                                        var descendants = [];
                                        ko.utils.arrayPushAll(descendants, node.getElementsByTagName("*"));
                                        for (var i = 0, j = descendants.length; i < j; i++) cleanSingleNode(descendants[i]);
                                    }
                                }
                                return node;
                            },

                            removeNode: function (node) {
                                ko.cleanNode(node);
                                if (node.parentNode) node.parentNode.removeChild(node);
                            },

                            "cleanExternalData": function (node) {
                                // Special support for jQuery here because it's so commonly used.
                                // Many jQuery plugins (including jquery.tmpl) store data using jQuery's equivalent of domData
                                // so notify it to tear down any resources associated with the node & descendants here.
                                if (jQueryInstance && typeof jQueryInstance['cleanData'] == "function") jQueryInstance['cleanData']([node]);
                            }
                        };
                    }();
                    ko.cleanNode = ko.utils.domNodeDisposal.cleanNode; // Shorthand name for convenience
                    ko.removeNode = ko.utils.domNodeDisposal.removeNode; // Shorthand name for convenience
                    ko.exportSymbol('cleanNode', ko.cleanNode);
                    ko.exportSymbol('removeNode', ko.removeNode);
                    ko.exportSymbol('utils.domNodeDisposal', ko.utils.domNodeDisposal);
                    ko.exportSymbol('utils.domNodeDisposal.addDisposeCallback', ko.utils.domNodeDisposal.addDisposeCallback);
                    ko.exportSymbol('utils.domNodeDisposal.removeDisposeCallback', ko.utils.domNodeDisposal.removeDisposeCallback);
                    (function () {
                        var none = [0, "", ""],
                            table = [1, "<table>", "</table>"],
                            tbody = [2, "<table><tbody>", "</tbody></table>"],
                            tr = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                            select = [1, "<select multiple='multiple'>", "</select>"],
                            lookup = {
                            'thead': table,
                            'tbody': table,
                            'tfoot': table,
                            'tr': tbody,
                            'td': tr,
                            'th': tr,
                            'option': select,
                            'optgroup': select
                        },


                        // This is needed for old IE if you're *not* using either jQuery or innerShiv. Doesn't affect other cases.
                        mayRequireCreateElementHack = ko.utils.ieVersion <= 8;

                        function getWrap(tags) {
                            var m = tags.match(/^<([a-z]+)[ >]/);
                            return m && lookup[m[1]] || none;
                        }

                        function simpleHtmlParse(html, documentContext) {
                            documentContext || (documentContext = document);
                            var windowContext = documentContext['parentWindow'] || documentContext['defaultView'] || window;

                            // Based on jQuery's "clean" function, but only accounting for table-related elements.
                            // If you have referenced jQuery, this won't be used anyway - KO will use jQuery's "clean" function directly

                            // Note that there's still an issue in IE < 9 whereby it will discard comment nodes that are the first child of
                            // a descendant node. For example: "<div><!-- mycomment -->abc</div>" will get parsed as "<div>abc</div>"
                            // This won't affect anyone who has referenced jQuery, and there's always the workaround of inserting a dummy node
                            // (possibly a text node) in front of the comment. So, KO does not attempt to workaround this IE issue automatically at present.

                            // Trim whitespace, otherwise indexOf won't work as expected
                            var tags = ko.utils.stringTrim(html).toLowerCase(),
                                div = documentContext.createElement("div"),
                                wrap = getWrap(tags),
                                depth = wrap[0];

                            // Go to html and back, then peel off extra wrappers
                            // Note that we always prefix with some dummy text, because otherwise, IE<9 will strip out leading comment nodes in descendants. Total madness.
                            var markup = "ignored<div>" + wrap[1] + html + wrap[2] + "</div>";
                            if (typeof windowContext['innerShiv'] == "function") {
                                // Note that innerShiv is deprecated in favour of html5shiv. We should consider adding
                                // support for html5shiv (except if no explicit support is needed, e.g., if html5shiv
                                // somehow shims the native APIs so it just works anyway)
                                div.appendChild(windowContext['innerShiv'](markup));
                            } else {
                                if (mayRequireCreateElementHack) {
                                    // The document.createElement('my-element') trick to enable custom elements in IE6-8
                                    // only works if we assign innerHTML on an element associated with that document.
                                    documentContext.appendChild(div);
                                }

                                div.innerHTML = markup;

                                if (mayRequireCreateElementHack) {
                                    div.parentNode.removeChild(div);
                                }
                            }

                            // Move to the right depth
                            while (depth--) div = div.lastChild;

                            return ko.utils.makeArray(div.lastChild.childNodes);
                        }

                        function jQueryHtmlParse(html, documentContext) {
                            // jQuery's "parseHTML" function was introduced in jQuery 1.8.0 and is a documented public API.
                            if (jQueryInstance['parseHTML']) {
                                return jQueryInstance['parseHTML'](html, documentContext) || []; // Ensure we always return an array and never null
                            } else {
                                // For jQuery < 1.8.0, we fall back on the undocumented internal "clean" function.
                                var elems = jQueryInstance['clean']([html], documentContext);

                                // As of jQuery 1.7.1, jQuery parses the HTML by appending it to some dummy parent nodes held in an in-memory document fragment.
                                // Unfortunately, it never clears the dummy parent nodes from the document fragment, so it leaks memory over time.
                                // Fix this by finding the top-most dummy parent element, and detaching it from its owner fragment.
                                if (elems && elems[0]) {
                                    // Find the top-most parent element that's a direct child of a document fragment
                                    var elem = elems[0];
                                    while (elem.parentNode && elem.parentNode.nodeType !== 11 /* i.e., DocumentFragment */) elem = elem.parentNode;
                                    // ... then detach it
                                    if (elem.parentNode) elem.parentNode.removeChild(elem);
                                }

                                return elems;
                            }
                        }

                        ko.utils.parseHtmlFragment = function (html, documentContext) {
                            return jQueryInstance ? jQueryHtmlParse(html, documentContext) : // As below, benefit from jQuery's optimisations where possible
                            simpleHtmlParse(html, documentContext); // ... otherwise, this simple logic will do in most common cases.
                        };

                        ko.utils.setHtml = function (node, html) {
                            ko.utils.emptyDomNode(node);

                            // There's no legitimate reason to display a stringified observable without unwrapping it, so we'll unwrap it
                            html = ko.utils.unwrapObservable(html);

                            if (html !== null && html !== undefined) {
                                if (typeof html != 'string') html = html.toString();

                                // jQuery contains a lot of sophisticated code to parse arbitrary HTML fragments,
                                // for example <tr> elements which are not normally allowed to exist on their own.
                                // If you've referenced jQuery we'll use that rather than duplicating its code.
                                if (jQueryInstance) {
                                    jQueryInstance(node)['html'](html);
                                } else {
                                    // ... otherwise, use KO's own parsing logic.
                                    var parsedNodes = ko.utils.parseHtmlFragment(html, node.ownerDocument);
                                    for (var i = 0; i < parsedNodes.length; i++) node.appendChild(parsedNodes[i]);
                                }
                            }
                        };
                    })();

                    ko.exportSymbol('utils.parseHtmlFragment', ko.utils.parseHtmlFragment);
                    ko.exportSymbol('utils.setHtml', ko.utils.setHtml);

                    ko.memoization = function () {
                        var memos = {};

                        function randomMax8HexChars() {
                            return ((1 + Math.random()) * 0x100000000 | 0).toString(16).substring(1);
                        }
                        function generateRandomId() {
                            return randomMax8HexChars() + randomMax8HexChars();
                        }
                        function findMemoNodes(rootNode, appendToArray) {
                            if (!rootNode) return;
                            if (rootNode.nodeType == 8) {
                                var memoId = ko.memoization.parseMemoText(rootNode.nodeValue);
                                if (memoId != null) appendToArray.push({ domNode: rootNode, memoId: memoId });
                            } else if (rootNode.nodeType == 1) {
                                for (var i = 0, childNodes = rootNode.childNodes, j = childNodes.length; i < j; i++) findMemoNodes(childNodes[i], appendToArray);
                            }
                        }

                        return {
                            memoize: function (callback) {
                                if (typeof callback != "function") throw new Error("You can only pass a function to ko.memoization.memoize()");
                                var memoId = generateRandomId();
                                memos[memoId] = callback;
                                return "<!--[ko_memo:" + memoId + "]-->";
                            },

                            unmemoize: function (memoId, callbackParams) {
                                var callback = memos[memoId];
                                if (callback === undefined) throw new Error("Couldn't find any memo with ID " + memoId + ". Perhaps it's already been unmemoized.");
                                try {
                                    callback.apply(null, callbackParams || []);
                                    return true;
                                } finally {
                                    delete memos[memoId];
                                }
                            },

                            unmemoizeDomNodeAndDescendants: function (domNode, extraCallbackParamsArray) {
                                var memos = [];
                                findMemoNodes(domNode, memos);
                                for (var i = 0, j = memos.length; i < j; i++) {
                                    var node = memos[i].domNode;
                                    var combinedParams = [node];
                                    if (extraCallbackParamsArray) ko.utils.arrayPushAll(combinedParams, extraCallbackParamsArray);
                                    ko.memoization.unmemoize(memos[i].memoId, combinedParams);
                                    node.nodeValue = ""; // Neuter this node so we don't try to unmemoize it again
                                    if (node.parentNode) node.parentNode.removeChild(node); // If possible, erase it totally (not always possible - someone else might just hold a reference to it then call unmemoizeDomNodeAndDescendants again)
                                }
                            },

                            parseMemoText: function (memoText) {
                                var match = memoText.match(/^\[ko_memo\:(.*?)\]$/);
                                return match ? match[1] : null;
                            }
                        };
                    }();

                    ko.exportSymbol('memoization', ko.memoization);
                    ko.exportSymbol('memoization.memoize', ko.memoization.memoize);
                    ko.exportSymbol('memoization.unmemoize', ko.memoization.unmemoize);
                    ko.exportSymbol('memoization.parseMemoText', ko.memoization.parseMemoText);
                    ko.exportSymbol('memoization.unmemoizeDomNodeAndDescendants', ko.memoization.unmemoizeDomNodeAndDescendants);
                    ko.tasks = function () {
                        var scheduler,
                            taskQueue = [],
                            taskQueueLength = 0,
                            nextHandle = 1,
                            nextIndexToProcess = 0;

                        if (window['MutationObserver']) {
                            // Chrome 27+, Firefox 14+, IE 11+, Opera 15+, Safari 6.1+
                            // From https://github.com/petkaantonov/bluebird * Copyright (c) 2014 Petka Antonov * License: MIT
                            scheduler = function (callback) {
                                var div = document.createElement("div");
                                new MutationObserver(callback).observe(div, { attributes: true });
                                return function () {
                                    div.classList.toggle("foo");
                                };
                            }(scheduledProcess);
                        } else if (document && "onreadystatechange" in document.createElement("script")) {
                            // IE 6-10
                            // From https://github.com/YuzuJS/setImmediate * Copyright (c) 2012 Barnesandnoble.com, llc, Donavon West, and Domenic Denicola * License: MIT
                            scheduler = function (callback) {
                                var script = document.createElement("script");
                                script.onreadystatechange = function () {
                                    script.onreadystatechange = null;
                                    document.documentElement.removeChild(script);
                                    script = null;
                                    callback();
                                };
                                document.documentElement.appendChild(script);
                            };
                        } else {
                            scheduler = function (callback) {
                                setTimeout(callback, 0);
                            };
                        }

                        function processTasks() {
                            if (taskQueueLength) {
                                // Each mark represents the end of a logical group of tasks and the number of these groups is
                                // limited to prevent unchecked recursion.
                                var mark = taskQueueLength,
                                    countMarks = 0;

                                // nextIndexToProcess keeps track of where we are in the queue; processTasks can be called recursively without issue
                                for (var task; nextIndexToProcess < taskQueueLength;) {
                                    if (task = taskQueue[nextIndexToProcess++]) {
                                        if (nextIndexToProcess > mark) {
                                            if (++countMarks >= 5000) {
                                                nextIndexToProcess = taskQueueLength; // skip all tasks remaining in the queue since any of them could be causing the recursion
                                                ko.utils.deferError(Error("'Too much recursion' after processing " + countMarks + " task groups."));
                                                break;
                                            }
                                            mark = taskQueueLength;
                                        }
                                        try {
                                            task();
                                        } catch (ex) {
                                            ko.utils.deferError(ex);
                                        }
                                    }
                                }
                            }
                        }

                        function scheduledProcess() {
                            processTasks();

                            // Reset the queue
                            nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
                        }

                        function scheduleTaskProcessing() {
                            ko.tasks['scheduler'](scheduledProcess);
                        }

                        var tasks = {
                            'scheduler': scheduler, // Allow overriding the scheduler

                            schedule: function (func) {
                                if (!taskQueueLength) {
                                    scheduleTaskProcessing();
                                }

                                taskQueue[taskQueueLength++] = func;
                                return nextHandle++;
                            },

                            cancel: function (handle) {
                                var index = handle - (nextHandle - taskQueueLength);
                                if (index >= nextIndexToProcess && index < taskQueueLength) {
                                    taskQueue[index] = null;
                                }
                            },

                            // For testing only: reset the queue and return the previous queue length
                            'resetForTesting': function () {
                                var length = taskQueueLength - nextIndexToProcess;
                                nextIndexToProcess = taskQueueLength = taskQueue.length = 0;
                                return length;
                            },

                            runEarly: processTasks
                        };

                        return tasks;
                    }();

                    ko.exportSymbol('tasks', ko.tasks);
                    ko.exportSymbol('tasks.schedule', ko.tasks.schedule);
                    //ko.exportSymbol('tasks.cancel', ko.tasks.cancel);  "cancel" isn't minified
                    ko.exportSymbol('tasks.runEarly', ko.tasks.runEarly);
                    ko.extenders = {
                        'throttle': function (target, timeout) {
                            // Throttling means two things:

                            // (1) For dependent observables, we throttle *evaluations* so that, no matter how fast its dependencies
                            //     notify updates, the target doesn't re-evaluate (and hence doesn't notify) faster than a certain rate
                            target['throttleEvaluation'] = timeout;

                            // (2) For writable targets (observables, or writable dependent observables), we throttle *writes*
                            //     so the target cannot change value synchronously or faster than a certain rate
                            var writeTimeoutInstance = null;
                            return ko.dependentObservable({
                                'read': target,
                                'write': function (value) {
                                    clearTimeout(writeTimeoutInstance);
                                    writeTimeoutInstance = ko.utils.setTimeout(function () {
                                        target(value);
                                    }, timeout);
                                }
                            });
                        },

                        'rateLimit': function (target, options) {
                            var timeout, method, limitFunction;

                            if (typeof options == 'number') {
                                timeout = options;
                            } else {
                                timeout = options['timeout'];
                                method = options['method'];
                            }

                            // rateLimit supersedes deferred updates
                            target._deferUpdates = false;

                            limitFunction = method == 'notifyWhenChangesStop' ? debounce : throttle;
                            target.limit(function (callback) {
                                return limitFunction(callback, timeout);
                            });
                        },

                        'deferred': function (target, options) {
                            if (options !== true) {
                                throw new Error('The \'deferred\' extender only accepts the value \'true\', because it is not supported to turn deferral off once enabled.');
                            }

                            if (!target._deferUpdates) {
                                target._deferUpdates = true;
                                target.limit(function (callback) {
                                    var handle;
                                    return function () {
                                        ko.tasks.cancel(handle);
                                        handle = ko.tasks.schedule(callback);
                                        target['notifySubscribers'](undefined, 'dirty');
                                    };
                                });
                            }
                        },

                        'notify': function (target, notifyWhen) {
                            target["equalityComparer"] = notifyWhen == "always" ? null : // null equalityComparer means to always notify
                            valuesArePrimitiveAndEqual;
                        }
                    };

                    var primitiveTypes = { 'undefined': 1, 'boolean': 1, 'number': 1, 'string': 1 };
                    function valuesArePrimitiveAndEqual(a, b) {
                        var oldValueIsPrimitive = a === null || typeof a in primitiveTypes;
                        return oldValueIsPrimitive ? a === b : false;
                    }

                    function throttle(callback, timeout) {
                        var timeoutInstance;
                        return function () {
                            if (!timeoutInstance) {
                                timeoutInstance = ko.utils.setTimeout(function () {
                                    timeoutInstance = undefined;
                                    callback();
                                }, timeout);
                            }
                        };
                    }

                    function debounce(callback, timeout) {
                        var timeoutInstance;
                        return function () {
                            clearTimeout(timeoutInstance);
                            timeoutInstance = ko.utils.setTimeout(callback, timeout);
                        };
                    }

                    function applyExtenders(requestedExtenders) {
                        var target = this;
                        if (requestedExtenders) {
                            ko.utils.objectForEach(requestedExtenders, function (key, value) {
                                var extenderHandler = ko.extenders[key];
                                if (typeof extenderHandler == 'function') {
                                    target = extenderHandler(target, value) || target;
                                }
                            });
                        }
                        return target;
                    }

                    ko.exportSymbol('extenders', ko.extenders);

                    ko.subscription = function (target, callback, disposeCallback) {
                        this._target = target;
                        this.callback = callback;
                        this.disposeCallback = disposeCallback;
                        this.isDisposed = false;
                        ko.exportProperty(this, 'dispose', this.dispose);
                    };
                    ko.subscription.prototype.dispose = function () {
                        this.isDisposed = true;
                        this.disposeCallback();
                    };

                    ko.subscribable = function () {
                        ko.utils.setPrototypeOfOrExtend(this, ko_subscribable_fn);
                        ko_subscribable_fn.init(this);
                    };

                    var defaultEvent = "change";

                    // Moved out of "limit" to avoid the extra closure
                    function limitNotifySubscribers(value, event) {
                        if (!event || event === defaultEvent) {
                            this._limitChange(value);
                        } else if (event === 'beforeChange') {
                            this._limitBeforeChange(value);
                        } else {
                            this._origNotifySubscribers(value, event);
                        }
                    }

                    var ko_subscribable_fn = {
                        init: function (instance) {
                            instance._subscriptions = {};
                            instance._versionNumber = 1;
                        },

                        subscribe: function (callback, callbackTarget, event) {
                            var self = this;

                            event = event || defaultEvent;
                            var boundCallback = callbackTarget ? callback.bind(callbackTarget) : callback;

                            var subscription = new ko.subscription(self, boundCallback, function () {
                                ko.utils.arrayRemoveItem(self._subscriptions[event], subscription);
                                if (self.afterSubscriptionRemove) self.afterSubscriptionRemove(event);
                            });

                            if (self.beforeSubscriptionAdd) self.beforeSubscriptionAdd(event);

                            if (!self._subscriptions[event]) self._subscriptions[event] = [];
                            self._subscriptions[event].push(subscription);

                            return subscription;
                        },

                        "notifySubscribers": function (valueToNotify, event) {
                            event = event || defaultEvent;
                            if (event === defaultEvent) {
                                this.updateVersion();
                            }
                            if (this.hasSubscriptionsForEvent(event)) {
                                try {
                                    ko.dependencyDetection.begin(); // Begin suppressing dependency detection (by setting the top frame to undefined)
                                    for (var a = this._subscriptions[event].slice(0), i = 0, subscription; subscription = a[i]; ++i) {
                                        // In case a subscription was disposed during the arrayForEach cycle, check
                                        // for isDisposed on each subscription before invoking its callback
                                        if (!subscription.isDisposed) subscription.callback(valueToNotify);
                                    }
                                } finally {
                                    ko.dependencyDetection.end(); // End suppressing dependency detection
                                }
                            }
                        },

                        getVersion: function () {
                            return this._versionNumber;
                        },

                        hasChanged: function (versionToCheck) {
                            return this.getVersion() !== versionToCheck;
                        },

                        updateVersion: function () {
                            ++this._versionNumber;
                        },

                        limit: function (limitFunction) {
                            var self = this,
                                selfIsObservable = ko.isObservable(self),
                                ignoreBeforeChange,
                                previousValue,
                                pendingValue,
                                beforeChange = 'beforeChange';

                            if (!self._origNotifySubscribers) {
                                self._origNotifySubscribers = self["notifySubscribers"];
                                self["notifySubscribers"] = limitNotifySubscribers;
                            }

                            var finish = limitFunction(function () {
                                self._notificationIsPending = false;

                                // If an observable provided a reference to itself, access it to get the latest value.
                                // This allows computed observables to delay calculating their value until needed.
                                if (selfIsObservable && pendingValue === self) {
                                    pendingValue = self();
                                }
                                ignoreBeforeChange = false;
                                if (self.isDifferent(previousValue, pendingValue)) {
                                    self._origNotifySubscribers(previousValue = pendingValue);
                                }
                            });

                            self._limitChange = function (value) {
                                self._notificationIsPending = ignoreBeforeChange = true;
                                pendingValue = value;
                                finish();
                            };
                            self._limitBeforeChange = function (value) {
                                if (!ignoreBeforeChange) {
                                    previousValue = value;
                                    self._origNotifySubscribers(value, beforeChange);
                                }
                            };
                        },

                        hasSubscriptionsForEvent: function (event) {
                            return this._subscriptions[event] && this._subscriptions[event].length;
                        },

                        getSubscriptionsCount: function (event) {
                            if (event) {
                                return this._subscriptions[event] && this._subscriptions[event].length || 0;
                            } else {
                                var total = 0;
                                ko.utils.objectForEach(this._subscriptions, function (eventName, subscriptions) {
                                    if (eventName !== 'dirty') total += subscriptions.length;
                                });
                                return total;
                            }
                        },

                        isDifferent: function (oldValue, newValue) {
                            return !this['equalityComparer'] || !this['equalityComparer'](oldValue, newValue);
                        },

                        extend: applyExtenders
                    };

                    ko.exportProperty(ko_subscribable_fn, 'subscribe', ko_subscribable_fn.subscribe);
                    ko.exportProperty(ko_subscribable_fn, 'extend', ko_subscribable_fn.extend);
                    ko.exportProperty(ko_subscribable_fn, 'getSubscriptionsCount', ko_subscribable_fn.getSubscriptionsCount);

                    // For browsers that support proto assignment, we overwrite the prototype of each
                    // observable instance. Since observables are functions, we need Function.prototype
                    // to still be in the prototype chain.
                    if (ko.utils.canSetPrototype) {
                        ko.utils.setPrototypeOf(ko_subscribable_fn, Function.prototype);
                    }

                    ko.subscribable['fn'] = ko_subscribable_fn;

                    ko.isSubscribable = function (instance) {
                        return instance != null && typeof instance.subscribe == "function" && typeof instance["notifySubscribers"] == "function";
                    };

                    ko.exportSymbol('subscribable', ko.subscribable);
                    ko.exportSymbol('isSubscribable', ko.isSubscribable);

                    ko.computedContext = ko.dependencyDetection = function () {
                        var outerFrames = [],
                            currentFrame,
                            lastId = 0;

                        // Return a unique ID that can be assigned to an observable for dependency tracking.
                        // Theoretically, you could eventually overflow the number storage size, resulting
                        // in duplicate IDs. But in JavaScript, the largest exact integral value is 2^53
                        // or 9,007,199,254,740,992. If you created 1,000,000 IDs per second, it would
                        // take over 285 years to reach that number.
                        // Reference http://blog.vjeux.com/2010/javascript/javascript-max_int-number-limits.html
                        function getId() {
                            return ++lastId;
                        }

                        function begin(options) {
                            outerFrames.push(currentFrame);
                            currentFrame = options;
                        }

                        function end() {
                            currentFrame = outerFrames.pop();
                        }

                        return {
                            begin: begin,

                            end: end,

                            registerDependency: function (subscribable) {
                                if (currentFrame) {
                                    if (!ko.isSubscribable(subscribable)) throw new Error("Only subscribable things can act as dependencies");
                                    currentFrame.callback.call(currentFrame.callbackTarget, subscribable, subscribable._id || (subscribable._id = getId()));
                                }
                            },

                            ignore: function (callback, callbackTarget, callbackArgs) {
                                try {
                                    begin();
                                    return callback.apply(callbackTarget, callbackArgs || []);
                                } finally {
                                    end();
                                }
                            },

                            getDependenciesCount: function () {
                                if (currentFrame) return currentFrame.computed.getDependenciesCount();
                            },

                            isInitial: function () {
                                if (currentFrame) return currentFrame.isInitial;
                            }
                        };
                    }();

                    ko.exportSymbol('computedContext', ko.computedContext);
                    ko.exportSymbol('computedContext.getDependenciesCount', ko.computedContext.getDependenciesCount);
                    ko.exportSymbol('computedContext.isInitial', ko.computedContext.isInitial);

                    ko.exportSymbol('ignoreDependencies', ko.ignoreDependencies = ko.dependencyDetection.ignore);
                    var observableLatestValue = ko.utils.createSymbolOrString('_latestValue');

                    ko.observable = function (initialValue) {
                        function observable() {
                            if (arguments.length > 0) {
                                // Write

                                // Ignore writes if the value hasn't changed
                                if (observable.isDifferent(observable[observableLatestValue], arguments[0])) {
                                    observable.valueWillMutate();
                                    observable[observableLatestValue] = arguments[0];
                                    observable.valueHasMutated();
                                }
                                return this; // Permits chained assignments
                            } else {
                                // Read
                                ko.dependencyDetection.registerDependency(observable); // The caller only needs to be notified of changes if they did a "read" operation
                                return observable[observableLatestValue];
                            }
                        }

                        observable[observableLatestValue] = initialValue;

                        // Inherit from 'subscribable'
                        if (!ko.utils.canSetPrototype) {
                            // 'subscribable' won't be on the prototype chain unless we put it there directly
                            ko.utils.extend(observable, ko.subscribable['fn']);
                        }
                        ko.subscribable['fn'].init(observable);

                        // Inherit from 'observable'
                        ko.utils.setPrototypeOfOrExtend(observable, observableFn);

                        if (ko.options['deferUpdates']) {
                            ko.extenders['deferred'](observable, true);
                        }

                        return observable;
                    };

                    // Define prototype for observables
                    var observableFn = {
                        'equalityComparer': valuesArePrimitiveAndEqual,
                        peek: function () {
                            return this[observableLatestValue];
                        },
                        valueHasMutated: function () {
                            this['notifySubscribers'](this[observableLatestValue]);
                        },
                        valueWillMutate: function () {
                            this['notifySubscribers'](this[observableLatestValue], 'beforeChange');
                        }
                    };

                    // Note that for browsers that don't support proto assignment, the
                    // inheritance chain is created manually in the ko.observable constructor
                    if (ko.utils.canSetPrototype) {
                        ko.utils.setPrototypeOf(observableFn, ko.subscribable['fn']);
                    }

                    var protoProperty = ko.observable.protoProperty = '__ko_proto__';
                    observableFn[protoProperty] = ko.observable;

                    ko.hasPrototype = function (instance, prototype) {
                        if (instance === null || instance === undefined || instance[protoProperty] === undefined) return false;
                        if (instance[protoProperty] === prototype) return true;
                        return ko.hasPrototype(instance[protoProperty], prototype); // Walk the prototype chain
                    };

                    ko.isObservable = function (instance) {
                        return ko.hasPrototype(instance, ko.observable);
                    };
                    ko.isWriteableObservable = function (instance) {
                        // Observable
                        if (typeof instance == 'function' && instance[protoProperty] === ko.observable) return true;
                        // Writeable dependent observable
                        if (typeof instance == 'function' && instance[protoProperty] === ko.dependentObservable && instance.hasWriteFunction) return true;
                        // Anything else
                        return false;
                    };

                    ko.exportSymbol('observable', ko.observable);
                    ko.exportSymbol('isObservable', ko.isObservable);
                    ko.exportSymbol('isWriteableObservable', ko.isWriteableObservable);
                    ko.exportSymbol('isWritableObservable', ko.isWriteableObservable);
                    ko.exportSymbol('observable.fn', observableFn);
                    ko.exportProperty(observableFn, 'peek', observableFn.peek);
                    ko.exportProperty(observableFn, 'valueHasMutated', observableFn.valueHasMutated);
                    ko.exportProperty(observableFn, 'valueWillMutate', observableFn.valueWillMutate);
                    ko.observableArray = function (initialValues) {
                        initialValues = initialValues || [];

                        if (typeof initialValues != 'object' || !('length' in initialValues)) throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");

                        var result = ko.observable(initialValues);
                        ko.utils.setPrototypeOfOrExtend(result, ko.observableArray['fn']);
                        return result.extend({ 'trackArrayChanges': true });
                    };

                    ko.observableArray['fn'] = {
                        'remove': function (valueOrPredicate) {
                            var underlyingArray = this.peek();
                            var removedValues = [];
                            var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) {
                                return value === valueOrPredicate;
                            };
                            for (var i = 0; i < underlyingArray.length; i++) {
                                var value = underlyingArray[i];
                                if (predicate(value)) {
                                    if (removedValues.length === 0) {
                                        this.valueWillMutate();
                                    }
                                    removedValues.push(value);
                                    underlyingArray.splice(i, 1);
                                    i--;
                                }
                            }
                            if (removedValues.length) {
                                this.valueHasMutated();
                            }
                            return removedValues;
                        },

                        'removeAll': function (arrayOfValues) {
                            // If you passed zero args, we remove everything
                            if (arrayOfValues === undefined) {
                                var underlyingArray = this.peek();
                                var allValues = underlyingArray.slice(0);
                                this.valueWillMutate();
                                underlyingArray.splice(0, underlyingArray.length);
                                this.valueHasMutated();
                                return allValues;
                            }
                            // If you passed an arg, we interpret it as an array of entries to remove
                            if (!arrayOfValues) return [];
                            return this['remove'](function (value) {
                                return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
                            });
                        },

                        'destroy': function (valueOrPredicate) {
                            var underlyingArray = this.peek();
                            var predicate = typeof valueOrPredicate == "function" && !ko.isObservable(valueOrPredicate) ? valueOrPredicate : function (value) {
                                return value === valueOrPredicate;
                            };
                            this.valueWillMutate();
                            for (var i = underlyingArray.length - 1; i >= 0; i--) {
                                var value = underlyingArray[i];
                                if (predicate(value)) underlyingArray[i]["_destroy"] = true;
                            }
                            this.valueHasMutated();
                        },

                        'destroyAll': function (arrayOfValues) {
                            // If you passed zero args, we destroy everything
                            if (arrayOfValues === undefined) return this['destroy'](function () {
                                return true;
                            });

                            // If you passed an arg, we interpret it as an array of entries to destroy
                            if (!arrayOfValues) return [];
                            return this['destroy'](function (value) {
                                return ko.utils.arrayIndexOf(arrayOfValues, value) >= 0;
                            });
                        },

                        'indexOf': function (item) {
                            var underlyingArray = this();
                            return ko.utils.arrayIndexOf(underlyingArray, item);
                        },

                        'replace': function (oldItem, newItem) {
                            var index = this['indexOf'](oldItem);
                            if (index >= 0) {
                                this.valueWillMutate();
                                this.peek()[index] = newItem;
                                this.valueHasMutated();
                            }
                        }
                    };

                    // Note that for browsers that don't support proto assignment, the
                    // inheritance chain is created manually in the ko.observableArray constructor
                    if (ko.utils.canSetPrototype) {
                        ko.utils.setPrototypeOf(ko.observableArray['fn'], ko.observable['fn']);
                    }

                    // Populate ko.observableArray.fn with read/write functions from native arrays
                    // Important: Do not add any additional functions here that may reasonably be used to *read* data from the array
                    // because we'll eval them without causing subscriptions, so ko.computed output could end up getting stale
                    ko.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (methodName) {
                        ko.observableArray['fn'][methodName] = function () {
                            // Use "peek" to avoid creating a subscription in any computed that we're executing in the context of
                            // (for consistency with mutating regular observables)
                            var underlyingArray = this.peek();
                            this.valueWillMutate();
                            this.cacheDiffForKnownOperation(underlyingArray, methodName, arguments);
                            var methodCallResult = underlyingArray[methodName].apply(underlyingArray, arguments);
                            this.valueHasMutated();
                            // The native sort and reverse methods return a reference to the array, but it makes more sense to return the observable array instead.
                            return methodCallResult === underlyingArray ? this : methodCallResult;
                        };
                    });

                    // Populate ko.observableArray.fn with read-only functions from native arrays
                    ko.utils.arrayForEach(["slice"], function (methodName) {
                        ko.observableArray['fn'][methodName] = function () {
                            var underlyingArray = this();
                            return underlyingArray[methodName].apply(underlyingArray, arguments);
                        };
                    });

                    ko.exportSymbol('observableArray', ko.observableArray);
                    var arrayChangeEventName = 'arrayChange';
                    ko.extenders['trackArrayChanges'] = function (target, options) {
                        // Use the provided options--each call to trackArrayChanges overwrites the previously set options
                        target.compareArrayOptions = {};
                        if (options && typeof options == "object") {
                            ko.utils.extend(target.compareArrayOptions, options);
                        }
                        target.compareArrayOptions['sparse'] = true;

                        // Only modify the target observable once
                        if (target.cacheDiffForKnownOperation) {
                            return;
                        }
                        var trackingChanges = false,
                            cachedDiff = null,
                            arrayChangeSubscription,
                            pendingNotifications = 0,
                            underlyingNotifySubscribersFunction,
                            underlyingBeforeSubscriptionAddFunction = target.beforeSubscriptionAdd,
                            underlyingAfterSubscriptionRemoveFunction = target.afterSubscriptionRemove;

                        // Watch "subscribe" calls, and for array change events, ensure change tracking is enabled
                        target.beforeSubscriptionAdd = function (event) {
                            if (underlyingBeforeSubscriptionAddFunction) underlyingBeforeSubscriptionAddFunction.call(target, event);
                            if (event === arrayChangeEventName) {
                                trackChanges();
                            }
                        };
                        // Watch "dispose" calls, and for array change events, ensure change tracking is disabled when all are disposed
                        target.afterSubscriptionRemove = function (event) {
                            if (underlyingAfterSubscriptionRemoveFunction) underlyingAfterSubscriptionRemoveFunction.call(target, event);
                            if (event === arrayChangeEventName && !target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                                if (underlyingNotifySubscribersFunction) {
                                    target['notifySubscribers'] = underlyingNotifySubscribersFunction;
                                    underlyingNotifySubscribersFunction = undefined;
                                }
                                arrayChangeSubscription.dispose();
                                trackingChanges = false;
                            }
                        };

                        function trackChanges() {
                            // Calling 'trackChanges' multiple times is the same as calling it once
                            if (trackingChanges) {
                                return;
                            }

                            trackingChanges = true;

                            // Intercept "notifySubscribers" to track how many times it was called.
                            underlyingNotifySubscribersFunction = target['notifySubscribers'];
                            target['notifySubscribers'] = function (valueToNotify, event) {
                                if (!event || event === defaultEvent) {
                                    ++pendingNotifications;
                                }
                                return underlyingNotifySubscribersFunction.apply(this, arguments);
                            };

                            // Each time the array changes value, capture a clone so that on the next
                            // change it's possible to produce a diff
                            var previousContents = [].concat(target.peek() || []);
                            cachedDiff = null;
                            arrayChangeSubscription = target.subscribe(function (currentContents) {
                                // Make a copy of the current contents and ensure it's an array
                                currentContents = [].concat(currentContents || []);

                                // Compute the diff and issue notifications, but only if someone is listening
                                if (target.hasSubscriptionsForEvent(arrayChangeEventName)) {
                                    var changes = getChanges(previousContents, currentContents);
                                }

                                // Eliminate references to the old, removed items, so they can be GCed
                                previousContents = currentContents;
                                cachedDiff = null;
                                pendingNotifications = 0;

                                if (changes && changes.length) {
                                    target['notifySubscribers'](changes, arrayChangeEventName);
                                }
                            });
                        }

                        function getChanges(previousContents, currentContents) {
                            // We try to re-use cached diffs.
                            // The scenarios where pendingNotifications > 1 are when using rate-limiting or the Deferred Updates
                            // plugin, which without this check would not be compatible with arrayChange notifications. Normally,
                            // notifications are issued immediately so we wouldn't be queueing up more than one.
                            if (!cachedDiff || pendingNotifications > 1) {
                                cachedDiff = ko.utils.compareArrays(previousContents, currentContents, target.compareArrayOptions);
                            }

                            return cachedDiff;
                        }

                        target.cacheDiffForKnownOperation = function (rawArray, operationName, args) {
                            // Only run if we're currently tracking changes for this observable array
                            // and there aren't any pending deferred notifications.
                            if (!trackingChanges || pendingNotifications) {
                                return;
                            }
                            var diff = [],
                                arrayLength = rawArray.length,
                                argsLength = args.length,
                                offset = 0;

                            function pushDiff(status, value, index) {
                                return diff[diff.length] = { 'status': status, 'value': value, 'index': index };
                            }
                            switch (operationName) {
                                case 'push':
                                    offset = arrayLength;
                                case 'unshift':
                                    for (var index = 0; index < argsLength; index++) {
                                        pushDiff('added', args[index], offset + index);
                                    }
                                    break;

                                case 'pop':
                                    offset = arrayLength - 1;
                                case 'shift':
                                    if (arrayLength) {
                                        pushDiff('deleted', rawArray[offset], offset);
                                    }
                                    break;

                                case 'splice':
                                    // Negative start index means 'from end of array'. After that we clamp to [0...arrayLength].
                                    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                                    var startIndex = Math.min(Math.max(0, args[0] < 0 ? arrayLength + args[0] : args[0]), arrayLength),
                                        endDeleteIndex = argsLength === 1 ? arrayLength : Math.min(startIndex + (args[1] || 0), arrayLength),
                                        endAddIndex = startIndex + argsLength - 2,
                                        endIndex = Math.max(endDeleteIndex, endAddIndex),
                                        additions = [],
                                        deletions = [];
                                    for (var index = startIndex, argsIndex = 2; index < endIndex; ++index, ++argsIndex) {
                                        if (index < endDeleteIndex) deletions.push(pushDiff('deleted', rawArray[index], index));
                                        if (index < endAddIndex) additions.push(pushDiff('added', args[argsIndex], index));
                                    }
                                    ko.utils.findMovesInArrayComparison(deletions, additions);
                                    break;

                                default:
                                    return;
                            }
                            cachedDiff = diff;
                        };
                    };
                    var computedState = ko.utils.createSymbolOrString('_state');

                    ko.computed = ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {
                        if (typeof evaluatorFunctionOrOptions === "object") {
                            // Single-parameter syntax - everything is on this "options" param
                            options = evaluatorFunctionOrOptions;
                        } else {
                            // Multi-parameter syntax - construct the options according to the params passed
                            options = options || {};
                            if (evaluatorFunctionOrOptions) {
                                options["read"] = evaluatorFunctionOrOptions;
                            }
                        }
                        if (typeof options["read"] != "function") throw Error("Pass a function that returns the value of the ko.computed");

                        var writeFunction = options["write"];
                        var state = {
                            latestValue: undefined,
                            isStale: true,
                            isBeingEvaluated: false,
                            suppressDisposalUntilDisposeWhenReturnsFalse: false,
                            isDisposed: false,
                            pure: false,
                            isSleeping: false,
                            readFunction: options["read"],
                            evaluatorFunctionTarget: evaluatorFunctionTarget || options["owner"],
                            disposeWhenNodeIsRemoved: options["disposeWhenNodeIsRemoved"] || options.disposeWhenNodeIsRemoved || null,
                            disposeWhen: options["disposeWhen"] || options.disposeWhen,
                            domNodeDisposalCallback: null,
                            dependencyTracking: {},
                            dependenciesCount: 0,
                            evaluationTimeoutInstance: null
                        };

                        function computedObservable() {
                            if (arguments.length > 0) {
                                if (typeof writeFunction === "function") {
                                    // Writing a value
                                    writeFunction.apply(state.evaluatorFunctionTarget, arguments);
                                } else {
                                    throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                }
                                return this; // Permits chained assignments
                            } else {
                                // Reading the value
                                ko.dependencyDetection.registerDependency(computedObservable);
                                if (state.isStale || state.isSleeping && computedObservable.haveDependenciesChanged()) {
                                    computedObservable.evaluateImmediate();
                                }
                                return state.latestValue;
                            }
                        }

                        computedObservable[computedState] = state;
                        computedObservable.hasWriteFunction = typeof writeFunction === "function";

                        // Inherit from 'subscribable'
                        if (!ko.utils.canSetPrototype) {
                            // 'subscribable' won't be on the prototype chain unless we put it there directly
                            ko.utils.extend(computedObservable, ko.subscribable['fn']);
                        }
                        ko.subscribable['fn'].init(computedObservable);

                        // Inherit from 'computed'
                        ko.utils.setPrototypeOfOrExtend(computedObservable, computedFn);

                        if (options['pure']) {
                            state.pure = true;
                            state.isSleeping = true; // Starts off sleeping; will awake on the first subscription
                            ko.utils.extend(computedObservable, pureComputedOverrides);
                        } else if (options['deferEvaluation']) {
                            ko.utils.extend(computedObservable, deferEvaluationOverrides);
                        }

                        if (ko.options['deferUpdates']) {
                            ko.extenders['deferred'](computedObservable, true);
                        }

                        if (DEBUG) {
                            // #1731 - Aid debugging by exposing the computed's options
                            computedObservable["_options"] = options;
                        }

                        if (state.disposeWhenNodeIsRemoved) {
                            // Since this computed is associated with a DOM node, and we don't want to dispose the computed
                            // until the DOM node is *removed* from the document (as opposed to never having been in the document),
                            // we'll prevent disposal until "disposeWhen" first returns false.
                            state.suppressDisposalUntilDisposeWhenReturnsFalse = true;

                            // disposeWhenNodeIsRemoved: true can be used to opt into the "only dispose after first false result"
                            // behaviour even if there's no specific node to watch. In that case, clear the option so we don't try
                            // to watch for a non-node's disposal. This technique is intended for KO's internal use only and shouldn't
                            // be documented or used by application code, as it's likely to change in a future version of KO.
                            if (!state.disposeWhenNodeIsRemoved.nodeType) {
                                state.disposeWhenNodeIsRemoved = null;
                            }
                        }

                        // Evaluate, unless sleeping or deferEvaluation is true
                        if (!state.isSleeping && !options['deferEvaluation']) {
                            computedObservable.evaluateImmediate();
                        }

                        // Attach a DOM node disposal callback so that the computed will be proactively disposed as soon as the node is
                        // removed using ko.removeNode. But skip if isActive is false (there will never be any dependencies to dispose).
                        if (state.disposeWhenNodeIsRemoved && computedObservable.isActive()) {
                            ko.utils.domNodeDisposal.addDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback = function () {
                                computedObservable.dispose();
                            });
                        }

                        return computedObservable;
                    };

                    // Utility function that disposes a given dependencyTracking entry
                    function computedDisposeDependencyCallback(id, entryToDispose) {
                        if (entryToDispose !== null && entryToDispose.dispose) {
                            entryToDispose.dispose();
                        }
                    }

                    // This function gets called each time a dependency is detected while evaluating a computed.
                    // It's factored out as a shared function to avoid creating unnecessary function instances during evaluation.
                    function computedBeginDependencyDetectionCallback(subscribable, id) {
                        var computedObservable = this.computedObservable,
                            state = computedObservable[computedState];
                        if (!state.isDisposed) {
                            if (this.disposalCount && this.disposalCandidates[id]) {
                                // Don't want to dispose this subscription, as it's still being used
                                computedObservable.addDependencyTracking(id, subscribable, this.disposalCandidates[id]);
                                this.disposalCandidates[id] = null; // No need to actually delete the property - disposalCandidates is a transient object anyway
                                --this.disposalCount;
                            } else if (!state.dependencyTracking[id]) {
                                // Brand new subscription - add it
                                computedObservable.addDependencyTracking(id, subscribable, state.isSleeping ? { _target: subscribable } : computedObservable.subscribeToDependency(subscribable));
                            }
                        }
                    }

                    var computedFn = {
                        "equalityComparer": valuesArePrimitiveAndEqual,
                        getDependenciesCount: function () {
                            return this[computedState].dependenciesCount;
                        },
                        addDependencyTracking: function (id, target, trackingObj) {
                            if (this[computedState].pure && target === this) {
                                throw Error("A 'pure' computed must not be called recursively");
                            }

                            this[computedState].dependencyTracking[id] = trackingObj;
                            trackingObj._order = this[computedState].dependenciesCount++;
                            trackingObj._version = target.getVersion();
                        },
                        haveDependenciesChanged: function () {
                            var id,
                                dependency,
                                dependencyTracking = this[computedState].dependencyTracking;
                            for (id in dependencyTracking) {
                                if (dependencyTracking.hasOwnProperty(id)) {
                                    dependency = dependencyTracking[id];
                                    if (dependency._target.hasChanged(dependency._version)) {
                                        return true;
                                    }
                                }
                            }
                        },
                        markDirty: function () {
                            // Process "dirty" events if we can handle delayed notifications
                            if (this._evalDelayed && !this[computedState].isBeingEvaluated) {
                                this._evalDelayed();
                            }
                        },
                        isActive: function () {
                            return this[computedState].isStale || this[computedState].dependenciesCount > 0;
                        },
                        respondToChange: function () {
                            // Ignore "change" events if we've already scheduled a delayed notification
                            if (!this._notificationIsPending) {
                                this.evaluatePossiblyAsync();
                            }
                        },
                        subscribeToDependency: function (target) {
                            if (target._deferUpdates && !this[computedState].disposeWhenNodeIsRemoved) {
                                var dirtySub = target.subscribe(this.markDirty, this, 'dirty'),
                                    changeSub = target.subscribe(this.respondToChange, this);
                                return {
                                    _target: target,
                                    dispose: function () {
                                        dirtySub.dispose();
                                        changeSub.dispose();
                                    }
                                };
                            } else {
                                return target.subscribe(this.evaluatePossiblyAsync, this);
                            }
                        },
                        evaluatePossiblyAsync: function () {
                            var computedObservable = this,
                                throttleEvaluationTimeout = computedObservable['throttleEvaluation'];
                            if (throttleEvaluationTimeout && throttleEvaluationTimeout >= 0) {
                                clearTimeout(this[computedState].evaluationTimeoutInstance);
                                this[computedState].evaluationTimeoutInstance = ko.utils.setTimeout(function () {
                                    computedObservable.evaluateImmediate(true /*notifyChange*/);
                                }, throttleEvaluationTimeout);
                            } else if (computedObservable._evalDelayed) {
                                computedObservable._evalDelayed();
                            } else {
                                computedObservable.evaluateImmediate(true /*notifyChange*/);
                            }
                        },
                        evaluateImmediate: function (notifyChange) {
                            var computedObservable = this,
                                state = computedObservable[computedState],
                                disposeWhen = state.disposeWhen,
                                changed = false;

                            if (state.isBeingEvaluated) {
                                // If the evaluation of a ko.computed causes side effects, it's possible that it will trigger its own re-evaluation.
                                // This is not desirable (it's hard for a developer to realise a chain of dependencies might cause this, and they almost
                                // certainly didn't intend infinite re-evaluations). So, for predictability, we simply prevent ko.computeds from causing
                                // their own re-evaluation. Further discussion at https://github.com/SteveSanderson/knockout/pull/387
                                return;
                            }

                            // Do not evaluate (and possibly capture new dependencies) if disposed
                            if (state.isDisposed) {
                                return;
                            }

                            if (state.disposeWhenNodeIsRemoved && !ko.utils.domNodeIsAttachedToDocument(state.disposeWhenNodeIsRemoved) || disposeWhen && disposeWhen()) {
                                // See comment above about suppressDisposalUntilDisposeWhenReturnsFalse
                                if (!state.suppressDisposalUntilDisposeWhenReturnsFalse) {
                                    computedObservable.dispose();
                                    return;
                                }
                            } else {
                                // It just did return false, so we can stop suppressing now
                                state.suppressDisposalUntilDisposeWhenReturnsFalse = false;
                            }

                            state.isBeingEvaluated = true;
                            try {
                                changed = this.evaluateImmediate_CallReadWithDependencyDetection(notifyChange);
                            } finally {
                                state.isBeingEvaluated = false;
                            }

                            if (!state.dependenciesCount) {
                                computedObservable.dispose();
                            }

                            return changed;
                        },
                        evaluateImmediate_CallReadWithDependencyDetection: function (notifyChange) {
                            // This function is really just part of the evaluateImmediate logic. You would never call it from anywhere else.
                            // Factoring it out into a separate function means it can be independent of the try/catch block in evaluateImmediate,
                            // which contributes to saving about 40% off the CPU overhead of computed evaluation (on V8 at least).

                            var computedObservable = this,
                                state = computedObservable[computedState],
                                changed = false;

                            // Initially, we assume that none of the subscriptions are still being used (i.e., all are candidates for disposal).
                            // Then, during evaluation, we cross off any that are in fact still being used.
                            var isInitial = state.pure ? undefined : !state.dependenciesCount,
                                // If we're evaluating when there are no previous dependencies, it must be the first time
                            dependencyDetectionContext = {
                                computedObservable: computedObservable,
                                disposalCandidates: state.dependencyTracking,
                                disposalCount: state.dependenciesCount
                            };

                            ko.dependencyDetection.begin({
                                callbackTarget: dependencyDetectionContext,
                                callback: computedBeginDependencyDetectionCallback,
                                computed: computedObservable,
                                isInitial: isInitial
                            });

                            state.dependencyTracking = {};
                            state.dependenciesCount = 0;

                            var newValue = this.evaluateImmediate_CallReadThenEndDependencyDetection(state, dependencyDetectionContext);

                            if (computedObservable.isDifferent(state.latestValue, newValue)) {
                                if (!state.isSleeping) {
                                    computedObservable["notifySubscribers"](state.latestValue, "beforeChange");
                                }

                                state.latestValue = newValue;
                                if (DEBUG) computedObservable._latestValue = newValue;

                                if (state.isSleeping) {
                                    computedObservable.updateVersion();
                                } else if (notifyChange) {
                                    computedObservable["notifySubscribers"](state.latestValue);
                                }

                                changed = true;
                            }

                            if (isInitial) {
                                computedObservable["notifySubscribers"](state.latestValue, "awake");
                            }

                            return changed;
                        },
                        evaluateImmediate_CallReadThenEndDependencyDetection: function (state, dependencyDetectionContext) {
                            // This function is really part of the evaluateImmediate_CallReadWithDependencyDetection logic.
                            // You'd never call it from anywhere else. Factoring it out means that evaluateImmediate_CallReadWithDependencyDetection
                            // can be independent of try/finally blocks, which contributes to saving about 40% off the CPU
                            // overhead of computed evaluation (on V8 at least).

                            try {
                                var readFunction = state.readFunction;
                                return state.evaluatorFunctionTarget ? readFunction.call(state.evaluatorFunctionTarget) : readFunction();
                            } finally {
                                ko.dependencyDetection.end();

                                // For each subscription no longer being used, remove it from the active subscriptions list and dispose it
                                if (dependencyDetectionContext.disposalCount && !state.isSleeping) {
                                    ko.utils.objectForEach(dependencyDetectionContext.disposalCandidates, computedDisposeDependencyCallback);
                                }

                                state.isStale = false;
                            }
                        },
                        peek: function () {
                            // Peek won't re-evaluate, except while the computed is sleeping or to get the initial value when "deferEvaluation" is set.
                            var state = this[computedState];
                            if (state.isStale && !state.dependenciesCount || state.isSleeping && this.haveDependenciesChanged()) {
                                this.evaluateImmediate();
                            }
                            return state.latestValue;
                        },
                        limit: function (limitFunction) {
                            // Override the limit function with one that delays evaluation as well
                            ko.subscribable['fn'].limit.call(this, limitFunction);
                            this._evalDelayed = function () {
                                this._limitBeforeChange(this[computedState].latestValue);

                                this[computedState].isStale = true; // Mark as dirty

                                // Pass the observable to the "limit" code, which will access it when
                                // it's time to do the notification.
                                this._limitChange(this);
                            };
                        },
                        dispose: function () {
                            var state = this[computedState];
                            if (!state.isSleeping && state.dependencyTracking) {
                                ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                                    if (dependency.dispose) dependency.dispose();
                                });
                            }
                            if (state.disposeWhenNodeIsRemoved && state.domNodeDisposalCallback) {
                                ko.utils.domNodeDisposal.removeDisposeCallback(state.disposeWhenNodeIsRemoved, state.domNodeDisposalCallback);
                            }
                            state.dependencyTracking = null;
                            state.dependenciesCount = 0;
                            state.isDisposed = true;
                            state.isStale = false;
                            state.isSleeping = false;
                            state.disposeWhenNodeIsRemoved = null;
                        }
                    };

                    var pureComputedOverrides = {
                        beforeSubscriptionAdd: function (event) {
                            // If asleep, wake up the computed by subscribing to any dependencies.
                            var computedObservable = this,
                                state = computedObservable[computedState];
                            if (!state.isDisposed && state.isSleeping && event == 'change') {
                                state.isSleeping = false;
                                if (state.isStale || computedObservable.haveDependenciesChanged()) {
                                    state.dependencyTracking = null;
                                    state.dependenciesCount = 0;
                                    state.isStale = true;
                                    if (computedObservable.evaluateImmediate()) {
                                        computedObservable.updateVersion();
                                    }
                                } else {
                                    // First put the dependencies in order
                                    var dependeciesOrder = [];
                                    ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                                        dependeciesOrder[dependency._order] = id;
                                    });
                                    // Next, subscribe to each one
                                    ko.utils.arrayForEach(dependeciesOrder, function (id, order) {
                                        var dependency = state.dependencyTracking[id],
                                            subscription = computedObservable.subscribeToDependency(dependency._target);
                                        subscription._order = order;
                                        subscription._version = dependency._version;
                                        state.dependencyTracking[id] = subscription;
                                    });
                                }
                                if (!state.isDisposed) {
                                    // test since evaluating could trigger disposal
                                    computedObservable["notifySubscribers"](state.latestValue, "awake");
                                }
                            }
                        },
                        afterSubscriptionRemove: function (event) {
                            var state = this[computedState];
                            if (!state.isDisposed && event == 'change' && !this.hasSubscriptionsForEvent('change')) {
                                ko.utils.objectForEach(state.dependencyTracking, function (id, dependency) {
                                    if (dependency.dispose) {
                                        state.dependencyTracking[id] = {
                                            _target: dependency._target,
                                            _order: dependency._order,
                                            _version: dependency._version
                                        };
                                        dependency.dispose();
                                    }
                                });
                                state.isSleeping = true;
                                this["notifySubscribers"](undefined, "asleep");
                            }
                        },
                        getVersion: function () {
                            // Because a pure computed is not automatically updated while it is sleeping, we can't
                            // simply return the version number. Instead, we check if any of the dependencies have
                            // changed and conditionally re-evaluate the computed observable.
                            var state = this[computedState];
                            if (state.isSleeping && (state.isStale || this.haveDependenciesChanged())) {
                                this.evaluateImmediate();
                            }
                            return ko.subscribable['fn'].getVersion.call(this);
                        }
                    };

                    var deferEvaluationOverrides = {
                        beforeSubscriptionAdd: function (event) {
                            // This will force a computed with deferEvaluation to evaluate when the first subscription is registered.
                            if (event == 'change' || event == 'beforeChange') {
                                this.peek();
                            }
                        }
                    };

                    // Note that for browsers that don't support proto assignment, the
                    // inheritance chain is created manually in the ko.computed constructor
                    if (ko.utils.canSetPrototype) {
                        ko.utils.setPrototypeOf(computedFn, ko.subscribable['fn']);
                    }

                    // Set the proto chain values for ko.hasPrototype
                    var protoProp = ko.observable.protoProperty; // == "__ko_proto__"
                    ko.computed[protoProp] = ko.observable;
                    computedFn[protoProp] = ko.computed;

                    ko.isComputed = function (instance) {
                        return ko.hasPrototype(instance, ko.computed);
                    };

                    ko.isPureComputed = function (instance) {
                        return ko.hasPrototype(instance, ko.computed) && instance[computedState] && instance[computedState].pure;
                    };

                    ko.exportSymbol('computed', ko.computed);
                    ko.exportSymbol('dependentObservable', ko.computed); // export ko.dependentObservable for backwards compatibility (1.x)
                    ko.exportSymbol('isComputed', ko.isComputed);
                    ko.exportSymbol('isPureComputed', ko.isPureComputed);
                    ko.exportSymbol('computed.fn', computedFn);
                    ko.exportProperty(computedFn, 'peek', computedFn.peek);
                    ko.exportProperty(computedFn, 'dispose', computedFn.dispose);
                    ko.exportProperty(computedFn, 'isActive', computedFn.isActive);
                    ko.exportProperty(computedFn, 'getDependenciesCount', computedFn.getDependenciesCount);

                    ko.pureComputed = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget) {
                        if (typeof evaluatorFunctionOrOptions === 'function') {
                            return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget, { 'pure': true });
                        } else {
                            evaluatorFunctionOrOptions = ko.utils.extend({}, evaluatorFunctionOrOptions); // make a copy of the parameter object
                            evaluatorFunctionOrOptions['pure'] = true;
                            return ko.computed(evaluatorFunctionOrOptions, evaluatorFunctionTarget);
                        }
                    };
                    ko.exportSymbol('pureComputed', ko.pureComputed);

                    (function () {
                        var maxNestedObservableDepth = 10; // Escape the (unlikely) pathalogical case where an observable's current value is itself (or similar reference cycle)

                        ko.toJS = function (rootObject) {
                            if (arguments.length == 0) throw new Error("When calling ko.toJS, pass the object you want to convert.");

                            // We just unwrap everything at every level in the object graph
                            return mapJsObjectGraph(rootObject, function (valueToMap) {
                                // Loop because an observable's value might in turn be another observable wrapper
                                for (var i = 0; ko.isObservable(valueToMap) && i < maxNestedObservableDepth; i++) valueToMap = valueToMap();
                                return valueToMap;
                            });
                        };

                        ko.toJSON = function (rootObject, replacer, space) {
                            // replacer and space are optional
                            var plainJavaScriptObject = ko.toJS(rootObject);
                            return ko.utils.stringifyJson(plainJavaScriptObject, replacer, space);
                        };

                        function mapJsObjectGraph(rootObject, mapInputCallback, visitedObjects) {
                            visitedObjects = visitedObjects || new objectLookup();

                            rootObject = mapInputCallback(rootObject);
                            var canHaveProperties = typeof rootObject == "object" && rootObject !== null && rootObject !== undefined && !(rootObject instanceof RegExp) && !(rootObject instanceof Date) && !(rootObject instanceof String) && !(rootObject instanceof Number) && !(rootObject instanceof Boolean);
                            if (!canHaveProperties) return rootObject;

                            var outputProperties = rootObject instanceof Array ? [] : {};
                            visitedObjects.save(rootObject, outputProperties);

                            visitPropertiesOrArrayEntries(rootObject, function (indexer) {
                                var propertyValue = mapInputCallback(rootObject[indexer]);

                                switch (typeof propertyValue) {
                                    case "boolean":
                                    case "number":
                                    case "string":
                                    case "function":
                                        outputProperties[indexer] = propertyValue;
                                        break;
                                    case "object":
                                    case "undefined":
                                        var previouslyMappedValue = visitedObjects.get(propertyValue);
                                        outputProperties[indexer] = previouslyMappedValue !== undefined ? previouslyMappedValue : mapJsObjectGraph(propertyValue, mapInputCallback, visitedObjects);
                                        break;
                                }
                            });

                            return outputProperties;
                        }

                        function visitPropertiesOrArrayEntries(rootObject, visitorCallback) {
                            if (rootObject instanceof Array) {
                                for (var i = 0; i < rootObject.length; i++) visitorCallback(i);

                                // For arrays, also respect toJSON property for custom mappings (fixes #278)
                                if (typeof rootObject['toJSON'] == 'function') visitorCallback('toJSON');
                            } else {
                                for (var propertyName in rootObject) {
                                    visitorCallback(propertyName);
                                }
                            }
                        };

                        function objectLookup() {
                            this.keys = [];
                            this.values = [];
                        };

                        objectLookup.prototype = {
                            constructor: objectLookup,
                            save: function (key, value) {
                                var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
                                if (existingIndex >= 0) this.values[existingIndex] = value;else {
                                    this.keys.push(key);
                                    this.values.push(value);
                                }
                            },
                            get: function (key) {
                                var existingIndex = ko.utils.arrayIndexOf(this.keys, key);
                                return existingIndex >= 0 ? this.values[existingIndex] : undefined;
                            }
                        };
                    })();

                    ko.exportSymbol('toJS', ko.toJS);
                    ko.exportSymbol('toJSON', ko.toJSON);
                    (function () {
                        var hasDomDataExpandoProperty = '__ko__hasDomDataOptionValue__';

                        // Normally, SELECT elements and their OPTIONs can only take value of type 'string' (because the values
                        // are stored on DOM attributes). ko.selectExtensions provides a way for SELECTs/OPTIONs to have values
                        // that are arbitrary objects. This is very convenient when implementing things like cascading dropdowns.
                        ko.selectExtensions = {
                            readValue: function (element) {
                                switch (ko.utils.tagNameLower(element)) {
                                    case 'option':
                                        if (element[hasDomDataExpandoProperty] === true) return ko.utils.domData.get(element, ko.bindingHandlers.options.optionValueDomDataKey);
                                        return ko.utils.ieVersion <= 7 ? element.getAttributeNode('value') && element.getAttributeNode('value').specified ? element.value : element.text : element.value;
                                    case 'select':
                                        return element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) : undefined;
                                    default:
                                        return element.value;
                                }
                            },

                            writeValue: function (element, value, allowUnset) {
                                switch (ko.utils.tagNameLower(element)) {
                                    case 'option':
                                        switch (typeof value) {
                                            case "string":
                                                ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, undefined);
                                                if (hasDomDataExpandoProperty in element) {
                                                    // IE <= 8 throws errors if you delete non-existent properties from a DOM node
                                                    delete element[hasDomDataExpandoProperty];
                                                }
                                                element.value = value;
                                                break;
                                            default:
                                                // Store arbitrary object using DomData
                                                ko.utils.domData.set(element, ko.bindingHandlers.options.optionValueDomDataKey, value);
                                                element[hasDomDataExpandoProperty] = true;

                                                // Special treatment of numbers is just for backward compatibility. KO 1.2.1 wrote numerical values to element.value.
                                                element.value = typeof value === "number" ? value : "";
                                                break;
                                        }
                                        break;
                                    case 'select':
                                        if (value === "" || value === null) // A blank string or null value will select the caption
                                            value = undefined;
                                        var selection = -1;
                                        for (var i = 0, n = element.options.length, optionValue; i < n; ++i) {
                                            optionValue = ko.selectExtensions.readValue(element.options[i]);
                                            // Include special check to handle selecting a caption with a blank string value
                                            if (optionValue == value || optionValue == "" && value === undefined) {
                                                selection = i;
                                                break;
                                            }
                                        }
                                        if (allowUnset || selection >= 0 || value === undefined && element.size > 1) {
                                            element.selectedIndex = selection;
                                        }
                                        break;
                                    default:
                                        if (value === null || value === undefined) value = "";
                                        element.value = value;
                                        break;
                                }
                            }
                        };
                    })();

                    ko.exportSymbol('selectExtensions', ko.selectExtensions);
                    ko.exportSymbol('selectExtensions.readValue', ko.selectExtensions.readValue);
                    ko.exportSymbol('selectExtensions.writeValue', ko.selectExtensions.writeValue);
                    ko.expressionRewriting = function () {
                        var javaScriptReservedWords = ["true", "false", "null", "undefined"];

                        // Matches something that can be assigned to--either an isolated identifier or something ending with a property accessor
                        // This is designed to be simple and avoid false negatives, but could produce false positives (e.g., a+b.c).
                        // This also will not properly handle nested brackets (e.g., obj1[obj2['prop']]; see #911).
                        var javaScriptAssignmentTarget = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i;

                        function getWriteableValue(expression) {
                            if (ko.utils.arrayIndexOf(javaScriptReservedWords, expression) >= 0) return false;
                            var match = expression.match(javaScriptAssignmentTarget);
                            return match === null ? false : match[1] ? 'Object(' + match[1] + ')' + match[2] : expression;
                        }

                        // The following regular expressions will be used to split an object-literal string into tokens

                        // These two match strings, either with double quotes or single quotes
                        var stringDouble = '"(?:[^"\\\\]|\\\\.)*"',
                            stringSingle = "'(?:[^'\\\\]|\\\\.)*'",

                        // Matches a regular expression (text enclosed by slashes), but will also match sets of divisions
                        // as a regular expression (this is handled by the parsing loop below).
                        stringRegexp = '/(?:[^/\\\\]|\\\\.)*/\w*',

                        // These characters have special meaning to the parser and must not appear in the middle of a
                        // token, except as part of a string.
                        specials = ',"\'{}()/:[\\]',

                        // Match text (at least two characters) that does not contain any of the above special characters,
                        // although some of the special characters are allowed to start it (all but the colon and comma).
                        // The text can contain spaces, but leading or trailing spaces are skipped.
                        everyThingElse = '[^\\s:,/][^' + specials + ']*[^\\s' + specials + ']',

                        // Match any non-space character not matched already. This will match colons and commas, since they're
                        // not matched by "everyThingElse", but will also match any other single character that wasn't already
                        // matched (for example: in "a: 1, b: 2", each of the non-space characters will be matched by oneNotSpace).
                        oneNotSpace = '[^\\s]',


                        // Create the actual regular expression by or-ing the above strings. The order is important.
                        bindingToken = RegExp(stringDouble + '|' + stringSingle + '|' + stringRegexp + '|' + everyThingElse + '|' + oneNotSpace, 'g'),


                        // Match end of previous token to determine whether a slash is a division or regex.
                        divisionLookBehind = /[\])"'A-Za-z0-9_$]+$/,
                            keywordRegexLookBehind = { 'in': 1, 'return': 1, 'typeof': 1 };

                        function parseObjectLiteral(objectLiteralString) {
                            // Trim leading and trailing spaces from the string
                            var str = ko.utils.stringTrim(objectLiteralString);

                            // Trim braces '{' surrounding the whole object literal
                            if (str.charCodeAt(0) === 123) str = str.slice(1, -1);

                            // Split into tokens
                            var result = [],
                                toks = str.match(bindingToken),
                                key,
                                values = [],
                                depth = 0;

                            if (toks) {
                                // Append a comma so that we don't need a separate code block to deal with the last item
                                toks.push(',');

                                for (var i = 0, tok; tok = toks[i]; ++i) {
                                    var c = tok.charCodeAt(0);
                                    // A comma signals the end of a key/value pair if depth is zero
                                    if (c === 44) {
                                        // ","
                                        if (depth <= 0) {
                                            result.push(key && values.length ? { key: key, value: values.join('') } : { 'unknown': key || values.join('') });
                                            key = depth = 0;
                                            values = [];
                                            continue;
                                        }
                                        // Simply skip the colon that separates the name and value
                                    } else if (c === 58) {
                                        // ":"
                                        if (!depth && !key && values.length === 1) {
                                            key = values.pop();
                                            continue;
                                        }
                                        // A set of slashes is initially matched as a regular expression, but could be division
                                    } else if (c === 47 && i && tok.length > 1) {
                                        // "/"
                                        // Look at the end of the previous token to determine if the slash is actually division
                                        var match = toks[i - 1].match(divisionLookBehind);
                                        if (match && !keywordRegexLookBehind[match[0]]) {
                                            // The slash is actually a division punctuator; re-parse the remainder of the string (not including the slash)
                                            str = str.substr(str.indexOf(tok) + 1);
                                            toks = str.match(bindingToken);
                                            toks.push(',');
                                            i = -1;
                                            // Continue with just the slash
                                            tok = '/';
                                        }
                                        // Increment depth for parentheses, braces, and brackets so that interior commas are ignored
                                    } else if (c === 40 || c === 123 || c === 91) {
                                        // '(', '{', '['
                                        ++depth;
                                    } else if (c === 41 || c === 125 || c === 93) {
                                        // ')', '}', ']'
                                        --depth;
                                        // The key will be the first token; if it's a string, trim the quotes
                                    } else if (!key && !values.length && (c === 34 || c === 39)) {
                                        // '"', "'"
                                        tok = tok.slice(1, -1);
                                    }
                                    values.push(tok);
                                }
                            }
                            return result;
                        }

                        // Two-way bindings include a write function that allow the handler to update the value even if it's not an observable.
                        var twoWayBindings = {};

                        function preProcessBindings(bindingsStringOrKeyValueArray, bindingOptions) {
                            bindingOptions = bindingOptions || {};

                            function processKeyValue(key, val) {
                                var writableVal;
                                function callPreprocessHook(obj) {
                                    return obj && obj['preprocess'] ? val = obj['preprocess'](val, key, processKeyValue) : true;
                                }
                                if (!bindingParams) {
                                    if (!callPreprocessHook(ko['getBindingHandler'](key))) return;

                                    if (twoWayBindings[key] && (writableVal = getWriteableValue(val))) {
                                        // For two-way bindings, provide a write method in case the value
                                        // isn't a writable observable.
                                        propertyAccessorResultStrings.push("'" + key + "':function(_z){" + writableVal + "=_z}");
                                    }
                                }
                                // Values are wrapped in a function so that each value can be accessed independently
                                if (makeValueAccessors) {
                                    val = 'function(){return ' + val + ' }';
                                }
                                resultStrings.push("'" + key + "':" + val);
                            }

                            var resultStrings = [],
                                propertyAccessorResultStrings = [],
                                makeValueAccessors = bindingOptions['valueAccessors'],
                                bindingParams = bindingOptions['bindingParams'],
                                keyValueArray = typeof bindingsStringOrKeyValueArray === "string" ? parseObjectLiteral(bindingsStringOrKeyValueArray) : bindingsStringOrKeyValueArray;

                            ko.utils.arrayForEach(keyValueArray, function (keyValue) {
                                processKeyValue(keyValue.key || keyValue['unknown'], keyValue.value);
                            });

                            if (propertyAccessorResultStrings.length) processKeyValue('_ko_property_writers', "{" + propertyAccessorResultStrings.join(",") + " }");

                            return resultStrings.join(",");
                        }

                        return {
                            bindingRewriteValidators: [],

                            twoWayBindings: twoWayBindings,

                            parseObjectLiteral: parseObjectLiteral,

                            preProcessBindings: preProcessBindings,

                            keyValueArrayContainsKey: function (keyValueArray, key) {
                                for (var i = 0; i < keyValueArray.length; i++) if (keyValueArray[i]['key'] == key) return true;
                                return false;
                            },

                            // Internal, private KO utility for updating model properties from within bindings
                            // property:            If the property being updated is (or might be) an observable, pass it here
                            //                      If it turns out to be a writable observable, it will be written to directly
                            // allBindings:         An object with a get method to retrieve bindings in the current execution context.
                            //                      This will be searched for a '_ko_property_writers' property in case you're writing to a non-observable
                            // key:                 The key identifying the property to be written. Example: for { hasFocus: myValue }, write to 'myValue' by specifying the key 'hasFocus'
                            // value:               The value to be written
                            // checkIfDifferent:    If true, and if the property being written is a writable observable, the value will only be written if
                            //                      it is !== existing value on that writable observable
                            writeValueToProperty: function (property, allBindings, key, value, checkIfDifferent) {
                                if (!property || !ko.isObservable(property)) {
                                    var propWriters = allBindings.get('_ko_property_writers');
                                    if (propWriters && propWriters[key]) propWriters[key](value);
                                } else if (ko.isWriteableObservable(property) && (!checkIfDifferent || property.peek() !== value)) {
                                    property(value);
                                }
                            }
                        };
                    }();

                    ko.exportSymbol('expressionRewriting', ko.expressionRewriting);
                    ko.exportSymbol('expressionRewriting.bindingRewriteValidators', ko.expressionRewriting.bindingRewriteValidators);
                    ko.exportSymbol('expressionRewriting.parseObjectLiteral', ko.expressionRewriting.parseObjectLiteral);
                    ko.exportSymbol('expressionRewriting.preProcessBindings', ko.expressionRewriting.preProcessBindings);

                    // Making bindings explicitly declare themselves as "two way" isn't ideal in the long term (it would be better if
                    // all bindings could use an official 'property writer' API without needing to declare that they might). However,
                    // since this is not, and has never been, a public API (_ko_property_writers was never documented), it's acceptable
                    // as an internal implementation detail in the short term.
                    // For those developers who rely on _ko_property_writers in their custom bindings, we expose _twoWayBindings as an
                    // undocumented feature that makes it relatively easy to upgrade to KO 3.0. However, this is still not an official
                    // public API, and we reserve the right to remove it at any time if we create a real public property writers API.
                    ko.exportSymbol('expressionRewriting._twoWayBindings', ko.expressionRewriting.twoWayBindings);

                    // For backward compatibility, define the following aliases. (Previously, these function names were misleading because
                    // they referred to JSON specifically, even though they actually work with arbitrary JavaScript object literal expressions.)
                    ko.exportSymbol('jsonExpressionRewriting', ko.expressionRewriting);
                    ko.exportSymbol('jsonExpressionRewriting.insertPropertyAccessorsIntoJson', ko.expressionRewriting.preProcessBindings);
                    (function () {
                        // "Virtual elements" is an abstraction on top of the usual DOM API which understands the notion that comment nodes
                        // may be used to represent hierarchy (in addition to the DOM's natural hierarchy).
                        // If you call the DOM-manipulating functions on ko.virtualElements, you will be able to read and write the state
                        // of that virtual hierarchy
                        //
                        // The point of all this is to support containerless templates (e.g., <!-- ko foreach:someCollection -->blah<!-- /ko -->)
                        // without having to scatter special cases all over the binding and templating code.

                        // IE 9 cannot reliably read the "nodeValue" property of a comment node (see https://github.com/SteveSanderson/knockout/issues/186)
                        // but it does give them a nonstandard alternative property called "text" that it can read reliably. Other browsers don't have that property.
                        // So, use node.text where available, and node.nodeValue elsewhere
                        var commentNodesHaveTextProperty = document && document.createComment("test").text === "<!--test-->";

                        var startCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/;
                        var endCommentRegex = commentNodesHaveTextProperty ? /^<!--\s*\/ko\s*-->$/ : /^\s*\/ko\s*$/;
                        var htmlTagsWithOptionallyClosingChildren = { 'ul': true, 'ol': true };

                        function isStartComment(node) {
                            return node.nodeType == 8 && startCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
                        }

                        function isEndComment(node) {
                            return node.nodeType == 8 && endCommentRegex.test(commentNodesHaveTextProperty ? node.text : node.nodeValue);
                        }

                        function getVirtualChildren(startComment, allowUnbalanced) {
                            var currentNode = startComment;
                            var depth = 1;
                            var children = [];
                            while (currentNode = currentNode.nextSibling) {
                                if (isEndComment(currentNode)) {
                                    depth--;
                                    if (depth === 0) return children;
                                }

                                children.push(currentNode);

                                if (isStartComment(currentNode)) depth++;
                            }
                            if (!allowUnbalanced) throw new Error("Cannot find closing comment tag to match: " + startComment.nodeValue);
                            return null;
                        }

                        function getMatchingEndComment(startComment, allowUnbalanced) {
                            var allVirtualChildren = getVirtualChildren(startComment, allowUnbalanced);
                            if (allVirtualChildren) {
                                if (allVirtualChildren.length > 0) return allVirtualChildren[allVirtualChildren.length - 1].nextSibling;
                                return startComment.nextSibling;
                            } else return null; // Must have no matching end comment, and allowUnbalanced is true
                        }

                        function getUnbalancedChildTags(node) {
                            // e.g., from <div>OK</div><!-- ko blah --><span>Another</span>, returns: <!-- ko blah --><span>Another</span>
                            //       from <div>OK</div><!-- /ko --><!-- /ko -->,             returns: <!-- /ko --><!-- /ko -->
                            var childNode = node.firstChild,
                                captureRemaining = null;
                            if (childNode) {
                                do {
                                    if (captureRemaining) // We already hit an unbalanced node and are now just scooping up all subsequent nodes
                                        captureRemaining.push(childNode);else if (isStartComment(childNode)) {
                                        var matchingEndComment = getMatchingEndComment(childNode, /* allowUnbalanced: */true);
                                        if (matchingEndComment) // It's a balanced tag, so skip immediately to the end of this virtual set
                                            childNode = matchingEndComment;else captureRemaining = [childNode]; // It's unbalanced, so start capturing from this point
                                    } else if (isEndComment(childNode)) {
                                        captureRemaining = [childNode]; // It's unbalanced (if it wasn't, we'd have skipped over it already), so start capturing
                                    }
                                } while (childNode = childNode.nextSibling);
                            }
                            return captureRemaining;
                        }

                        ko.virtualElements = {
                            allowedBindings: {},

                            childNodes: function (node) {
                                return isStartComment(node) ? getVirtualChildren(node) : node.childNodes;
                            },

                            emptyNode: function (node) {
                                if (!isStartComment(node)) ko.utils.emptyDomNode(node);else {
                                    var virtualChildren = ko.virtualElements.childNodes(node);
                                    for (var i = 0, j = virtualChildren.length; i < j; i++) ko.removeNode(virtualChildren[i]);
                                }
                            },

                            setDomNodeChildren: function (node, childNodes) {
                                if (!isStartComment(node)) ko.utils.setDomNodeChildren(node, childNodes);else {
                                    ko.virtualElements.emptyNode(node);
                                    var endCommentNode = node.nextSibling; // Must be the next sibling, as we just emptied the children
                                    for (var i = 0, j = childNodes.length; i < j; i++) endCommentNode.parentNode.insertBefore(childNodes[i], endCommentNode);
                                }
                            },

                            prepend: function (containerNode, nodeToPrepend) {
                                if (!isStartComment(containerNode)) {
                                    if (containerNode.firstChild) containerNode.insertBefore(nodeToPrepend, containerNode.firstChild);else containerNode.appendChild(nodeToPrepend);
                                } else {
                                    // Start comments must always have a parent and at least one following sibling (the end comment)
                                    containerNode.parentNode.insertBefore(nodeToPrepend, containerNode.nextSibling);
                                }
                            },

                            insertAfter: function (containerNode, nodeToInsert, insertAfterNode) {
                                if (!insertAfterNode) {
                                    ko.virtualElements.prepend(containerNode, nodeToInsert);
                                } else if (!isStartComment(containerNode)) {
                                    // Insert after insertion point
                                    if (insertAfterNode.nextSibling) containerNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);else containerNode.appendChild(nodeToInsert);
                                } else {
                                    // Children of start comments must always have a parent and at least one following sibling (the end comment)
                                    containerNode.parentNode.insertBefore(nodeToInsert, insertAfterNode.nextSibling);
                                }
                            },

                            firstChild: function (node) {
                                if (!isStartComment(node)) return node.firstChild;
                                if (!node.nextSibling || isEndComment(node.nextSibling)) return null;
                                return node.nextSibling;
                            },

                            nextSibling: function (node) {
                                if (isStartComment(node)) node = getMatchingEndComment(node);
                                if (node.nextSibling && isEndComment(node.nextSibling)) return null;
                                return node.nextSibling;
                            },

                            hasBindingValue: isStartComment,

                            virtualNodeBindingValue: function (node) {
                                var regexMatch = (commentNodesHaveTextProperty ? node.text : node.nodeValue).match(startCommentRegex);
                                return regexMatch ? regexMatch[1] : null;
                            },

                            normaliseVirtualElementDomStructure: function (elementVerified) {
                                // Workaround for https://github.com/SteveSanderson/knockout/issues/155
                                // (IE <= 8 or IE 9 quirks mode parses your HTML weirdly, treating closing </li> tags as if they don't exist, thereby moving comment nodes
                                // that are direct descendants of <ul> into the preceding <li>)
                                if (!htmlTagsWithOptionallyClosingChildren[ko.utils.tagNameLower(elementVerified)]) return;

                                // Scan immediate children to see if they contain unbalanced comment tags. If they do, those comment tags
                                // must be intended to appear *after* that child, so move them there.
                                var childNode = elementVerified.firstChild;
                                if (childNode) {
                                    do {
                                        if (childNode.nodeType === 1) {
                                            var unbalancedTags = getUnbalancedChildTags(childNode);
                                            if (unbalancedTags) {
                                                // Fix up the DOM by moving the unbalanced tags to where they most likely were intended to be placed - *after* the child
                                                var nodeToInsertBefore = childNode.nextSibling;
                                                for (var i = 0; i < unbalancedTags.length; i++) {
                                                    if (nodeToInsertBefore) elementVerified.insertBefore(unbalancedTags[i], nodeToInsertBefore);else elementVerified.appendChild(unbalancedTags[i]);
                                                }
                                            }
                                        }
                                    } while (childNode = childNode.nextSibling);
                                }
                            }
                        };
                    })();
                    ko.exportSymbol('virtualElements', ko.virtualElements);
                    ko.exportSymbol('virtualElements.allowedBindings', ko.virtualElements.allowedBindings);
                    ko.exportSymbol('virtualElements.emptyNode', ko.virtualElements.emptyNode);
                    //ko.exportSymbol('virtualElements.firstChild', ko.virtualElements.firstChild);     // firstChild is not minified
                    ko.exportSymbol('virtualElements.insertAfter', ko.virtualElements.insertAfter);
                    //ko.exportSymbol('virtualElements.nextSibling', ko.virtualElements.nextSibling);   // nextSibling is not minified
                    ko.exportSymbol('virtualElements.prepend', ko.virtualElements.prepend);
                    ko.exportSymbol('virtualElements.setDomNodeChildren', ko.virtualElements.setDomNodeChildren);
                    (function () {
                        var defaultBindingAttributeName = "data-bind";

                        ko.bindingProvider = function () {
                            this.bindingCache = {};
                        };

                        ko.utils.extend(ko.bindingProvider.prototype, {
                            'nodeHasBindings': function (node) {
                                switch (node.nodeType) {
                                    case 1:
                                        // Element
                                        return node.getAttribute(defaultBindingAttributeName) != null || ko.components['getComponentNameForNode'](node);
                                    case 8:
                                        // Comment node
                                        return ko.virtualElements.hasBindingValue(node);
                                    default:
                                        return false;
                                }
                            },

                            'getBindings': function (node, bindingContext) {
                                var bindingsString = this['getBindingsString'](node, bindingContext),
                                    parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node) : null;
                                return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */false);
                            },

                            'getBindingAccessors': function (node, bindingContext) {
                                var bindingsString = this['getBindingsString'](node, bindingContext),
                                    parsedBindings = bindingsString ? this['parseBindingsString'](bindingsString, bindingContext, node, { 'valueAccessors': true }) : null;
                                return ko.components.addBindingsForCustomElement(parsedBindings, node, bindingContext, /* valueAccessors */true);
                            },

                            // The following function is only used internally by this default provider.
                            // It's not part of the interface definition for a general binding provider.
                            'getBindingsString': function (node, bindingContext) {
                                switch (node.nodeType) {
                                    case 1:
                                        return node.getAttribute(defaultBindingAttributeName); // Element
                                    case 8:
                                        return ko.virtualElements.virtualNodeBindingValue(node); // Comment node
                                    default:
                                        return null;
                                }
                            },

                            // The following function is only used internally by this default provider.
                            // It's not part of the interface definition for a general binding provider.
                            'parseBindingsString': function (bindingsString, bindingContext, node, options) {
                                try {
                                    var bindingFunction = createBindingsStringEvaluatorViaCache(bindingsString, this.bindingCache, options);
                                    return bindingFunction(bindingContext, node);
                                } catch (ex) {
                                    ex.message = "Unable to parse bindings.\nBindings value: " + bindingsString + "\nMessage: " + ex.message;
                                    throw ex;
                                }
                            }
                        });

                        ko.bindingProvider['instance'] = new ko.bindingProvider();

                        function createBindingsStringEvaluatorViaCache(bindingsString, cache, options) {
                            var cacheKey = bindingsString + (options && options['valueAccessors'] || '');
                            return cache[cacheKey] || (cache[cacheKey] = createBindingsStringEvaluator(bindingsString, options));
                        }

                        function createBindingsStringEvaluator(bindingsString, options) {
                            // Build the source for a function that evaluates "expression"
                            // For each scope variable, add an extra level of "with" nesting
                            // Example result: with(sc1) { with(sc0) { return (expression) } }
                            var rewrittenBindings = ko.expressionRewriting.preProcessBindings(bindingsString, options),
                                functionBody = "with($context){with($data||{}){return{" + rewrittenBindings + "}}}";
                            return new Function("$context", "$element", functionBody);
                        }
                    })();

                    ko.exportSymbol('bindingProvider', ko.bindingProvider);
                    (function () {
                        ko.bindingHandlers = {};

                        // The following element types will not be recursed into during binding.
                        var bindingDoesNotRecurseIntoElementTypes = {
                            // Don't want bindings that operate on text nodes to mutate <script> and <textarea> contents,
                            // because it's unexpected and a potential XSS issue.
                            // Also bindings should not operate on <template> elements since this breaks in Internet Explorer
                            // and because such elements' contents are always intended to be bound in a different context
                            // from where they appear in the document.
                            'script': true,
                            'textarea': true,
                            'template': true
                        };

                        // Use an overridable method for retrieving binding handlers so that a plugins may support dynamically created handlers
                        ko['getBindingHandler'] = function (bindingKey) {
                            return ko.bindingHandlers[bindingKey];
                        };

                        // The ko.bindingContext constructor is only called directly to create the root context. For child
                        // contexts, use bindingContext.createChildContext or bindingContext.extend.
                        ko.bindingContext = function (dataItemOrAccessor, parentContext, dataItemAlias, extendCallback, options) {

                            // The binding context object includes static properties for the current, parent, and root view models.
                            // If a view model is actually stored in an observable, the corresponding binding context object, and
                            // any child contexts, must be updated when the view model is changed.
                            function updateContext() {
                                // Most of the time, the context will directly get a view model object, but if a function is given,
                                // we call the function to retrieve the view model. If the function accesses any observables or returns
                                // an observable, the dependency is tracked, and those observables can later cause the binding
                                // context to be updated.
                                var dataItemOrObservable = isFunc ? dataItemOrAccessor() : dataItemOrAccessor,
                                    dataItem = ko.utils.unwrapObservable(dataItemOrObservable);

                                if (parentContext) {
                                    // When a "parent" context is given, register a dependency on the parent context. Thus whenever the
                                    // parent context is updated, this context will also be updated.
                                    if (parentContext._subscribable) parentContext._subscribable();

                                    // Copy $root and any custom properties from the parent context
                                    ko.utils.extend(self, parentContext);

                                    // Because the above copy overwrites our own properties, we need to reset them.
                                    self._subscribable = subscribable;
                                } else {
                                    self['$parents'] = [];
                                    self['$root'] = dataItem;

                                    // Export 'ko' in the binding context so it will be available in bindings and templates
                                    // even if 'ko' isn't exported as a global, such as when using an AMD loader.
                                    // See https://github.com/SteveSanderson/knockout/issues/490
                                    self['ko'] = ko;
                                }
                                self['$rawData'] = dataItemOrObservable;
                                self['$data'] = dataItem;
                                if (dataItemAlias) self[dataItemAlias] = dataItem;

                                // The extendCallback function is provided when creating a child context or extending a context.
                                // It handles the specific actions needed to finish setting up the binding context. Actions in this
                                // function could also add dependencies to this binding context.
                                if (extendCallback) extendCallback(self, parentContext, dataItem);

                                return self['$data'];
                            }
                            function disposeWhen() {
                                return nodes && !ko.utils.anyDomNodeIsAttachedToDocument(nodes);
                            }

                            var self = this,
                                isFunc = typeof dataItemOrAccessor == "function" && !ko.isObservable(dataItemOrAccessor),
                                nodes,
                                subscribable;

                            if (options && options['exportDependencies']) {
                                // The "exportDependencies" option means that the calling code will track any dependencies and re-create
                                // the binding context when they change.
                                updateContext();
                            } else {
                                subscribable = ko.dependentObservable(updateContext, null, { disposeWhen: disposeWhen, disposeWhenNodeIsRemoved: true });

                                // At this point, the binding context has been initialized, and the "subscribable" computed observable is
                                // subscribed to any observables that were accessed in the process. If there is nothing to track, the
                                // computed will be inactive, and we can safely throw it away. If it's active, the computed is stored in
                                // the context object.
                                if (subscribable.isActive()) {
                                    self._subscribable = subscribable;

                                    // Always notify because even if the model ($data) hasn't changed, other context properties might have changed
                                    subscribable['equalityComparer'] = null;

                                    // We need to be able to dispose of this computed observable when it's no longer needed. This would be
                                    // easy if we had a single node to watch, but binding contexts can be used by many different nodes, and
                                    // we cannot assume that those nodes have any relation to each other. So instead we track any node that
                                    // the context is attached to, and dispose the computed when all of those nodes have been cleaned.

                                    // Add properties to *subscribable* instead of *self* because any properties added to *self* may be overwritten on updates
                                    nodes = [];
                                    subscribable._addNode = function (node) {
                                        nodes.push(node);
                                        ko.utils.domNodeDisposal.addDisposeCallback(node, function (node) {
                                            ko.utils.arrayRemoveItem(nodes, node);
                                            if (!nodes.length) {
                                                subscribable.dispose();
                                                self._subscribable = subscribable = undefined;
                                            }
                                        });
                                    };
                                }
                            }
                        };

                        // Extend the binding context hierarchy with a new view model object. If the parent context is watching
                        // any observables, the new child context will automatically get a dependency on the parent context.
                        // But this does not mean that the $data value of the child context will also get updated. If the child
                        // view model also depends on the parent view model, you must provide a function that returns the correct
                        // view model on each update.
                        ko.bindingContext.prototype['createChildContext'] = function (dataItemOrAccessor, dataItemAlias, extendCallback, options) {
                            return new ko.bindingContext(dataItemOrAccessor, this, dataItemAlias, function (self, parentContext) {
                                // Extend the context hierarchy by setting the appropriate pointers
                                self['$parentContext'] = parentContext;
                                self['$parent'] = parentContext['$data'];
                                self['$parents'] = (parentContext['$parents'] || []).slice(0);
                                self['$parents'].unshift(self['$parent']);
                                if (extendCallback) extendCallback(self);
                            }, options);
                        };

                        // Extend the binding context with new custom properties. This doesn't change the context hierarchy.
                        // Similarly to "child" contexts, provide a function here to make sure that the correct values are set
                        // when an observable view model is updated.
                        ko.bindingContext.prototype['extend'] = function (properties) {
                            // If the parent context references an observable view model, "_subscribable" will always be the
                            // latest view model object. If not, "_subscribable" isn't set, and we can use the static "$data" value.
                            return new ko.bindingContext(this._subscribable || this['$data'], this, null, function (self, parentContext) {
                                // This "child" context doesn't directly track a parent observable view model,
                                // so we need to manually set the $rawData value to match the parent.
                                self['$rawData'] = parentContext['$rawData'];
                                ko.utils.extend(self, typeof properties == "function" ? properties() : properties);
                            });
                        };

                        ko.bindingContext.prototype.createStaticChildContext = function (dataItemOrAccessor, dataItemAlias) {
                            return this['createChildContext'](dataItemOrAccessor, dataItemAlias, null, { "exportDependencies": true });
                        };

                        // Returns the valueAccesor function for a binding value
                        function makeValueAccessor(value) {
                            return function () {
                                return value;
                            };
                        }

                        // Returns the value of a valueAccessor function
                        function evaluateValueAccessor(valueAccessor) {
                            return valueAccessor();
                        }

                        // Given a function that returns bindings, create and return a new object that contains
                        // binding value-accessors functions. Each accessor function calls the original function
                        // so that it always gets the latest value and all dependencies are captured. This is used
                        // by ko.applyBindingsToNode and getBindingsAndMakeAccessors.
                        function makeAccessorsFromFunction(callback) {
                            return ko.utils.objectMap(ko.dependencyDetection.ignore(callback), function (value, key) {
                                return function () {
                                    return callback()[key];
                                };
                            });
                        }

                        // Given a bindings function or object, create and return a new object that contains
                        // binding value-accessors functions. This is used by ko.applyBindingsToNode.
                        function makeBindingAccessors(bindings, context, node) {
                            if (typeof bindings === 'function') {
                                return makeAccessorsFromFunction(bindings.bind(null, context, node));
                            } else {
                                return ko.utils.objectMap(bindings, makeValueAccessor);
                            }
                        }

                        // This function is used if the binding provider doesn't include a getBindingAccessors function.
                        // It must be called with 'this' set to the provider instance.
                        function getBindingsAndMakeAccessors(node, context) {
                            return makeAccessorsFromFunction(this['getBindings'].bind(this, node, context));
                        }

                        function validateThatBindingIsAllowedForVirtualElements(bindingName) {
                            var validator = ko.virtualElements.allowedBindings[bindingName];
                            if (!validator) throw new Error("The binding '" + bindingName + "' cannot be used with virtual elements");
                        }

                        function applyBindingsToDescendantsInternal(bindingContext, elementOrVirtualElement, bindingContextsMayDifferFromDomParentElement) {
                            var currentChild,
                                nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement),
                                provider = ko.bindingProvider['instance'],
                                preprocessNode = provider['preprocessNode'];

                            // Preprocessing allows a binding provider to mutate a node before bindings are applied to it. For example it's
                            // possible to insert new siblings after it, and/or replace the node with a different one. This can be used to
                            // implement custom binding syntaxes, such as {{ value }} for string interpolation, or custom element types that
                            // trigger insertion of <template> contents at that point in the document.
                            if (preprocessNode) {
                                while (currentChild = nextInQueue) {
                                    nextInQueue = ko.virtualElements.nextSibling(currentChild);
                                    preprocessNode.call(provider, currentChild);
                                }
                                // Reset nextInQueue for the next loop
                                nextInQueue = ko.virtualElements.firstChild(elementOrVirtualElement);
                            }

                            while (currentChild = nextInQueue) {
                                // Keep a record of the next child *before* applying bindings, in case the binding removes the current child from its position
                                nextInQueue = ko.virtualElements.nextSibling(currentChild);
                                applyBindingsToNodeAndDescendantsInternal(bindingContext, currentChild, bindingContextsMayDifferFromDomParentElement);
                            }
                        }

                        function applyBindingsToNodeAndDescendantsInternal(bindingContext, nodeVerified, bindingContextMayDifferFromDomParentElement) {
                            var shouldBindDescendants = true;

                            // Perf optimisation: Apply bindings only if...
                            // (1) We need to store the binding context on this node (because it may differ from the DOM parent node's binding context)
                            //     Note that we can't store binding contexts on non-elements (e.g., text nodes), as IE doesn't allow expando properties for those
                            // (2) It might have bindings (e.g., it has a data-bind attribute, or it's a marker for a containerless template)
                            var isElement = nodeVerified.nodeType === 1;
                            if (isElement) // Workaround IE <= 8 HTML parsing weirdness
                                ko.virtualElements.normaliseVirtualElementDomStructure(nodeVerified);

                            var shouldApplyBindings = isElement && bindingContextMayDifferFromDomParentElement || // Case (1)
                            ko.bindingProvider['instance']['nodeHasBindings'](nodeVerified); // Case (2)
                            if (shouldApplyBindings) shouldBindDescendants = applyBindingsToNodeInternal(nodeVerified, null, bindingContext, bindingContextMayDifferFromDomParentElement)['shouldBindDescendants'];

                            if (shouldBindDescendants && !bindingDoesNotRecurseIntoElementTypes[ko.utils.tagNameLower(nodeVerified)]) {
                                // We're recursing automatically into (real or virtual) child nodes without changing binding contexts. So,
                                //  * For children of a *real* element, the binding context is certainly the same as on their DOM .parentNode,
                                //    hence bindingContextsMayDifferFromDomParentElement is false
                                //  * For children of a *virtual* element, we can't be sure. Evaluating .parentNode on those children may
                                //    skip over any number of intermediate virtual elements, any of which might define a custom binding context,
                                //    hence bindingContextsMayDifferFromDomParentElement is true
                                applyBindingsToDescendantsInternal(bindingContext, nodeVerified, /* bindingContextsMayDifferFromDomParentElement: */!isElement);
                            }
                        }

                        var boundElementDomDataKey = ko.utils.domData.nextKey();

                        function topologicalSortBindings(bindings) {
                            // Depth-first sort
                            var result = [],
                                // The list of key/handler pairs that we will return
                            bindingsConsidered = {},
                                // A temporary record of which bindings are already in 'result'
                            cyclicDependencyStack = []; // Keeps track of a depth-search so that, if there's a cycle, we know which bindings caused it
                            ko.utils.objectForEach(bindings, function pushBinding(bindingKey) {
                                if (!bindingsConsidered[bindingKey]) {
                                    var binding = ko['getBindingHandler'](bindingKey);
                                    if (binding) {
                                        // First add dependencies (if any) of the current binding
                                        if (binding['after']) {
                                            cyclicDependencyStack.push(bindingKey);
                                            ko.utils.arrayForEach(binding['after'], function (bindingDependencyKey) {
                                                if (bindings[bindingDependencyKey]) {
                                                    if (ko.utils.arrayIndexOf(cyclicDependencyStack, bindingDependencyKey) !== -1) {
                                                        throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + cyclicDependencyStack.join(", "));
                                                    } else {
                                                        pushBinding(bindingDependencyKey);
                                                    }
                                                }
                                            });
                                            cyclicDependencyStack.length--;
                                        }
                                        // Next add the current binding
                                        result.push({ key: bindingKey, handler: binding });
                                    }
                                    bindingsConsidered[bindingKey] = true;
                                }
                            });

                            return result;
                        }

                        function applyBindingsToNodeInternal(node, sourceBindings, bindingContext, bindingContextMayDifferFromDomParentElement) {
                            // Prevent multiple applyBindings calls for the same node, except when a binding value is specified
                            var alreadyBound = ko.utils.domData.get(node, boundElementDomDataKey);
                            if (!sourceBindings) {
                                if (alreadyBound) {
                                    throw Error("You cannot apply bindings multiple times to the same element.");
                                }
                                ko.utils.domData.set(node, boundElementDomDataKey, true);
                            }

                            // Optimization: Don't store the binding context on this node if it's definitely the same as on node.parentNode, because
                            // we can easily recover it just by scanning up the node's ancestors in the DOM
                            // (note: here, parent node means "real DOM parent" not "virtual parent", as there's no O(1) way to find the virtual parent)
                            if (!alreadyBound && bindingContextMayDifferFromDomParentElement) ko.storedBindingContextForNode(node, bindingContext);

                            // Use bindings if given, otherwise fall back on asking the bindings provider to give us some bindings
                            var bindings;
                            if (sourceBindings && typeof sourceBindings !== 'function') {
                                bindings = sourceBindings;
                            } else {
                                var provider = ko.bindingProvider['instance'],
                                    getBindings = provider['getBindingAccessors'] || getBindingsAndMakeAccessors;

                                // Get the binding from the provider within a computed observable so that we can update the bindings whenever
                                // the binding context is updated or if the binding provider accesses observables.
                                var bindingsUpdater = ko.dependentObservable(function () {
                                    bindings = sourceBindings ? sourceBindings(bindingContext, node) : getBindings.call(provider, node, bindingContext);
                                    // Register a dependency on the binding context to support observable view models.
                                    if (bindings && bindingContext._subscribable) bindingContext._subscribable();
                                    return bindings;
                                }, null, { disposeWhenNodeIsRemoved: node });

                                if (!bindings || !bindingsUpdater.isActive()) bindingsUpdater = null;
                            }

                            var bindingHandlerThatControlsDescendantBindings;
                            if (bindings) {
                                // Return the value accessor for a given binding. When bindings are static (won't be updated because of a binding
                                // context update), just return the value accessor from the binding. Otherwise, return a function that always gets
                                // the latest binding value and registers a dependency on the binding updater.
                                var getValueAccessor = bindingsUpdater ? function (bindingKey) {
                                    return function () {
                                        return evaluateValueAccessor(bindingsUpdater()[bindingKey]);
                                    };
                                } : function (bindingKey) {
                                    return bindings[bindingKey];
                                };

                                // Use of allBindings as a function is maintained for backwards compatibility, but its use is deprecated
                                function allBindings() {
                                    return ko.utils.objectMap(bindingsUpdater ? bindingsUpdater() : bindings, evaluateValueAccessor);
                                }
                                // The following is the 3.x allBindings API
                                allBindings['get'] = function (key) {
                                    return bindings[key] && evaluateValueAccessor(getValueAccessor(key));
                                };
                                allBindings['has'] = function (key) {
                                    return key in bindings;
                                };

                                // First put the bindings into the right order
                                var orderedBindings = topologicalSortBindings(bindings);

                                // Go through the sorted bindings, calling init and update for each
                                ko.utils.arrayForEach(orderedBindings, function (bindingKeyAndHandler) {
                                    // Note that topologicalSortBindings has already filtered out any nonexistent binding handlers,
                                    // so bindingKeyAndHandler.handler will always be nonnull.
                                    var handlerInitFn = bindingKeyAndHandler.handler["init"],
                                        handlerUpdateFn = bindingKeyAndHandler.handler["update"],
                                        bindingKey = bindingKeyAndHandler.key;

                                    if (node.nodeType === 8) {
                                        validateThatBindingIsAllowedForVirtualElements(bindingKey);
                                    }

                                    try {
                                        // Run init, ignoring any dependencies
                                        if (typeof handlerInitFn == "function") {
                                            ko.dependencyDetection.ignore(function () {
                                                var initResult = handlerInitFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);

                                                // If this binding handler claims to control descendant bindings, make a note of this
                                                if (initResult && initResult['controlsDescendantBindings']) {
                                                    if (bindingHandlerThatControlsDescendantBindings !== undefined) throw new Error("Multiple bindings (" + bindingHandlerThatControlsDescendantBindings + " and " + bindingKey + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                    bindingHandlerThatControlsDescendantBindings = bindingKey;
                                                }
                                            });
                                        }

                                        // Run update in its own computed wrapper
                                        if (typeof handlerUpdateFn == "function") {
                                            ko.dependentObservable(function () {
                                                handlerUpdateFn(node, getValueAccessor(bindingKey), allBindings, bindingContext['$data'], bindingContext);
                                            }, null, { disposeWhenNodeIsRemoved: node });
                                        }
                                    } catch (ex) {
                                        ex.message = "Unable to process binding \"" + bindingKey + ": " + bindings[bindingKey] + "\"\nMessage: " + ex.message;
                                        throw ex;
                                    }
                                });
                            }

                            return {
                                'shouldBindDescendants': bindingHandlerThatControlsDescendantBindings === undefined
                            };
                        };

                        var storedBindingContextDomDataKey = ko.utils.domData.nextKey();
                        ko.storedBindingContextForNode = function (node, bindingContext) {
                            if (arguments.length == 2) {
                                ko.utils.domData.set(node, storedBindingContextDomDataKey, bindingContext);
                                if (bindingContext._subscribable) bindingContext._subscribable._addNode(node);
                            } else {
                                return ko.utils.domData.get(node, storedBindingContextDomDataKey);
                            }
                        };

                        function getBindingContext(viewModelOrBindingContext) {
                            return viewModelOrBindingContext && viewModelOrBindingContext instanceof ko.bindingContext ? viewModelOrBindingContext : new ko.bindingContext(viewModelOrBindingContext);
                        }

                        ko.applyBindingAccessorsToNode = function (node, bindings, viewModelOrBindingContext) {
                            if (node.nodeType === 1) // If it's an element, workaround IE <= 8 HTML parsing weirdness
                                ko.virtualElements.normaliseVirtualElementDomStructure(node);
                            return applyBindingsToNodeInternal(node, bindings, getBindingContext(viewModelOrBindingContext), true);
                        };

                        ko.applyBindingsToNode = function (node, bindings, viewModelOrBindingContext) {
                            var context = getBindingContext(viewModelOrBindingContext);
                            return ko.applyBindingAccessorsToNode(node, makeBindingAccessors(bindings, context, node), context);
                        };

                        ko.applyBindingsToDescendants = function (viewModelOrBindingContext, rootNode) {
                            if (rootNode.nodeType === 1 || rootNode.nodeType === 8) applyBindingsToDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
                        };

                        ko.applyBindings = function (viewModelOrBindingContext, rootNode) {
                            // If jQuery is loaded after Knockout, we won't initially have access to it. So save it here.
                            if (!jQueryInstance && window['jQuery']) {
                                jQueryInstance = window['jQuery'];
                            }

                            if (rootNode && rootNode.nodeType !== 1 && rootNode.nodeType !== 8) throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            rootNode = rootNode || window.document.body; // Make "rootNode" parameter optional

                            applyBindingsToNodeAndDescendantsInternal(getBindingContext(viewModelOrBindingContext), rootNode, true);
                        };

                        // Retrieving binding context from arbitrary nodes
                        ko.contextFor = function (node) {
                            // We can only do something meaningful for elements and comment nodes (in particular, not text nodes, as IE can't store domdata for them)
                            switch (node.nodeType) {
                                case 1:
                                case 8:
                                    var context = ko.storedBindingContextForNode(node);
                                    if (context) return context;
                                    if (node.parentNode) return ko.contextFor(node.parentNode);
                                    break;
                            }
                            return undefined;
                        };
                        ko.dataFor = function (node) {
                            var context = ko.contextFor(node);
                            return context ? context['$data'] : undefined;
                        };

                        ko.exportSymbol('bindingHandlers', ko.bindingHandlers);
                        ko.exportSymbol('applyBindings', ko.applyBindings);
                        ko.exportSymbol('applyBindingsToDescendants', ko.applyBindingsToDescendants);
                        ko.exportSymbol('applyBindingAccessorsToNode', ko.applyBindingAccessorsToNode);
                        ko.exportSymbol('applyBindingsToNode', ko.applyBindingsToNode);
                        ko.exportSymbol('contextFor', ko.contextFor);
                        ko.exportSymbol('dataFor', ko.dataFor);
                    })();
                    (function (undefined) {
                        var loadingSubscribablesCache = {},
                            // Tracks component loads that are currently in flight
                        loadedDefinitionsCache = {}; // Tracks component loads that have already completed

                        ko.components = {
                            get: function (componentName, callback) {
                                var cachedDefinition = getObjectOwnProperty(loadedDefinitionsCache, componentName);
                                if (cachedDefinition) {
                                    // It's already loaded and cached. Reuse the same definition object.
                                    // Note that for API consistency, even cache hits complete asynchronously by default.
                                    // You can bypass this by putting synchronous:true on your component config.
                                    if (cachedDefinition.isSynchronousComponent) {
                                        ko.dependencyDetection.ignore(function () {
                                            // See comment in loaderRegistryBehaviors.js for reasoning
                                            callback(cachedDefinition.definition);
                                        });
                                    } else {
                                        ko.tasks.schedule(function () {
                                            callback(cachedDefinition.definition);
                                        });
                                    }
                                } else {
                                    // Join the loading process that is already underway, or start a new one.
                                    loadComponentAndNotify(componentName, callback);
                                }
                            },

                            clearCachedDefinition: function (componentName) {
                                delete loadedDefinitionsCache[componentName];
                            },

                            _getFirstResultFromLoaders: getFirstResultFromLoaders
                        };

                        function getObjectOwnProperty(obj, propName) {
                            return obj.hasOwnProperty(propName) ? obj[propName] : undefined;
                        }

                        function loadComponentAndNotify(componentName, callback) {
                            var subscribable = getObjectOwnProperty(loadingSubscribablesCache, componentName),
                                completedAsync;
                            if (!subscribable) {
                                // It's not started loading yet. Start loading, and when it's done, move it to loadedDefinitionsCache.
                                subscribable = loadingSubscribablesCache[componentName] = new ko.subscribable();
                                subscribable.subscribe(callback);

                                beginLoadingComponent(componentName, function (definition, config) {
                                    var isSynchronousComponent = !!(config && config['synchronous']);
                                    loadedDefinitionsCache[componentName] = { definition: definition, isSynchronousComponent: isSynchronousComponent };
                                    delete loadingSubscribablesCache[componentName];

                                    // For API consistency, all loads complete asynchronously. However we want to avoid
                                    // adding an extra task schedule if it's unnecessary (i.e., the completion is already
                                    // async).
                                    //
                                    // You can bypass the 'always asynchronous' feature by putting the synchronous:true
                                    // flag on your component configuration when you register it.
                                    if (completedAsync || isSynchronousComponent) {
                                        // Note that notifySubscribers ignores any dependencies read within the callback.
                                        // See comment in loaderRegistryBehaviors.js for reasoning
                                        subscribable['notifySubscribers'](definition);
                                    } else {
                                        ko.tasks.schedule(function () {
                                            subscribable['notifySubscribers'](definition);
                                        });
                                    }
                                });
                                completedAsync = true;
                            } else {
                                subscribable.subscribe(callback);
                            }
                        }

                        function beginLoadingComponent(componentName, callback) {
                            getFirstResultFromLoaders('getConfig', [componentName], function (config) {
                                if (config) {
                                    // We have a config, so now load its definition
                                    getFirstResultFromLoaders('loadComponent', [componentName, config], function (definition) {
                                        callback(definition, config);
                                    });
                                } else {
                                    // The component has no config - it's unknown to all the loaders.
                                    // Note that this is not an error (e.g., a module loading error) - that would abort the
                                    // process and this callback would not run. For this callback to run, all loaders must
                                    // have confirmed they don't know about this component.
                                    callback(null, null);
                                }
                            });
                        }

                        function getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders) {
                            // On the first call in the stack, start with the full set of loaders
                            if (!candidateLoaders) {
                                candidateLoaders = ko.components['loaders'].slice(0); // Use a copy, because we'll be mutating this array
                            }

                            // Try the next candidate
                            var currentCandidateLoader = candidateLoaders.shift();
                            if (currentCandidateLoader) {
                                var methodInstance = currentCandidateLoader[methodName];
                                if (methodInstance) {
                                    var wasAborted = false,
                                        synchronousReturnValue = methodInstance.apply(currentCandidateLoader, argsExceptCallback.concat(function (result) {
                                        if (wasAborted) {
                                            callback(null);
                                        } else if (result !== null) {
                                            // This candidate returned a value. Use it.
                                            callback(result);
                                        } else {
                                            // Try the next candidate
                                            getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                                        }
                                    }));

                                    // Currently, loaders may not return anything synchronously. This leaves open the possibility
                                    // that we'll extend the API to support synchronous return values in the future. It won't be
                                    // a breaking change, because currently no loader is allowed to return anything except undefined.
                                    if (synchronousReturnValue !== undefined) {
                                        wasAborted = true;

                                        // Method to suppress exceptions will remain undocumented. This is only to keep
                                        // KO's specs running tidily, since we can observe the loading got aborted without
                                        // having exceptions cluttering up the console too.
                                        if (!currentCandidateLoader['suppressLoaderExceptions']) {
                                            throw new Error('Component loaders must supply values by invoking the callback, not by returning values synchronously.');
                                        }
                                    }
                                } else {
                                    // This candidate doesn't have the relevant handler. Synchronously move on to the next one.
                                    getFirstResultFromLoaders(methodName, argsExceptCallback, callback, candidateLoaders);
                                }
                            } else {
                                // No candidates returned a value
                                callback(null);
                            }
                        }

                        // Reference the loaders via string name so it's possible for developers
                        // to replace the whole array by assigning to ko.components.loaders
                        ko.components['loaders'] = [];

                        ko.exportSymbol('components', ko.components);
                        ko.exportSymbol('components.get', ko.components.get);
                        ko.exportSymbol('components.clearCachedDefinition', ko.components.clearCachedDefinition);
                    })();
                    (function (undefined) {

                        // The default loader is responsible for two things:
                        // 1. Maintaining the default in-memory registry of component configuration objects
                        //    (i.e., the thing you're writing to when you call ko.components.register(someName, ...))
                        // 2. Answering requests for components by fetching configuration objects
                        //    from that default in-memory registry and resolving them into standard
                        //    component definition objects (of the form { createViewModel: ..., template: ... })
                        // Custom loaders may override either of these facilities, i.e.,
                        // 1. To supply configuration objects from some other source (e.g., conventions)
                        // 2. Or, to resolve configuration objects by loading viewmodels/templates via arbitrary logic.

                        var defaultConfigRegistry = {};

                        ko.components.register = function (componentName, config) {
                            if (!config) {
                                throw new Error('Invalid configuration for ' + componentName);
                            }

                            if (ko.components.isRegistered(componentName)) {
                                throw new Error('Component ' + componentName + ' is already registered');
                            }

                            defaultConfigRegistry[componentName] = config;
                        };

                        ko.components.isRegistered = function (componentName) {
                            return defaultConfigRegistry.hasOwnProperty(componentName);
                        };

                        ko.components.unregister = function (componentName) {
                            delete defaultConfigRegistry[componentName];
                            ko.components.clearCachedDefinition(componentName);
                        };

                        ko.components.defaultLoader = {
                            'getConfig': function (componentName, callback) {
                                var result = defaultConfigRegistry.hasOwnProperty(componentName) ? defaultConfigRegistry[componentName] : null;
                                callback(result);
                            },

                            'loadComponent': function (componentName, config, callback) {
                                var errorCallback = makeErrorCallback(componentName);
                                possiblyGetConfigFromAmd(errorCallback, config, function (loadedConfig) {
                                    resolveConfig(componentName, errorCallback, loadedConfig, callback);
                                });
                            },

                            'loadTemplate': function (componentName, templateConfig, callback) {
                                resolveTemplate(makeErrorCallback(componentName), templateConfig, callback);
                            },

                            'loadViewModel': function (componentName, viewModelConfig, callback) {
                                resolveViewModel(makeErrorCallback(componentName), viewModelConfig, callback);
                            }
                        };

                        var createViewModelKey = 'createViewModel';

                        // Takes a config object of the form { template: ..., viewModel: ... }, and asynchronously convert it
                        // into the standard component definition format:
                        //    { template: <ArrayOfDomNodes>, createViewModel: function(params, componentInfo) { ... } }.
                        // Since both template and viewModel may need to be resolved asynchronously, both tasks are performed
                        // in parallel, and the results joined when both are ready. We don't depend on any promises infrastructure,
                        // so this is implemented manually below.
                        function resolveConfig(componentName, errorCallback, config, callback) {
                            var result = {},
                                makeCallBackWhenZero = 2,
                                tryIssueCallback = function () {
                                if (--makeCallBackWhenZero === 0) {
                                    callback(result);
                                }
                            },
                                templateConfig = config['template'],
                                viewModelConfig = config['viewModel'];

                            if (templateConfig) {
                                possiblyGetConfigFromAmd(errorCallback, templateConfig, function (loadedConfig) {
                                    ko.components._getFirstResultFromLoaders('loadTemplate', [componentName, loadedConfig], function (resolvedTemplate) {
                                        result['template'] = resolvedTemplate;
                                        tryIssueCallback();
                                    });
                                });
                            } else {
                                tryIssueCallback();
                            }

                            if (viewModelConfig) {
                                possiblyGetConfigFromAmd(errorCallback, viewModelConfig, function (loadedConfig) {
                                    ko.components._getFirstResultFromLoaders('loadViewModel', [componentName, loadedConfig], function (resolvedViewModel) {
                                        result[createViewModelKey] = resolvedViewModel;
                                        tryIssueCallback();
                                    });
                                });
                            } else {
                                tryIssueCallback();
                            }
                        }

                        function resolveTemplate(errorCallback, templateConfig, callback) {
                            if (typeof templateConfig === 'string') {
                                // Markup - parse it
                                callback(ko.utils.parseHtmlFragment(templateConfig));
                            } else if (templateConfig instanceof Array) {
                                // Assume already an array of DOM nodes - pass through unchanged
                                callback(templateConfig);
                            } else if (isDocumentFragment(templateConfig)) {
                                // Document fragment - use its child nodes
                                callback(ko.utils.makeArray(templateConfig.childNodes));
                            } else if (templateConfig['element']) {
                                var element = templateConfig['element'];
                                if (isDomElement(element)) {
                                    // Element instance - copy its child nodes
                                    callback(cloneNodesFromTemplateSourceElement(element));
                                } else if (typeof element === 'string') {
                                    // Element ID - find it, then copy its child nodes
                                    var elemInstance = document.getElementById(element);
                                    if (elemInstance) {
                                        callback(cloneNodesFromTemplateSourceElement(elemInstance));
                                    } else {
                                        errorCallback('Cannot find element with ID ' + element);
                                    }
                                } else {
                                    errorCallback('Unknown element type: ' + element);
                                }
                            } else {
                                errorCallback('Unknown template value: ' + templateConfig);
                            }
                        }

                        function resolveViewModel(errorCallback, viewModelConfig, callback) {
                            if (typeof viewModelConfig === 'function') {
                                // Constructor - convert to standard factory function format
                                // By design, this does *not* supply componentInfo to the constructor, as the intent is that
                                // componentInfo contains non-viewmodel data (e.g., the component's element) that should only
                                // be used in factory functions, not viewmodel constructors.
                                callback(function (params /*, componentInfo */) {
                                    return new viewModelConfig(params);
                                });
                            } else if (typeof viewModelConfig[createViewModelKey] === 'function') {
                                // Already a factory function - use it as-is
                                callback(viewModelConfig[createViewModelKey]);
                            } else if ('instance' in viewModelConfig) {
                                // Fixed object instance - promote to createViewModel format for API consistency
                                var fixedInstance = viewModelConfig['instance'];
                                callback(function (params, componentInfo) {
                                    return fixedInstance;
                                });
                            } else if ('viewModel' in viewModelConfig) {
                                // Resolved AMD module whose value is of the form { viewModel: ... }
                                resolveViewModel(errorCallback, viewModelConfig['viewModel'], callback);
                            } else {
                                errorCallback('Unknown viewModel value: ' + viewModelConfig);
                            }
                        }

                        function cloneNodesFromTemplateSourceElement(elemInstance) {
                            switch (ko.utils.tagNameLower(elemInstance)) {
                                case 'script':
                                    return ko.utils.parseHtmlFragment(elemInstance.text);
                                case 'textarea':
                                    return ko.utils.parseHtmlFragment(elemInstance.value);
                                case 'template':
                                    // For browsers with proper <template> element support (i.e., where the .content property
                                    // gives a document fragment), use that document fragment.
                                    if (isDocumentFragment(elemInstance.content)) {
                                        return ko.utils.cloneNodes(elemInstance.content.childNodes);
                                    }
                            }

                            // Regular elements such as <div>, and <template> elements on old browsers that don't really
                            // understand <template> and just treat it as a regular container
                            return ko.utils.cloneNodes(elemInstance.childNodes);
                        }

                        function isDomElement(obj) {
                            if (window['HTMLElement']) {
                                return obj instanceof HTMLElement;
                            } else {
                                return obj && obj.tagName && obj.nodeType === 1;
                            }
                        }

                        function isDocumentFragment(obj) {
                            if (window['DocumentFragment']) {
                                return obj instanceof DocumentFragment;
                            } else {
                                return obj && obj.nodeType === 11;
                            }
                        }

                        function possiblyGetConfigFromAmd(errorCallback, config, callback) {
                            if (typeof config['require'] === 'string') {
                                // The config is the value of an AMD module
                                if (amdRequire || window['require']) {
                                    (amdRequire || window['require'])([config['require']], callback);
                                } else {
                                    errorCallback('Uses require, but no AMD loader is present');
                                }
                            } else {
                                callback(config);
                            }
                        }

                        function makeErrorCallback(componentName) {
                            return function (message) {
                                throw new Error('Component \'' + componentName + '\': ' + message);
                            };
                        }

                        ko.exportSymbol('components.register', ko.components.register);
                        ko.exportSymbol('components.isRegistered', ko.components.isRegistered);
                        ko.exportSymbol('components.unregister', ko.components.unregister);

                        // Expose the default loader so that developers can directly ask it for configuration
                        // or to resolve configuration
                        ko.exportSymbol('components.defaultLoader', ko.components.defaultLoader);

                        // By default, the default loader is the only registered component loader
                        ko.components['loaders'].push(ko.components.defaultLoader);

                        // Privately expose the underlying config registry for use in old-IE shim
                        ko.components._allRegisteredComponents = defaultConfigRegistry;
                    })();
                    (function (undefined) {
                        // Overridable API for determining which component name applies to a given node. By overriding this,
                        // you can for example map specific tagNames to components that are not preregistered.
                        ko.components['getComponentNameForNode'] = function (node) {
                            var tagNameLower = ko.utils.tagNameLower(node);
                            if (ko.components.isRegistered(tagNameLower)) {
                                // Try to determine that this node can be considered a *custom* element; see https://github.com/knockout/knockout/issues/1603
                                if (tagNameLower.indexOf('-') != -1 || '' + node == "[object HTMLUnknownElement]" || ko.utils.ieVersion <= 8 && node.tagName === tagNameLower) {
                                    return tagNameLower;
                                }
                            }
                        };

                        ko.components.addBindingsForCustomElement = function (allBindings, node, bindingContext, valueAccessors) {
                            // Determine if it's really a custom element matching a component
                            if (node.nodeType === 1) {
                                var componentName = ko.components['getComponentNameForNode'](node);
                                if (componentName) {
                                    // It does represent a component, so add a component binding for it
                                    allBindings = allBindings || {};

                                    if (allBindings['component']) {
                                        // Avoid silently overwriting some other 'component' binding that may already be on the element
                                        throw new Error('Cannot use the "component" binding on a custom element matching a component');
                                    }

                                    var componentBindingValue = { 'name': componentName, 'params': getComponentParamsFromCustomElement(node, bindingContext) };

                                    allBindings['component'] = valueAccessors ? function () {
                                        return componentBindingValue;
                                    } : componentBindingValue;
                                }
                            }

                            return allBindings;
                        };

                        var nativeBindingProviderInstance = new ko.bindingProvider();

                        function getComponentParamsFromCustomElement(elem, bindingContext) {
                            var paramsAttribute = elem.getAttribute('params');

                            if (paramsAttribute) {
                                var params = nativeBindingProviderInstance['parseBindingsString'](paramsAttribute, bindingContext, elem, { 'valueAccessors': true, 'bindingParams': true }),
                                    rawParamComputedValues = ko.utils.objectMap(params, function (paramValue, paramName) {
                                    return ko.computed(paramValue, null, { disposeWhenNodeIsRemoved: elem });
                                }),
                                    result = ko.utils.objectMap(rawParamComputedValues, function (paramValueComputed, paramName) {
                                    var paramValue = paramValueComputed.peek();
                                    // Does the evaluation of the parameter value unwrap any observables?
                                    if (!paramValueComputed.isActive()) {
                                        // No it doesn't, so there's no need for any computed wrapper. Just pass through the supplied value directly.
                                        // Example: "someVal: firstName, age: 123" (whether or not firstName is an observable/computed)
                                        return paramValue;
                                    } else {
                                        // Yes it does. Supply a computed property that unwraps both the outer (binding expression)
                                        // level of observability, and any inner (resulting model value) level of observability.
                                        // This means the component doesn't have to worry about multiple unwrapping. If the value is a
                                        // writable observable, the computed will also be writable and pass the value on to the observable.
                                        return ko.computed({
                                            'read': function () {
                                                return ko.utils.unwrapObservable(paramValueComputed());
                                            },
                                            'write': ko.isWriteableObservable(paramValue) && function (value) {
                                                paramValueComputed()(value);
                                            },
                                            disposeWhenNodeIsRemoved: elem
                                        });
                                    }
                                });

                                // Give access to the raw computeds, as long as that wouldn't overwrite any custom param also called '$raw'
                                // This is in case the developer wants to react to outer (binding) observability separately from inner
                                // (model value) observability, or in case the model value observable has subobservables.
                                if (!result.hasOwnProperty('$raw')) {
                                    result['$raw'] = rawParamComputedValues;
                                }

                                return result;
                            } else {
                                // For consistency, absence of a "params" attribute is treated the same as the presence of
                                // any empty one. Otherwise component viewmodels need special code to check whether or not
                                // 'params' or 'params.$raw' is null/undefined before reading subproperties, which is annoying.
                                return { '$raw': {} };
                            }
                        }

                        // --------------------------------------------------------------------------------
                        // Compatibility code for older (pre-HTML5) IE browsers

                        if (ko.utils.ieVersion < 9) {
                            // Whenever you preregister a component, enable it as a custom element in the current document
                            ko.components['register'] = function (originalFunction) {
                                return function (componentName) {
                                    document.createElement(componentName); // Allows IE<9 to parse markup containing the custom element
                                    return originalFunction.apply(this, arguments);
                                };
                            }(ko.components['register']);

                            // Whenever you create a document fragment, enable all preregistered component names as custom elements
                            // This is needed to make innerShiv/jQuery HTML parsing correctly handle the custom elements
                            document.createDocumentFragment = function (originalFunction) {
                                return function () {
                                    var newDocFrag = originalFunction(),
                                        allComponents = ko.components._allRegisteredComponents;
                                    for (var componentName in allComponents) {
                                        if (allComponents.hasOwnProperty(componentName)) {
                                            newDocFrag.createElement(componentName);
                                        }
                                    }
                                    return newDocFrag;
                                };
                            }(document.createDocumentFragment);
                        }
                    })();(function (undefined) {

                        var componentLoadingOperationUniqueId = 0;

                        ko.bindingHandlers['component'] = {
                            'init': function (element, valueAccessor, ignored1, ignored2, bindingContext) {
                                var currentViewModel,
                                    currentLoadingOperationId,
                                    disposeAssociatedComponentViewModel = function () {
                                    var currentViewModelDispose = currentViewModel && currentViewModel['dispose'];
                                    if (typeof currentViewModelDispose === 'function') {
                                        currentViewModelDispose.call(currentViewModel);
                                    }
                                    currentViewModel = null;
                                    // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                                    currentLoadingOperationId = null;
                                },
                                    originalChildNodes = ko.utils.makeArray(ko.virtualElements.childNodes(element));

                                ko.utils.domNodeDisposal.addDisposeCallback(element, disposeAssociatedComponentViewModel);

                                ko.computed(function () {
                                    var value = ko.utils.unwrapObservable(valueAccessor()),
                                        componentName,
                                        componentParams;

                                    if (typeof value === 'string') {
                                        componentName = value;
                                    } else {
                                        componentName = ko.utils.unwrapObservable(value['name']);
                                        componentParams = ko.utils.unwrapObservable(value['params']);
                                    }

                                    if (!componentName) {
                                        throw new Error('No component name specified');
                                    }

                                    var loadingOperationId = currentLoadingOperationId = ++componentLoadingOperationUniqueId;
                                    ko.components.get(componentName, function (componentDefinition) {
                                        // If this is not the current load operation for this element, ignore it.
                                        if (currentLoadingOperationId !== loadingOperationId) {
                                            return;
                                        }

                                        // Clean up previous state
                                        disposeAssociatedComponentViewModel();

                                        // Instantiate and bind new component. Implicitly this cleans any old DOM nodes.
                                        if (!componentDefinition) {
                                            throw new Error('Unknown component \'' + componentName + '\'');
                                        }
                                        cloneTemplateIntoElement(componentName, componentDefinition, element);
                                        var componentViewModel = createViewModel(componentDefinition, element, originalChildNodes, componentParams),
                                            childBindingContext = bindingContext['createChildContext'](componentViewModel, /* dataItemAlias */undefined, function (ctx) {
                                            ctx['$component'] = componentViewModel;
                                            ctx['$componentTemplateNodes'] = originalChildNodes;
                                        });
                                        currentViewModel = componentViewModel;
                                        ko.applyBindingsToDescendants(childBindingContext, element);
                                    });
                                }, null, { disposeWhenNodeIsRemoved: element });

                                return { 'controlsDescendantBindings': true };
                            }
                        };

                        ko.virtualElements.allowedBindings['component'] = true;

                        function cloneTemplateIntoElement(componentName, componentDefinition, element) {
                            var template = componentDefinition['template'];
                            if (!template) {
                                throw new Error('Component \'' + componentName + '\' has no template');
                            }

                            var clonedNodesArray = ko.utils.cloneNodes(template);
                            ko.virtualElements.setDomNodeChildren(element, clonedNodesArray);
                        }

                        function createViewModel(componentDefinition, element, originalChildNodes, componentParams) {
                            var componentViewModelFactory = componentDefinition['createViewModel'];
                            return componentViewModelFactory ? componentViewModelFactory.call(componentDefinition, componentParams, { 'element': element, 'templateNodes': originalChildNodes }) : componentParams; // Template-only component
                        }
                    })();
                    var attrHtmlToJavascriptMap = { 'class': 'className', 'for': 'htmlFor' };
                    ko.bindingHandlers['attr'] = {
                        'update': function (element, valueAccessor, allBindings) {
                            var value = ko.utils.unwrapObservable(valueAccessor()) || {};
                            ko.utils.objectForEach(value, function (attrName, attrValue) {
                                attrValue = ko.utils.unwrapObservable(attrValue);

                                // To cover cases like "attr: { checked:someProp }", we want to remove the attribute entirely
                                // when someProp is a "no value"-like value (strictly null, false, or undefined)
                                // (because the absence of the "checked" attr is how to mark an element as not checked, etc.)
                                var toRemove = attrValue === false || attrValue === null || attrValue === undefined;
                                if (toRemove) element.removeAttribute(attrName);

                                // In IE <= 7 and IE8 Quirks Mode, you have to use the Javascript property name instead of the
                                // HTML attribute name for certain attributes. IE8 Standards Mode supports the correct behavior,
                                // but instead of figuring out the mode, we'll just set the attribute through the Javascript
                                // property for IE <= 8.
                                if (ko.utils.ieVersion <= 8 && attrName in attrHtmlToJavascriptMap) {
                                    attrName = attrHtmlToJavascriptMap[attrName];
                                    if (toRemove) element.removeAttribute(attrName);else element[attrName] = attrValue;
                                } else if (!toRemove) {
                                    element.setAttribute(attrName, attrValue.toString());
                                }

                                // Treat "name" specially - although you can think of it as an attribute, it also needs
                                // special handling on older versions of IE (https://github.com/SteveSanderson/knockout/pull/333)
                                // Deliberately being case-sensitive here because XHTML would regard "Name" as a different thing
                                // entirely, and there's no strong reason to allow for such casing in HTML.
                                if (attrName === "name") {
                                    ko.utils.setElementName(element, toRemove ? "" : attrValue.toString());
                                }
                            });
                        }
                    };
                    (function () {

                        ko.bindingHandlers['checked'] = {
                            'after': ['value', 'attr'],
                            'init': function (element, valueAccessor, allBindings) {
                                var checkedValue = ko.pureComputed(function () {
                                    // Treat "value" like "checkedValue" when it is included with "checked" binding
                                    if (allBindings['has']('checkedValue')) {
                                        return ko.utils.unwrapObservable(allBindings.get('checkedValue'));
                                    } else if (allBindings['has']('value')) {
                                        return ko.utils.unwrapObservable(allBindings.get('value'));
                                    }

                                    return element.value;
                                });

                                function updateModel() {
                                    // This updates the model value from the view value.
                                    // It runs in response to DOM events (click) and changes in checkedValue.
                                    var isChecked = element.checked,
                                        elemValue = useCheckedValue ? checkedValue() : isChecked;

                                    // When we're first setting up this computed, don't change any model state.
                                    if (ko.computedContext.isInitial()) {
                                        return;
                                    }

                                    // We can ignore unchecked radio buttons, because some other radio
                                    // button will be getting checked, and that one can take care of updating state.
                                    if (isRadio && !isChecked) {
                                        return;
                                    }

                                    var modelValue = ko.dependencyDetection.ignore(valueAccessor);
                                    if (valueIsArray) {
                                        var writableValue = rawValueIsNonArrayObservable ? modelValue.peek() : modelValue;
                                        if (oldElemValue !== elemValue) {
                                            // When we're responding to the checkedValue changing, and the element is
                                            // currently checked, replace the old elem value with the new elem value
                                            // in the model array.
                                            if (isChecked) {
                                                ko.utils.addOrRemoveItem(writableValue, elemValue, true);
                                                ko.utils.addOrRemoveItem(writableValue, oldElemValue, false);
                                            }

                                            oldElemValue = elemValue;
                                        } else {
                                            // When we're responding to the user having checked/unchecked a checkbox,
                                            // add/remove the element value to the model array.
                                            ko.utils.addOrRemoveItem(writableValue, elemValue, isChecked);
                                        }
                                        if (rawValueIsNonArrayObservable && ko.isWriteableObservable(modelValue)) {
                                            modelValue(writableValue);
                                        }
                                    } else {
                                        ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'checked', elemValue, true);
                                    }
                                };

                                function updateView() {
                                    // This updates the view value from the model value.
                                    // It runs in response to changes in the bound (checked) value.
                                    var modelValue = ko.utils.unwrapObservable(valueAccessor());

                                    if (valueIsArray) {
                                        // When a checkbox is bound to an array, being checked represents its value being present in that array
                                        element.checked = ko.utils.arrayIndexOf(modelValue, checkedValue()) >= 0;
                                    } else if (isCheckbox) {
                                        // When a checkbox is bound to any other value (not an array), being checked represents the value being trueish
                                        element.checked = modelValue;
                                    } else {
                                        // For radio buttons, being checked means that the radio button's value corresponds to the model value
                                        element.checked = checkedValue() === modelValue;
                                    }
                                };

                                var isCheckbox = element.type == "checkbox",
                                    isRadio = element.type == "radio";

                                // Only bind to check boxes and radio buttons
                                if (!isCheckbox && !isRadio) {
                                    return;
                                }

                                var rawValue = valueAccessor(),
                                    valueIsArray = isCheckbox && ko.utils.unwrapObservable(rawValue) instanceof Array,
                                    rawValueIsNonArrayObservable = !(valueIsArray && rawValue.push && rawValue.splice),
                                    oldElemValue = valueIsArray ? checkedValue() : undefined,
                                    useCheckedValue = isRadio || valueIsArray;

                                // IE 6 won't allow radio buttons to be selected unless they have a name
                                if (isRadio && !element.name) ko.bindingHandlers['uniqueName']['init'](element, function () {
                                    return true;
                                });

                                // Set up two computeds to update the binding:

                                // The first responds to changes in the checkedValue value and to element clicks
                                ko.computed(updateModel, null, { disposeWhenNodeIsRemoved: element });
                                ko.utils.registerEventHandler(element, "click", updateModel);

                                // The second responds to changes in the model value (the one associated with the checked binding)
                                ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });

                                rawValue = undefined;
                            }
                        };
                        ko.expressionRewriting.twoWayBindings['checked'] = true;

                        ko.bindingHandlers['checkedValue'] = {
                            'update': function (element, valueAccessor) {
                                element.value = ko.utils.unwrapObservable(valueAccessor());
                            }
                        };
                    })();var classesWrittenByBindingKey = '__ko__cssValue';
                    ko.bindingHandlers['css'] = {
                        'update': function (element, valueAccessor) {
                            var value = ko.utils.unwrapObservable(valueAccessor());
                            if (value !== null && typeof value == "object") {
                                ko.utils.objectForEach(value, function (className, shouldHaveClass) {
                                    shouldHaveClass = ko.utils.unwrapObservable(shouldHaveClass);
                                    ko.utils.toggleDomNodeCssClass(element, className, shouldHaveClass);
                                });
                            } else {
                                value = ko.utils.stringTrim(String(value || '')); // Make sure we don't try to store or set a non-string value
                                ko.utils.toggleDomNodeCssClass(element, element[classesWrittenByBindingKey], false);
                                element[classesWrittenByBindingKey] = value;
                                ko.utils.toggleDomNodeCssClass(element, value, true);
                            }
                        }
                    };
                    ko.bindingHandlers['enable'] = {
                        'update': function (element, valueAccessor) {
                            var value = ko.utils.unwrapObservable(valueAccessor());
                            if (value && element.disabled) element.removeAttribute("disabled");else if (!value && !element.disabled) element.disabled = true;
                        }
                    };

                    ko.bindingHandlers['disable'] = {
                        'update': function (element, valueAccessor) {
                            ko.bindingHandlers['enable']['update'](element, function () {
                                return !ko.utils.unwrapObservable(valueAccessor());
                            });
                        }
                    };
                    // For certain common events (currently just 'click'), allow a simplified data-binding syntax
                    // e.g. click:handler instead of the usual full-length event:{click:handler}
                    function makeEventHandlerShortcut(eventName) {
                        ko.bindingHandlers[eventName] = {
                            'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                                var newValueAccessor = function () {
                                    var result = {};
                                    result[eventName] = valueAccessor();
                                    return result;
                                };
                                return ko.bindingHandlers['event']['init'].call(this, element, newValueAccessor, allBindings, viewModel, bindingContext);
                            }
                        };
                    }

                    ko.bindingHandlers['event'] = {
                        'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                            var eventsToHandle = valueAccessor() || {};
                            ko.utils.objectForEach(eventsToHandle, function (eventName) {
                                if (typeof eventName == "string") {
                                    ko.utils.registerEventHandler(element, eventName, function (event) {
                                        var handlerReturnValue;
                                        var handlerFunction = valueAccessor()[eventName];
                                        if (!handlerFunction) return;

                                        try {
                                            // Take all the event args, and prefix with the viewmodel
                                            var argsForHandler = ko.utils.makeArray(arguments);
                                            viewModel = bindingContext['$data'];
                                            argsForHandler.unshift(viewModel);
                                            handlerReturnValue = handlerFunction.apply(viewModel, argsForHandler);
                                        } finally {
                                            if (handlerReturnValue !== true) {
                                                // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                                                if (event.preventDefault) event.preventDefault();else event.returnValue = false;
                                            }
                                        }

                                        var bubble = allBindings.get(eventName + 'Bubble') !== false;
                                        if (!bubble) {
                                            event.cancelBubble = true;
                                            if (event.stopPropagation) event.stopPropagation();
                                        }
                                    });
                                }
                            });
                        }
                    };
                    // "foreach: someExpression" is equivalent to "template: { foreach: someExpression }"
                    // "foreach: { data: someExpression, afterAdd: myfn }" is equivalent to "template: { foreach: someExpression, afterAdd: myfn }"
                    ko.bindingHandlers['foreach'] = {
                        makeTemplateValueAccessor: function (valueAccessor) {
                            return function () {
                                var modelValue = valueAccessor(),
                                    unwrappedValue = ko.utils.peekObservable(modelValue); // Unwrap without setting a dependency here

                                // If unwrappedValue is the array, pass in the wrapped value on its own
                                // The value will be unwrapped and tracked within the template binding
                                // (See https://github.com/SteveSanderson/knockout/issues/523)
                                if (!unwrappedValue || typeof unwrappedValue.length == "number") return { 'foreach': modelValue, 'templateEngine': ko.nativeTemplateEngine.instance };

                                // If unwrappedValue.data is the array, preserve all relevant options and unwrap again value so we get updates
                                ko.utils.unwrapObservable(modelValue);
                                return {
                                    'foreach': unwrappedValue['data'],
                                    'as': unwrappedValue['as'],
                                    'includeDestroyed': unwrappedValue['includeDestroyed'],
                                    'afterAdd': unwrappedValue['afterAdd'],
                                    'beforeRemove': unwrappedValue['beforeRemove'],
                                    'afterRender': unwrappedValue['afterRender'],
                                    'beforeMove': unwrappedValue['beforeMove'],
                                    'afterMove': unwrappedValue['afterMove'],
                                    'templateEngine': ko.nativeTemplateEngine.instance
                                };
                            };
                        },
                        'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                            return ko.bindingHandlers['template']['init'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor));
                        },
                        'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                            return ko.bindingHandlers['template']['update'](element, ko.bindingHandlers['foreach'].makeTemplateValueAccessor(valueAccessor), allBindings, viewModel, bindingContext);
                        }
                    };
                    ko.expressionRewriting.bindingRewriteValidators['foreach'] = false; // Can't rewrite control flow bindings
                    ko.virtualElements.allowedBindings['foreach'] = true;
                    var hasfocusUpdatingProperty = '__ko_hasfocusUpdating';
                    var hasfocusLastValue = '__ko_hasfocusLastValue';
                    ko.bindingHandlers['hasfocus'] = {
                        'init': function (element, valueAccessor, allBindings) {
                            var handleElementFocusChange = function (isFocused) {
                                // Where possible, ignore which event was raised and determine focus state using activeElement,
                                // as this avoids phantom focus/blur events raised when changing tabs in modern browsers.
                                // However, not all KO-targeted browsers (Firefox 2) support activeElement. For those browsers,
                                // prevent a loss of focus when changing tabs/windows by setting a flag that prevents hasfocus
                                // from calling 'blur()' on the element when it loses focus.
                                // Discussion at https://github.com/SteveSanderson/knockout/pull/352
                                element[hasfocusUpdatingProperty] = true;
                                var ownerDoc = element.ownerDocument;
                                if ("activeElement" in ownerDoc) {
                                    var active;
                                    try {
                                        active = ownerDoc.activeElement;
                                    } catch (e) {
                                        // IE9 throws if you access activeElement during page load (see issue #703)
                                        active = ownerDoc.body;
                                    }
                                    isFocused = active === element;
                                }
                                var modelValue = valueAccessor();
                                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'hasfocus', isFocused, true);

                                //cache the latest value, so we can avoid unnecessarily calling focus/blur in the update function
                                element[hasfocusLastValue] = isFocused;
                                element[hasfocusUpdatingProperty] = false;
                            };
                            var handleElementFocusIn = handleElementFocusChange.bind(null, true);
                            var handleElementFocusOut = handleElementFocusChange.bind(null, false);

                            ko.utils.registerEventHandler(element, "focus", handleElementFocusIn);
                            ko.utils.registerEventHandler(element, "focusin", handleElementFocusIn); // For IE
                            ko.utils.registerEventHandler(element, "blur", handleElementFocusOut);
                            ko.utils.registerEventHandler(element, "focusout", handleElementFocusOut); // For IE
                        },
                        'update': function (element, valueAccessor) {
                            var value = !!ko.utils.unwrapObservable(valueAccessor());

                            if (!element[hasfocusUpdatingProperty] && element[hasfocusLastValue] !== value) {
                                value ? element.focus() : element.blur();

                                // In IE, the blur method doesn't always cause the element to lose focus (for example, if the window is not in focus).
                                // Setting focus to the body element does seem to be reliable in IE, but should only be used if we know that the current
                                // element was focused already.
                                if (!value && element[hasfocusLastValue]) {
                                    element.ownerDocument.body.focus();
                                }

                                // For IE, which doesn't reliably fire "focus" or "blur" events synchronously
                                ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, value ? "focusin" : "focusout"]);
                            }
                        }
                    };
                    ko.expressionRewriting.twoWayBindings['hasfocus'] = true;

                    ko.bindingHandlers['hasFocus'] = ko.bindingHandlers['hasfocus']; // Make "hasFocus" an alias
                    ko.expressionRewriting.twoWayBindings['hasFocus'] = true;
                    ko.bindingHandlers['html'] = {
                        'init': function () {
                            // Prevent binding on the dynamically-injected HTML (as developers are unlikely to expect that, and it has security implications)
                            return { 'controlsDescendantBindings': true };
                        },
                        'update': function (element, valueAccessor) {
                            // setHtml will unwrap the value if needed
                            ko.utils.setHtml(element, valueAccessor());
                        }
                    };
                    // Makes a binding like with or if
                    function makeWithIfBinding(bindingKey, isWith, isNot, makeContextCallback) {
                        ko.bindingHandlers[bindingKey] = {
                            'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                                var didDisplayOnLastUpdate, savedNodes;
                                ko.computed(function () {
                                    var rawValue = valueAccessor(),
                                        dataValue = ko.utils.unwrapObservable(rawValue),
                                        shouldDisplay = !isNot !== !dataValue,
                                        // equivalent to isNot ? !dataValue : !!dataValue
                                    isFirstRender = !savedNodes,
                                        needsRefresh = isFirstRender || isWith || shouldDisplay !== didDisplayOnLastUpdate;

                                    if (needsRefresh) {
                                        // Save a copy of the inner nodes on the initial update, but only if we have dependencies.
                                        if (isFirstRender && ko.computedContext.getDependenciesCount()) {
                                            savedNodes = ko.utils.cloneNodes(ko.virtualElements.childNodes(element), true /* shouldCleanNodes */);
                                        }

                                        if (shouldDisplay) {
                                            if (!isFirstRender) {
                                                ko.virtualElements.setDomNodeChildren(element, ko.utils.cloneNodes(savedNodes));
                                            }
                                            ko.applyBindingsToDescendants(makeContextCallback ? makeContextCallback(bindingContext, rawValue) : bindingContext, element);
                                        } else {
                                            ko.virtualElements.emptyNode(element);
                                        }

                                        didDisplayOnLastUpdate = shouldDisplay;
                                    }
                                }, null, { disposeWhenNodeIsRemoved: element });
                                return { 'controlsDescendantBindings': true };
                            }
                        };
                        ko.expressionRewriting.bindingRewriteValidators[bindingKey] = false; // Can't rewrite control flow bindings
                        ko.virtualElements.allowedBindings[bindingKey] = true;
                    }

                    // Construct the actual binding handlers
                    makeWithIfBinding('if');
                    makeWithIfBinding('ifnot', false /* isWith */, true /* isNot */);
                    makeWithIfBinding('with', true /* isWith */, false /* isNot */
                    , function (bindingContext, dataValue) {
                        return bindingContext.createStaticChildContext(dataValue);
                    });
                    var captionPlaceholder = {};
                    ko.bindingHandlers['options'] = {
                        'init': function (element) {
                            if (ko.utils.tagNameLower(element) !== "select") throw new Error("options binding applies only to SELECT elements");

                            // Remove all existing <option>s.
                            while (element.length > 0) {
                                element.remove(0);
                            }

                            // Ensures that the binding processor doesn't try to bind the options
                            return { 'controlsDescendantBindings': true };
                        },
                        'update': function (element, valueAccessor, allBindings) {
                            function selectedOptions() {
                                return ko.utils.arrayFilter(element.options, function (node) {
                                    return node.selected;
                                });
                            }

                            var selectWasPreviouslyEmpty = element.length == 0,
                                multiple = element.multiple,
                                previousScrollTop = !selectWasPreviouslyEmpty && multiple ? element.scrollTop : null,
                                unwrappedArray = ko.utils.unwrapObservable(valueAccessor()),
                                valueAllowUnset = allBindings.get('valueAllowUnset') && allBindings['has']('value'),
                                includeDestroyed = allBindings.get('optionsIncludeDestroyed'),
                                arrayToDomNodeChildrenOptions = {},
                                captionValue,
                                filteredArray,
                                previousSelectedValues = [];

                            if (!valueAllowUnset) {
                                if (multiple) {
                                    previousSelectedValues = ko.utils.arrayMap(selectedOptions(), ko.selectExtensions.readValue);
                                } else if (element.selectedIndex >= 0) {
                                    previousSelectedValues.push(ko.selectExtensions.readValue(element.options[element.selectedIndex]));
                                }
                            }

                            if (unwrappedArray) {
                                if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                                    unwrappedArray = [unwrappedArray];

                                // Filter out any entries marked as destroyed
                                filteredArray = ko.utils.arrayFilter(unwrappedArray, function (item) {
                                    return includeDestroyed || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
                                });

                                // If caption is included, add it to the array
                                if (allBindings['has']('optionsCaption')) {
                                    captionValue = ko.utils.unwrapObservable(allBindings.get('optionsCaption'));
                                    // If caption value is null or undefined, don't show a caption
                                    if (captionValue !== null && captionValue !== undefined) {
                                        filteredArray.unshift(captionPlaceholder);
                                    }
                                }
                            } else {
                                // If a falsy value is provided (e.g. null), we'll simply empty the select element
                            }

                            function applyToObject(object, predicate, defaultValue) {
                                var predicateType = typeof predicate;
                                if (predicateType == "function") // Given a function; run it against the data value
                                    return predicate(object);else if (predicateType == "string") // Given a string; treat it as a property name on the data value
                                    return object[predicate];else // Given no optionsText arg; use the data value itself
                                    return defaultValue;
                            }

                            // The following functions can run at two different times:
                            // The first is when the whole array is being updated directly from this binding handler.
                            // The second is when an observable value for a specific array entry is updated.
                            // oldOptions will be empty in the first case, but will be filled with the previously generated option in the second.
                            var itemUpdate = false;
                            function optionForArrayItem(arrayEntry, index, oldOptions) {
                                if (oldOptions.length) {
                                    previousSelectedValues = !valueAllowUnset && oldOptions[0].selected ? [ko.selectExtensions.readValue(oldOptions[0])] : [];
                                    itemUpdate = true;
                                }
                                var option = element.ownerDocument.createElement("option");
                                if (arrayEntry === captionPlaceholder) {
                                    ko.utils.setTextContent(option, allBindings.get('optionsCaption'));
                                    ko.selectExtensions.writeValue(option, undefined);
                                } else {
                                    // Apply a value to the option element
                                    var optionValue = applyToObject(arrayEntry, allBindings.get('optionsValue'), arrayEntry);
                                    ko.selectExtensions.writeValue(option, ko.utils.unwrapObservable(optionValue));

                                    // Apply some text to the option element
                                    var optionText = applyToObject(arrayEntry, allBindings.get('optionsText'), optionValue);
                                    ko.utils.setTextContent(option, optionText);
                                }
                                return [option];
                            }

                            // By using a beforeRemove callback, we delay the removal until after new items are added. This fixes a selection
                            // problem in IE<=8 and Firefox. See https://github.com/knockout/knockout/issues/1208
                            arrayToDomNodeChildrenOptions['beforeRemove'] = function (option) {
                                element.removeChild(option);
                            };

                            function setSelectionCallback(arrayEntry, newOptions) {
                                if (itemUpdate && valueAllowUnset) {
                                    // The model value is authoritative, so make sure its value is the one selected
                                    // There is no need to use dependencyDetection.ignore since setDomNodeChildrenFromArrayMapping does so already.
                                    ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
                                } else if (previousSelectedValues.length) {
                                    // IE6 doesn't like us to assign selection to OPTION nodes before they're added to the document.
                                    // That's why we first added them without selection. Now it's time to set the selection.
                                    var isSelected = ko.utils.arrayIndexOf(previousSelectedValues, ko.selectExtensions.readValue(newOptions[0])) >= 0;
                                    ko.utils.setOptionNodeSelectionState(newOptions[0], isSelected);

                                    // If this option was changed from being selected during a single-item update, notify the change
                                    if (itemUpdate && !isSelected) {
                                        ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                                    }
                                }
                            }

                            var callback = setSelectionCallback;
                            if (allBindings['has']('optionsAfterRender') && typeof allBindings.get('optionsAfterRender') == "function") {
                                callback = function (arrayEntry, newOptions) {
                                    setSelectionCallback(arrayEntry, newOptions);
                                    ko.dependencyDetection.ignore(allBindings.get('optionsAfterRender'), null, [newOptions[0], arrayEntry !== captionPlaceholder ? arrayEntry : undefined]);
                                };
                            }

                            ko.utils.setDomNodeChildrenFromArrayMapping(element, filteredArray, optionForArrayItem, arrayToDomNodeChildrenOptions, callback);

                            ko.dependencyDetection.ignore(function () {
                                if (valueAllowUnset) {
                                    // The model value is authoritative, so make sure its value is the one selected
                                    ko.selectExtensions.writeValue(element, ko.utils.unwrapObservable(allBindings.get('value')), true /* allowUnset */);
                                } else {
                                    // Determine if the selection has changed as a result of updating the options list
                                    var selectionChanged;
                                    if (multiple) {
                                        // For a multiple-select box, compare the new selection count to the previous one
                                        // But if nothing was selected before, the selection can't have changed
                                        selectionChanged = previousSelectedValues.length && selectedOptions().length < previousSelectedValues.length;
                                    } else {
                                        // For a single-select box, compare the current value to the previous value
                                        // But if nothing was selected before or nothing is selected now, just look for a change in selection
                                        selectionChanged = previousSelectedValues.length && element.selectedIndex >= 0 ? ko.selectExtensions.readValue(element.options[element.selectedIndex]) !== previousSelectedValues[0] : previousSelectedValues.length || element.selectedIndex >= 0;
                                    }

                                    // Ensure consistency between model value and selected option.
                                    // If the dropdown was changed so that selection is no longer the same,
                                    // notify the value or selectedOptions binding.
                                    if (selectionChanged) {
                                        ko.utils.triggerEvent(element, "change");
                                    }
                                }
                            });

                            // Workaround for IE bug
                            ko.utils.ensureSelectElementIsRenderedCorrectly(element);

                            if (previousScrollTop && Math.abs(previousScrollTop - element.scrollTop) > 20) element.scrollTop = previousScrollTop;
                        }
                    };
                    ko.bindingHandlers['options'].optionValueDomDataKey = ko.utils.domData.nextKey();
                    ko.bindingHandlers['selectedOptions'] = {
                        'after': ['options', 'foreach'],
                        'init': function (element, valueAccessor, allBindings) {
                            ko.utils.registerEventHandler(element, "change", function () {
                                var value = valueAccessor(),
                                    valueToWrite = [];
                                ko.utils.arrayForEach(element.getElementsByTagName("option"), function (node) {
                                    if (node.selected) valueToWrite.push(ko.selectExtensions.readValue(node));
                                });
                                ko.expressionRewriting.writeValueToProperty(value, allBindings, 'selectedOptions', valueToWrite);
                            });
                        },
                        'update': function (element, valueAccessor) {
                            if (ko.utils.tagNameLower(element) != "select") throw new Error("values binding applies only to SELECT elements");

                            var newValue = ko.utils.unwrapObservable(valueAccessor()),
                                previousScrollTop = element.scrollTop;

                            if (newValue && typeof newValue.length == "number") {
                                ko.utils.arrayForEach(element.getElementsByTagName("option"), function (node) {
                                    var isSelected = ko.utils.arrayIndexOf(newValue, ko.selectExtensions.readValue(node)) >= 0;
                                    if (node.selected != isSelected) {
                                        // This check prevents flashing of the select element in IE
                                        ko.utils.setOptionNodeSelectionState(node, isSelected);
                                    }
                                });
                            }

                            element.scrollTop = previousScrollTop;
                        }
                    };
                    ko.expressionRewriting.twoWayBindings['selectedOptions'] = true;
                    ko.bindingHandlers['style'] = {
                        'update': function (element, valueAccessor) {
                            var value = ko.utils.unwrapObservable(valueAccessor() || {});
                            ko.utils.objectForEach(value, function (styleName, styleValue) {
                                styleValue = ko.utils.unwrapObservable(styleValue);

                                if (styleValue === null || styleValue === undefined || styleValue === false) {
                                    // Empty string removes the value, whereas null/undefined have no effect
                                    styleValue = "";
                                }

                                element.style[styleName] = styleValue;
                            });
                        }
                    };
                    ko.bindingHandlers['submit'] = {
                        'init': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                            if (typeof valueAccessor() != "function") throw new Error("The value for a submit binding must be a function");
                            ko.utils.registerEventHandler(element, "submit", function (event) {
                                var handlerReturnValue;
                                var value = valueAccessor();
                                try {
                                    handlerReturnValue = value.call(bindingContext['$data'], element);
                                } finally {
                                    if (handlerReturnValue !== true) {
                                        // Normally we want to prevent default action. Developer can override this be explicitly returning true.
                                        if (event.preventDefault) event.preventDefault();else event.returnValue = false;
                                    }
                                }
                            });
                        }
                    };
                    ko.bindingHandlers['text'] = {
                        'init': function () {
                            // Prevent binding on the dynamically-injected text node (as developers are unlikely to expect that, and it has security implications).
                            // It should also make things faster, as we no longer have to consider whether the text node might be bindable.
                            return { 'controlsDescendantBindings': true };
                        },
                        'update': function (element, valueAccessor) {
                            ko.utils.setTextContent(element, valueAccessor());
                        }
                    };
                    ko.virtualElements.allowedBindings['text'] = true;
                    (function () {

                        if (window && window.navigator) {
                            var parseVersion = function (matches) {
                                if (matches) {
                                    return parseFloat(matches[1]);
                                }
                            };

                            // Detect various browser versions because some old versions don't fully support the 'input' event
                            var operaVersion = window.opera && window.opera.version && parseInt(window.opera.version()),
                                userAgent = window.navigator.userAgent,
                                safariVersion = parseVersion(userAgent.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
                                firefoxVersion = parseVersion(userAgent.match(/Firefox\/([^ ]*)/));
                        }

                        // IE 8 and 9 have bugs that prevent the normal events from firing when the value changes.
                        // But it does fire the 'selectionchange' event on many of those, presumably because the
                        // cursor is moving and that counts as the selection changing. The 'selectionchange' event is
                        // fired at the document level only and doesn't directly indicate which element changed. We
                        // set up just one event handler for the document and use 'activeElement' to determine which
                        // element was changed.
                        if (ko.utils.ieVersion < 10) {
                            var selectionChangeRegisteredName = ko.utils.domData.nextKey(),
                                selectionChangeHandlerName = ko.utils.domData.nextKey();
                            var selectionChangeHandler = function (event) {
                                var target = this.activeElement,
                                    handler = target && ko.utils.domData.get(target, selectionChangeHandlerName);
                                if (handler) {
                                    handler(event);
                                }
                            };
                            var registerForSelectionChangeEvent = function (element, handler) {
                                var ownerDoc = element.ownerDocument;
                                if (!ko.utils.domData.get(ownerDoc, selectionChangeRegisteredName)) {
                                    ko.utils.domData.set(ownerDoc, selectionChangeRegisteredName, true);
                                    ko.utils.registerEventHandler(ownerDoc, 'selectionchange', selectionChangeHandler);
                                }
                                ko.utils.domData.set(element, selectionChangeHandlerName, handler);
                            };
                        }

                        ko.bindingHandlers['textInput'] = {
                            'init': function (element, valueAccessor, allBindings) {

                                var previousElementValue = element.value,
                                    timeoutHandle,
                                    elementValueBeforeEvent;

                                var updateModel = function (event) {
                                    clearTimeout(timeoutHandle);
                                    elementValueBeforeEvent = timeoutHandle = undefined;

                                    var elementValue = element.value;
                                    if (previousElementValue !== elementValue) {
                                        // Provide a way for tests to know exactly which event was processed
                                        if (DEBUG && event) element['_ko_textInputProcessedEvent'] = event.type;
                                        previousElementValue = elementValue;
                                        ko.expressionRewriting.writeValueToProperty(valueAccessor(), allBindings, 'textInput', elementValue);
                                    }
                                };

                                var deferUpdateModel = function (event) {
                                    if (!timeoutHandle) {
                                        // The elementValueBeforeEvent variable is set *only* during the brief gap between an
                                        // event firing and the updateModel function running. This allows us to ignore model
                                        // updates that are from the previous state of the element, usually due to techniques
                                        // such as rateLimit. Such updates, if not ignored, can cause keystrokes to be lost.
                                        elementValueBeforeEvent = element.value;
                                        var handler = DEBUG ? updateModel.bind(element, { type: event.type }) : updateModel;
                                        timeoutHandle = ko.utils.setTimeout(handler, 4);
                                    }
                                };

                                // IE9 will mess up the DOM if you handle events synchronously which results in DOM changes (such as other bindings);
                                // so we'll make sure all updates are asynchronous
                                var ieUpdateModel = ko.utils.ieVersion == 9 ? deferUpdateModel : updateModel;

                                var updateView = function () {
                                    var modelValue = ko.utils.unwrapObservable(valueAccessor());

                                    if (modelValue === null || modelValue === undefined) {
                                        modelValue = '';
                                    }

                                    if (elementValueBeforeEvent !== undefined && modelValue === elementValueBeforeEvent) {
                                        ko.utils.setTimeout(updateView, 4);
                                        return;
                                    }

                                    // Update the element only if the element and model are different. On some browsers, updating the value
                                    // will move the cursor to the end of the input, which would be bad while the user is typing.
                                    if (element.value !== modelValue) {
                                        previousElementValue = modelValue; // Make sure we ignore events (propertychange) that result from updating the value
                                        element.value = modelValue;
                                    }
                                };

                                var onEvent = function (event, handler) {
                                    ko.utils.registerEventHandler(element, event, handler);
                                };

                                if (DEBUG && ko.bindingHandlers['textInput']['_forceUpdateOn']) {
                                    // Provide a way for tests to specify exactly which events are bound
                                    ko.utils.arrayForEach(ko.bindingHandlers['textInput']['_forceUpdateOn'], function (eventName) {
                                        if (eventName.slice(0, 5) == 'after') {
                                            onEvent(eventName.slice(5), deferUpdateModel);
                                        } else {
                                            onEvent(eventName, updateModel);
                                        }
                                    });
                                } else {
                                    if (ko.utils.ieVersion < 10) {
                                        // Internet Explorer <= 8 doesn't support the 'input' event, but does include 'propertychange' that fires whenever
                                        // any property of an element changes. Unlike 'input', it also fires if a property is changed from JavaScript code,
                                        // but that's an acceptable compromise for this binding. IE 9 does support 'input', but since it doesn't fire it
                                        // when using autocomplete, we'll use 'propertychange' for it also.
                                        onEvent('propertychange', function (event) {
                                            if (event.propertyName === 'value') {
                                                ieUpdateModel(event);
                                            }
                                        });

                                        if (ko.utils.ieVersion == 8) {
                                            // IE 8 has a bug where it fails to fire 'propertychange' on the first update following a value change from
                                            // JavaScript code. It also doesn't fire if you clear the entire value. To fix this, we bind to the following
                                            // events too.
                                            onEvent('keyup', updateModel); // A single keystoke
                                            onEvent('keydown', updateModel); // The first character when a key is held down
                                        }
                                        if (ko.utils.ieVersion >= 8) {
                                            // Internet Explorer 9 doesn't fire the 'input' event when deleting text, including using
                                            // the backspace, delete, or ctrl-x keys, clicking the 'x' to clear the input, dragging text
                                            // out of the field, and cutting or deleting text using the context menu. 'selectionchange'
                                            // can detect all of those except dragging text out of the field, for which we use 'dragend'.
                                            // These are also needed in IE8 because of the bug described above.
                                            registerForSelectionChangeEvent(element, ieUpdateModel); // 'selectionchange' covers cut, paste, drop, delete, etc.
                                            onEvent('dragend', deferUpdateModel);
                                        }
                                    } else {
                                        // All other supported browsers support the 'input' event, which fires whenever the content of the element is changed
                                        // through the user interface.
                                        onEvent('input', updateModel);

                                        if (safariVersion < 5 && ko.utils.tagNameLower(element) === "textarea") {
                                            // Safari <5 doesn't fire the 'input' event for <textarea> elements (it does fire 'textInput'
                                            // but only when typing). So we'll just catch as much as we can with keydown, cut, and paste.
                                            onEvent('keydown', deferUpdateModel);
                                            onEvent('paste', deferUpdateModel);
                                            onEvent('cut', deferUpdateModel);
                                        } else if (operaVersion < 11) {
                                            // Opera 10 doesn't always fire the 'input' event for cut, paste, undo & drop operations.
                                            // We can try to catch some of those using 'keydown'.
                                            onEvent('keydown', deferUpdateModel);
                                        } else if (firefoxVersion < 4.0) {
                                            // Firefox <= 3.6 doesn't fire the 'input' event when text is filled in through autocomplete
                                            onEvent('DOMAutoComplete', updateModel);

                                            // Firefox <=3.5 doesn't fire the 'input' event when text is dropped into the input.
                                            onEvent('dragdrop', updateModel); // <3.5
                                            onEvent('drop', updateModel); // 3.5
                                        }
                                    }
                                }

                                // Bind to the change event so that we can catch programmatic updates of the value that fire this event.
                                onEvent('change', updateModel);

                                ko.computed(updateView, null, { disposeWhenNodeIsRemoved: element });
                            }
                        };
                        ko.expressionRewriting.twoWayBindings['textInput'] = true;

                        // textinput is an alias for textInput
                        ko.bindingHandlers['textinput'] = {
                            // preprocess is the only way to set up a full alias
                            'preprocess': function (value, name, addBinding) {
                                addBinding('textInput', value);
                            }
                        };
                    })();ko.bindingHandlers['uniqueName'] = {
                        'init': function (element, valueAccessor) {
                            if (valueAccessor()) {
                                var name = "ko_unique_" + ++ko.bindingHandlers['uniqueName'].currentIndex;
                                ko.utils.setElementName(element, name);
                            }
                        }
                    };
                    ko.bindingHandlers['uniqueName'].currentIndex = 0;
                    ko.bindingHandlers['value'] = {
                        'after': ['options', 'foreach'],
                        'init': function (element, valueAccessor, allBindings) {
                            // If the value binding is placed on a radio/checkbox, then just pass through to checkedValue and quit
                            if (element.tagName.toLowerCase() == "input" && (element.type == "checkbox" || element.type == "radio")) {
                                ko.applyBindingAccessorsToNode(element, { 'checkedValue': valueAccessor });
                                return;
                            }

                            // Always catch "change" event; possibly other events too if asked
                            var eventsToCatch = ["change"];
                            var requestedEventsToCatch = allBindings.get("valueUpdate");
                            var propertyChangedFired = false;
                            var elementValueBeforeEvent = null;

                            if (requestedEventsToCatch) {
                                if (typeof requestedEventsToCatch == "string") // Allow both individual event names, and arrays of event names
                                    requestedEventsToCatch = [requestedEventsToCatch];
                                ko.utils.arrayPushAll(eventsToCatch, requestedEventsToCatch);
                                eventsToCatch = ko.utils.arrayGetDistinctValues(eventsToCatch);
                            }

                            var valueUpdateHandler = function () {
                                elementValueBeforeEvent = null;
                                propertyChangedFired = false;
                                var modelValue = valueAccessor();
                                var elementValue = ko.selectExtensions.readValue(element);
                                ko.expressionRewriting.writeValueToProperty(modelValue, allBindings, 'value', elementValue);
                            };

                            // Workaround for https://github.com/SteveSanderson/knockout/issues/122
                            // IE doesn't fire "change" events on textboxes if the user selects a value from its autocomplete list
                            var ieAutoCompleteHackNeeded = ko.utils.ieVersion && element.tagName.toLowerCase() == "input" && element.type == "text" && element.autocomplete != "off" && (!element.form || element.form.autocomplete != "off");
                            if (ieAutoCompleteHackNeeded && ko.utils.arrayIndexOf(eventsToCatch, "propertychange") == -1) {
                                ko.utils.registerEventHandler(element, "propertychange", function () {
                                    propertyChangedFired = true;
                                });
                                ko.utils.registerEventHandler(element, "focus", function () {
                                    propertyChangedFired = false;
                                });
                                ko.utils.registerEventHandler(element, "blur", function () {
                                    if (propertyChangedFired) {
                                        valueUpdateHandler();
                                    }
                                });
                            }

                            ko.utils.arrayForEach(eventsToCatch, function (eventName) {
                                // The syntax "after<eventname>" means "run the handler asynchronously after the event"
                                // This is useful, for example, to catch "keydown" events after the browser has updated the control
                                // (otherwise, ko.selectExtensions.readValue(this) will receive the control's value *before* the key event)
                                var handler = valueUpdateHandler;
                                if (ko.utils.stringStartsWith(eventName, "after")) {
                                    handler = function () {
                                        // The elementValueBeforeEvent variable is non-null *only* during the brief gap between
                                        // a keyX event firing and the valueUpdateHandler running, which is scheduled to happen
                                        // at the earliest asynchronous opportunity. We store this temporary information so that
                                        // if, between keyX and valueUpdateHandler, the underlying model value changes separately,
                                        // we can overwrite that model value change with the value the user just typed. Otherwise,
                                        // techniques like rateLimit can trigger model changes at critical moments that will
                                        // override the user's inputs, causing keystrokes to be lost.
                                        elementValueBeforeEvent = ko.selectExtensions.readValue(element);
                                        ko.utils.setTimeout(valueUpdateHandler, 0);
                                    };
                                    eventName = eventName.substring("after".length);
                                }
                                ko.utils.registerEventHandler(element, eventName, handler);
                            });

                            var updateFromModel = function () {
                                var newValue = ko.utils.unwrapObservable(valueAccessor());
                                var elementValue = ko.selectExtensions.readValue(element);

                                if (elementValueBeforeEvent !== null && newValue === elementValueBeforeEvent) {
                                    ko.utils.setTimeout(updateFromModel, 0);
                                    return;
                                }

                                var valueHasChanged = newValue !== elementValue;

                                if (valueHasChanged) {
                                    if (ko.utils.tagNameLower(element) === "select") {
                                        var allowUnset = allBindings.get('valueAllowUnset');
                                        var applyValueAction = function () {
                                            ko.selectExtensions.writeValue(element, newValue, allowUnset);
                                        };
                                        applyValueAction();

                                        if (!allowUnset && newValue !== ko.selectExtensions.readValue(element)) {
                                            // If you try to set a model value that can't be represented in an already-populated dropdown, reject that change,
                                            // because you're not allowed to have a model value that disagrees with a visible UI selection.
                                            ko.dependencyDetection.ignore(ko.utils.triggerEvent, null, [element, "change"]);
                                        } else {
                                            // Workaround for IE6 bug: It won't reliably apply values to SELECT nodes during the same execution thread
                                            // right after you've changed the set of OPTION nodes on it. So for that node type, we'll schedule a second thread
                                            // to apply the value as well.
                                            ko.utils.setTimeout(applyValueAction, 0);
                                        }
                                    } else {
                                        ko.selectExtensions.writeValue(element, newValue);
                                    }
                                }
                            };

                            ko.computed(updateFromModel, null, { disposeWhenNodeIsRemoved: element });
                        },
                        'update': function () {} // Keep for backwards compatibility with code that may have wrapped value binding
                    };
                    ko.expressionRewriting.twoWayBindings['value'] = true;
                    ko.bindingHandlers['visible'] = {
                        'update': function (element, valueAccessor) {
                            var value = ko.utils.unwrapObservable(valueAccessor());
                            var isCurrentlyVisible = !(element.style.display == "none");
                            if (value && !isCurrentlyVisible) element.style.display = "";else if (!value && isCurrentlyVisible) element.style.display = "none";
                        }
                    };
                    // 'click' is just a shorthand for the usual full-length event:{click:handler}
                    makeEventHandlerShortcut('click');
                    // If you want to make a custom template engine,
                    //
                    // [1] Inherit from this class (like ko.nativeTemplateEngine does)
                    // [2] Override 'renderTemplateSource', supplying a function with this signature:
                    //
                    //        function (templateSource, bindingContext, options) {
                    //            // - templateSource.text() is the text of the template you should render
                    //            // - bindingContext.$data is the data you should pass into the template
                    //            //   - you might also want to make bindingContext.$parent, bindingContext.$parents,
                    //            //     and bindingContext.$root available in the template too
                    //            // - options gives you access to any other properties set on "data-bind: { template: options }"
                    //            // - templateDocument is the document object of the template
                    //            //
                    //            // Return value: an array of DOM nodes
                    //        }
                    //
                    // [3] Override 'createJavaScriptEvaluatorBlock', supplying a function with this signature:
                    //
                    //        function (script) {
                    //            // Return value: Whatever syntax means "Evaluate the JavaScript statement 'script' and output the result"
                    //            //               For example, the jquery.tmpl template engine converts 'someScript' to '${ someScript }'
                    //        }
                    //
                    //     This is only necessary if you want to allow data-bind attributes to reference arbitrary template variables.
                    //     If you don't want to allow that, you can set the property 'allowTemplateRewriting' to false (like ko.nativeTemplateEngine does)
                    //     and then you don't need to override 'createJavaScriptEvaluatorBlock'.

                    ko.templateEngine = function () {};

                    ko.templateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
                        throw new Error("Override renderTemplateSource");
                    };

                    ko.templateEngine.prototype['createJavaScriptEvaluatorBlock'] = function (script) {
                        throw new Error("Override createJavaScriptEvaluatorBlock");
                    };

                    ko.templateEngine.prototype['makeTemplateSource'] = function (template, templateDocument) {
                        // Named template
                        if (typeof template == "string") {
                            templateDocument = templateDocument || document;
                            var elem = templateDocument.getElementById(template);
                            if (!elem) throw new Error("Cannot find template with ID " + template);
                            return new ko.templateSources.domElement(elem);
                        } else if (template.nodeType == 1 || template.nodeType == 8) {
                            // Anonymous template
                            return new ko.templateSources.anonymousTemplate(template);
                        } else throw new Error("Unknown template type: " + template);
                    };

                    ko.templateEngine.prototype['renderTemplate'] = function (template, bindingContext, options, templateDocument) {
                        var templateSource = this['makeTemplateSource'](template, templateDocument);
                        return this['renderTemplateSource'](templateSource, bindingContext, options, templateDocument);
                    };

                    ko.templateEngine.prototype['isTemplateRewritten'] = function (template, templateDocument) {
                        // Skip rewriting if requested
                        if (this['allowTemplateRewriting'] === false) return true;
                        return this['makeTemplateSource'](template, templateDocument)['data']("isRewritten");
                    };

                    ko.templateEngine.prototype['rewriteTemplate'] = function (template, rewriterCallback, templateDocument) {
                        var templateSource = this['makeTemplateSource'](template, templateDocument);
                        var rewritten = rewriterCallback(templateSource['text']());
                        templateSource['text'](rewritten);
                        templateSource['data']("isRewritten", true);
                    };

                    ko.exportSymbol('templateEngine', ko.templateEngine);

                    ko.templateRewriting = function () {
                        var memoizeDataBindingAttributeSyntaxRegex = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi;
                        var memoizeVirtualContainerBindingSyntaxRegex = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;

                        function validateDataBindValuesForRewriting(keyValueArray) {
                            var allValidators = ko.expressionRewriting.bindingRewriteValidators;
                            for (var i = 0; i < keyValueArray.length; i++) {
                                var key = keyValueArray[i]['key'];
                                if (allValidators.hasOwnProperty(key)) {
                                    var validator = allValidators[key];

                                    if (typeof validator === "function") {
                                        var possibleErrorMessage = validator(keyValueArray[i]['value']);
                                        if (possibleErrorMessage) throw new Error(possibleErrorMessage);
                                    } else if (!validator) {
                                        throw new Error("This template engine does not support the '" + key + "' binding within its templates");
                                    }
                                }
                            }
                        }

                        function constructMemoizedTagReplacement(dataBindAttributeValue, tagToRetain, nodeName, templateEngine) {
                            var dataBindKeyValueArray = ko.expressionRewriting.parseObjectLiteral(dataBindAttributeValue);
                            validateDataBindValuesForRewriting(dataBindKeyValueArray);
                            var rewrittenDataBindAttributeValue = ko.expressionRewriting.preProcessBindings(dataBindKeyValueArray, { 'valueAccessors': true });

                            // For no obvious reason, Opera fails to evaluate rewrittenDataBindAttributeValue unless it's wrapped in an additional
                            // anonymous function, even though Opera's built-in debugger can evaluate it anyway. No other browser requires this
                            // extra indirection.
                            var applyBindingsToNextSiblingScript = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + rewrittenDataBindAttributeValue + " } })()},'" + nodeName.toLowerCase() + "')";
                            return templateEngine['createJavaScriptEvaluatorBlock'](applyBindingsToNextSiblingScript) + tagToRetain;
                        }

                        return {
                            ensureTemplateIsRewritten: function (template, templateEngine, templateDocument) {
                                if (!templateEngine['isTemplateRewritten'](template, templateDocument)) templateEngine['rewriteTemplate'](template, function (htmlString) {
                                    return ko.templateRewriting.memoizeBindingAttributeSyntax(htmlString, templateEngine);
                                }, templateDocument);
                            },

                            memoizeBindingAttributeSyntax: function (htmlString, templateEngine) {
                                return htmlString.replace(memoizeDataBindingAttributeSyntaxRegex, function () {
                                    return constructMemoizedTagReplacement( /* dataBindAttributeValue: */arguments[4], /* tagToRetain: */arguments[1], /* nodeName: */arguments[2], templateEngine);
                                }).replace(memoizeVirtualContainerBindingSyntaxRegex, function () {
                                    return constructMemoizedTagReplacement( /* dataBindAttributeValue: */arguments[1], /* tagToRetain: */"<!-- ko -->", /* nodeName: */"#comment", templateEngine);
                                });
                            },

                            applyMemoizedBindingsToNextSibling: function (bindings, nodeName) {
                                return ko.memoization.memoize(function (domNode, bindingContext) {
                                    var nodeToBind = domNode.nextSibling;
                                    if (nodeToBind && nodeToBind.nodeName.toLowerCase() === nodeName) {
                                        ko.applyBindingAccessorsToNode(nodeToBind, bindings, bindingContext);
                                    }
                                });
                            }
                        };
                    }();

                    // Exported only because it has to be referenced by string lookup from within rewritten template
                    ko.exportSymbol('__tr_ambtns', ko.templateRewriting.applyMemoizedBindingsToNextSibling);
                    (function () {
                        // A template source represents a read/write way of accessing a template. This is to eliminate the need for template loading/saving
                        // logic to be duplicated in every template engine (and means they can all work with anonymous templates, etc.)
                        //
                        // Two are provided by default:
                        //  1. ko.templateSources.domElement       - reads/writes the text content of an arbitrary DOM element
                        //  2. ko.templateSources.anonymousElement - uses ko.utils.domData to read/write text *associated* with the DOM element, but
                        //                                           without reading/writing the actual element text content, since it will be overwritten
                        //                                           with the rendered template output.
                        // You can implement your own template source if you want to fetch/store templates somewhere other than in DOM elements.
                        // Template sources need to have the following functions:
                        //   text() 			- returns the template text from your storage location
                        //   text(value)		- writes the supplied template text to your storage location
                        //   data(key)			- reads values stored using data(key, value) - see below
                        //   data(key, value)	- associates "value" with this template and the key "key". Is used to store information like "isRewritten".
                        //
                        // Optionally, template sources can also have the following functions:
                        //   nodes()            - returns a DOM element containing the nodes of this template, where available
                        //   nodes(value)       - writes the given DOM element to your storage location
                        // If a DOM element is available for a given template source, template engines are encouraged to use it in preference over text()
                        // for improved speed. However, all templateSources must supply text() even if they don't supply nodes().
                        //
                        // Once you've implemented a templateSource, make your template engine use it by subclassing whatever template engine you were
                        // using and overriding "makeTemplateSource" to return an instance of your custom template source.

                        ko.templateSources = {};

                        // ---- ko.templateSources.domElement -----

                        // template types
                        var templateScript = 1,
                            templateTextArea = 2,
                            templateTemplate = 3,
                            templateElement = 4;

                        ko.templateSources.domElement = function (element) {
                            this.domElement = element;

                            if (element) {
                                var tagNameLower = ko.utils.tagNameLower(element);
                                this.templateType = tagNameLower === "script" ? templateScript : tagNameLower === "textarea" ? templateTextArea :
                                // For browsers with proper <template> element support, where the .content property gives a document fragment
                                tagNameLower == "template" && element.content && element.content.nodeType === 11 ? templateTemplate : templateElement;
                            }
                        };

                        ko.templateSources.domElement.prototype['text'] = function () /* valueToWrite */{
                            var elemContentsProperty = this.templateType === templateScript ? "text" : this.templateType === templateTextArea ? "value" : "innerHTML";

                            if (arguments.length == 0) {
                                return this.domElement[elemContentsProperty];
                            } else {
                                var valueToWrite = arguments[0];
                                if (elemContentsProperty === "innerHTML") ko.utils.setHtml(this.domElement, valueToWrite);else this.domElement[elemContentsProperty] = valueToWrite;
                            }
                        };

                        var dataDomDataPrefix = ko.utils.domData.nextKey() + "_";
                        ko.templateSources.domElement.prototype['data'] = function (key /*, valueToWrite */) {
                            if (arguments.length === 1) {
                                return ko.utils.domData.get(this.domElement, dataDomDataPrefix + key);
                            } else {
                                ko.utils.domData.set(this.domElement, dataDomDataPrefix + key, arguments[1]);
                            }
                        };

                        var templatesDomDataKey = ko.utils.domData.nextKey();
                        function getTemplateDomData(element) {
                            return ko.utils.domData.get(element, templatesDomDataKey) || {};
                        }
                        function setTemplateDomData(element, data) {
                            ko.utils.domData.set(element, templatesDomDataKey, data);
                        }

                        ko.templateSources.domElement.prototype['nodes'] = function () /* valueToWrite */{
                            var element = this.domElement;
                            if (arguments.length == 0) {
                                var templateData = getTemplateDomData(element),
                                    containerData = templateData.containerData;
                                return containerData || (this.templateType === templateTemplate ? element.content : this.templateType === templateElement ? element : undefined);
                            } else {
                                var valueToWrite = arguments[0];
                                setTemplateDomData(element, { containerData: valueToWrite });
                            }
                        };

                        // ---- ko.templateSources.anonymousTemplate -----
                        // Anonymous templates are normally saved/retrieved as DOM nodes through "nodes".
                        // For compatibility, you can also read "text"; it will be serialized from the nodes on demand.
                        // Writing to "text" is still supported, but then the template data will not be available as DOM nodes.

                        ko.templateSources.anonymousTemplate = function (element) {
                            this.domElement = element;
                        };
                        ko.templateSources.anonymousTemplate.prototype = new ko.templateSources.domElement();
                        ko.templateSources.anonymousTemplate.prototype.constructor = ko.templateSources.anonymousTemplate;
                        ko.templateSources.anonymousTemplate.prototype['text'] = function () /* valueToWrite */{
                            if (arguments.length == 0) {
                                var templateData = getTemplateDomData(this.domElement);
                                if (templateData.textData === undefined && templateData.containerData) templateData.textData = templateData.containerData.innerHTML;
                                return templateData.textData;
                            } else {
                                var valueToWrite = arguments[0];
                                setTemplateDomData(this.domElement, { textData: valueToWrite });
                            }
                        };

                        ko.exportSymbol('templateSources', ko.templateSources);
                        ko.exportSymbol('templateSources.domElement', ko.templateSources.domElement);
                        ko.exportSymbol('templateSources.anonymousTemplate', ko.templateSources.anonymousTemplate);
                    })();
                    (function () {
                        var _templateEngine;
                        ko.setTemplateEngine = function (templateEngine) {
                            if (templateEngine != undefined && !(templateEngine instanceof ko.templateEngine)) throw new Error("templateEngine must inherit from ko.templateEngine");
                            _templateEngine = templateEngine;
                        };

                        function invokeForEachNodeInContinuousRange(firstNode, lastNode, action) {
                            var node,
                                nextInQueue = firstNode,
                                firstOutOfRangeNode = ko.virtualElements.nextSibling(lastNode);
                            while (nextInQueue && (node = nextInQueue) !== firstOutOfRangeNode) {
                                nextInQueue = ko.virtualElements.nextSibling(node);
                                action(node, nextInQueue);
                            }
                        }

                        function activateBindingsOnContinuousNodeArray(continuousNodeArray, bindingContext) {
                            // To be used on any nodes that have been rendered by a template and have been inserted into some parent element
                            // Walks through continuousNodeArray (which *must* be continuous, i.e., an uninterrupted sequence of sibling nodes, because
                            // the algorithm for walking them relies on this), and for each top-level item in the virtual-element sense,
                            // (1) Does a regular "applyBindings" to associate bindingContext with this node and to activate any non-memoized bindings
                            // (2) Unmemoizes any memos in the DOM subtree (e.g., to activate bindings that had been memoized during template rewriting)

                            if (continuousNodeArray.length) {
                                var firstNode = continuousNodeArray[0],
                                    lastNode = continuousNodeArray[continuousNodeArray.length - 1],
                                    parentNode = firstNode.parentNode,
                                    provider = ko.bindingProvider['instance'],
                                    preprocessNode = provider['preprocessNode'];

                                if (preprocessNode) {
                                    invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node, nextNodeInRange) {
                                        var nodePreviousSibling = node.previousSibling;
                                        var newNodes = preprocessNode.call(provider, node);
                                        if (newNodes) {
                                            if (node === firstNode) firstNode = newNodes[0] || nextNodeInRange;
                                            if (node === lastNode) lastNode = newNodes[newNodes.length - 1] || nodePreviousSibling;
                                        }
                                    });

                                    // Because preprocessNode can change the nodes, including the first and last nodes, update continuousNodeArray to match.
                                    // We need the full set, including inner nodes, because the unmemoize step might remove the first node (and so the real
                                    // first node needs to be in the array).
                                    continuousNodeArray.length = 0;
                                    if (!firstNode) {
                                        // preprocessNode might have removed all the nodes, in which case there's nothing left to do
                                        return;
                                    }
                                    if (firstNode === lastNode) {
                                        continuousNodeArray.push(firstNode);
                                    } else {
                                        continuousNodeArray.push(firstNode, lastNode);
                                        ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                                    }
                                }

                                // Need to applyBindings *before* unmemoziation, because unmemoization might introduce extra nodes (that we don't want to re-bind)
                                // whereas a regular applyBindings won't introduce new memoized nodes
                                invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node) {
                                    if (node.nodeType === 1 || node.nodeType === 8) ko.applyBindings(bindingContext, node);
                                });
                                invokeForEachNodeInContinuousRange(firstNode, lastNode, function (node) {
                                    if (node.nodeType === 1 || node.nodeType === 8) ko.memoization.unmemoizeDomNodeAndDescendants(node, [bindingContext]);
                                });

                                // Make sure any changes done by applyBindings or unmemoize are reflected in the array
                                ko.utils.fixUpContinuousNodeArray(continuousNodeArray, parentNode);
                            }
                        }

                        function getFirstNodeFromPossibleArray(nodeOrNodeArray) {
                            return nodeOrNodeArray.nodeType ? nodeOrNodeArray : nodeOrNodeArray.length > 0 ? nodeOrNodeArray[0] : null;
                        }

                        function executeTemplate(targetNodeOrNodeArray, renderMode, template, bindingContext, options) {
                            options = options || {};
                            var firstTargetNode = targetNodeOrNodeArray && getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                            var templateDocument = (firstTargetNode || template || {}).ownerDocument;
                            var templateEngineToUse = options['templateEngine'] || _templateEngine;
                            ko.templateRewriting.ensureTemplateIsRewritten(template, templateEngineToUse, templateDocument);
                            var renderedNodesArray = templateEngineToUse['renderTemplate'](template, bindingContext, options, templateDocument);

                            // Loosely check result is an array of DOM nodes
                            if (typeof renderedNodesArray.length != "number" || renderedNodesArray.length > 0 && typeof renderedNodesArray[0].nodeType != "number") throw new Error("Template engine must return an array of DOM nodes");

                            var haveAddedNodesToParent = false;
                            switch (renderMode) {
                                case "replaceChildren":
                                    ko.virtualElements.setDomNodeChildren(targetNodeOrNodeArray, renderedNodesArray);
                                    haveAddedNodesToParent = true;
                                    break;
                                case "replaceNode":
                                    ko.utils.replaceDomNodes(targetNodeOrNodeArray, renderedNodesArray);
                                    haveAddedNodesToParent = true;
                                    break;
                                case "ignoreTargetNode":
                                    break;
                                default:
                                    throw new Error("Unknown renderMode: " + renderMode);
                            }

                            if (haveAddedNodesToParent) {
                                activateBindingsOnContinuousNodeArray(renderedNodesArray, bindingContext);
                                if (options['afterRender']) ko.dependencyDetection.ignore(options['afterRender'], null, [renderedNodesArray, bindingContext['$data']]);
                            }

                            return renderedNodesArray;
                        }

                        function resolveTemplateName(template, data, context) {
                            // The template can be specified as:
                            if (ko.isObservable(template)) {
                                // 1. An observable, with string value
                                return template();
                            } else if (typeof template === 'function') {
                                // 2. A function of (data, context) returning a string
                                return template(data, context);
                            } else {
                                // 3. A string
                                return template;
                            }
                        }

                        ko.renderTemplate = function (template, dataOrBindingContext, options, targetNodeOrNodeArray, renderMode) {
                            options = options || {};
                            if ((options['templateEngine'] || _templateEngine) == undefined) throw new Error("Set a template engine before calling renderTemplate");
                            renderMode = renderMode || "replaceChildren";

                            if (targetNodeOrNodeArray) {
                                var firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);

                                var whenToDispose = function () {
                                    return !firstTargetNode || !ko.utils.domNodeIsAttachedToDocument(firstTargetNode);
                                }; // Passive disposal (on next evaluation)
                                var activelyDisposeWhenNodeIsRemoved = firstTargetNode && renderMode == "replaceNode" ? firstTargetNode.parentNode : firstTargetNode;

                                return ko.dependentObservable( // So the DOM is automatically updated when any dependency changes
                                function () {
                                    // Ensure we've got a proper binding context to work with
                                    var bindingContext = dataOrBindingContext && dataOrBindingContext instanceof ko.bindingContext ? dataOrBindingContext : new ko.bindingContext(dataOrBindingContext, null, null, null, { "exportDependencies": true });

                                    var templateName = resolveTemplateName(template, bindingContext['$data'], bindingContext),
                                        renderedNodesArray = executeTemplate(targetNodeOrNodeArray, renderMode, templateName, bindingContext, options);

                                    if (renderMode == "replaceNode") {
                                        targetNodeOrNodeArray = renderedNodesArray;
                                        firstTargetNode = getFirstNodeFromPossibleArray(targetNodeOrNodeArray);
                                    }
                                }, null, { disposeWhen: whenToDispose, disposeWhenNodeIsRemoved: activelyDisposeWhenNodeIsRemoved });
                            } else {
                                // We don't yet have a DOM node to evaluate, so use a memo and render the template later when there is a DOM node
                                return ko.memoization.memoize(function (domNode) {
                                    ko.renderTemplate(template, dataOrBindingContext, options, domNode, "replaceNode");
                                });
                            }
                        };

                        ko.renderTemplateForEach = function (template, arrayOrObservableArray, options, targetNode, parentBindingContext) {
                            // Since setDomNodeChildrenFromArrayMapping always calls executeTemplateForArrayItem and then
                            // activateBindingsCallback for added items, we can store the binding context in the former to use in the latter.
                            var arrayItemContext;

                            // This will be called by setDomNodeChildrenFromArrayMapping to get the nodes to add to targetNode
                            var executeTemplateForArrayItem = function (arrayValue, index) {
                                // Support selecting template as a function of the data being rendered
                                arrayItemContext = parentBindingContext['createChildContext'](arrayValue, options['as'], function (context) {
                                    context['$index'] = index;
                                });

                                var templateName = resolveTemplateName(template, arrayValue, arrayItemContext);
                                return executeTemplate(null, "ignoreTargetNode", templateName, arrayItemContext, options);
                            };

                            // This will be called whenever setDomNodeChildrenFromArrayMapping has added nodes to targetNode
                            var activateBindingsCallback = function (arrayValue, addedNodesArray, index) {
                                activateBindingsOnContinuousNodeArray(addedNodesArray, arrayItemContext);
                                if (options['afterRender']) options['afterRender'](addedNodesArray, arrayValue);

                                // release the "cache" variable, so that it can be collected by
                                // the GC when its value isn't used from within the bindings anymore.
                                arrayItemContext = null;
                            };

                            return ko.dependentObservable(function () {
                                var unwrappedArray = ko.utils.unwrapObservable(arrayOrObservableArray) || [];
                                if (typeof unwrappedArray.length == "undefined") // Coerce single value into array
                                    unwrappedArray = [unwrappedArray];

                                // Filter out any entries marked as destroyed
                                var filteredArray = ko.utils.arrayFilter(unwrappedArray, function (item) {
                                    return options['includeDestroyed'] || item === undefined || item === null || !ko.utils.unwrapObservable(item['_destroy']);
                                });

                                // Call setDomNodeChildrenFromArrayMapping, ignoring any observables unwrapped within (most likely from a callback function).
                                // If the array items are observables, though, they will be unwrapped in executeTemplateForArrayItem and managed within setDomNodeChildrenFromArrayMapping.
                                ko.dependencyDetection.ignore(ko.utils.setDomNodeChildrenFromArrayMapping, null, [targetNode, filteredArray, executeTemplateForArrayItem, options, activateBindingsCallback]);
                            }, null, { disposeWhenNodeIsRemoved: targetNode });
                        };

                        var templateComputedDomDataKey = ko.utils.domData.nextKey();
                        function disposeOldComputedAndStoreNewOne(element, newComputed) {
                            var oldComputed = ko.utils.domData.get(element, templateComputedDomDataKey);
                            if (oldComputed && typeof oldComputed.dispose == 'function') oldComputed.dispose();
                            ko.utils.domData.set(element, templateComputedDomDataKey, newComputed && newComputed.isActive() ? newComputed : undefined);
                        }

                        ko.bindingHandlers['template'] = {
                            'init': function (element, valueAccessor) {
                                // Support anonymous templates
                                var bindingValue = ko.utils.unwrapObservable(valueAccessor());
                                if (typeof bindingValue == "string" || bindingValue['name']) {
                                    // It's a named template - clear the element
                                    ko.virtualElements.emptyNode(element);
                                } else if ('nodes' in bindingValue) {
                                    // We've been given an array of DOM nodes. Save them as the template source.
                                    // There is no known use case for the node array being an observable array (if the output
                                    // varies, put that behavior *into* your template - that's what templates are for), and
                                    // the implementation would be a mess, so assert that it's not observable.
                                    var nodes = bindingValue['nodes'] || [];
                                    if (ko.isObservable(nodes)) {
                                        throw new Error('The "nodes" option must be a plain, non-observable array.');
                                    }
                                    var container = ko.utils.moveCleanedNodesToContainerElement(nodes); // This also removes the nodes from their current parent
                                    new ko.templateSources.anonymousTemplate(element)['nodes'](container);
                                } else {
                                    // It's an anonymous template - store the element contents, then clear the element
                                    var templateNodes = ko.virtualElements.childNodes(element),
                                        container = ko.utils.moveCleanedNodesToContainerElement(templateNodes); // This also removes the nodes from their current parent
                                    new ko.templateSources.anonymousTemplate(element)['nodes'](container);
                                }
                                return { 'controlsDescendantBindings': true };
                            },
                            'update': function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                                var value = valueAccessor(),
                                    options = ko.utils.unwrapObservable(value),
                                    shouldDisplay = true,
                                    templateComputed = null,
                                    templateName;

                                if (typeof options == "string") {
                                    templateName = value;
                                    options = {};
                                } else {
                                    templateName = options['name'];

                                    // Support "if"/"ifnot" conditions
                                    if ('if' in options) shouldDisplay = ko.utils.unwrapObservable(options['if']);
                                    if (shouldDisplay && 'ifnot' in options) shouldDisplay = !ko.utils.unwrapObservable(options['ifnot']);
                                }

                                if ('foreach' in options) {
                                    // Render once for each data point (treating data set as empty if shouldDisplay==false)
                                    var dataArray = shouldDisplay && options['foreach'] || [];
                                    templateComputed = ko.renderTemplateForEach(templateName || element, dataArray, options, element, bindingContext);
                                } else if (!shouldDisplay) {
                                    ko.virtualElements.emptyNode(element);
                                } else {
                                    // Render once for this single data point (or use the viewModel if no data was provided)
                                    var innerBindingContext = 'data' in options ? bindingContext.createStaticChildContext(options['data'], options['as']) : // Given an explitit 'data' value, we create a child binding context for it
                                    bindingContext; // Given no explicit 'data' value, we retain the same binding context
                                    templateComputed = ko.renderTemplate(templateName || element, innerBindingContext, options, element);
                                }

                                // It only makes sense to have a single template computed per element (otherwise which one should have its output displayed?)
                                disposeOldComputedAndStoreNewOne(element, templateComputed);
                            }
                        };

                        // Anonymous templates can't be rewritten. Give a nice error message if you try to do it.
                        ko.expressionRewriting.bindingRewriteValidators['template'] = function (bindingValue) {
                            var parsedBindingValue = ko.expressionRewriting.parseObjectLiteral(bindingValue);

                            if (parsedBindingValue.length == 1 && parsedBindingValue[0]['unknown']) return null; // It looks like a string literal, not an object literal, so treat it as a named template (which is allowed for rewriting)

                            if (ko.expressionRewriting.keyValueArrayContainsKey(parsedBindingValue, "name")) return null; // Named templates can be rewritten, so return "no error"
                            return "This template engine does not support anonymous templates nested within its templates";
                        };

                        ko.virtualElements.allowedBindings['template'] = true;
                    })();

                    ko.exportSymbol('setTemplateEngine', ko.setTemplateEngine);
                    ko.exportSymbol('renderTemplate', ko.renderTemplate);
                    // Go through the items that have been added and deleted and try to find matches between them.
                    ko.utils.findMovesInArrayComparison = function (left, right, limitFailedCompares) {
                        if (left.length && right.length) {
                            var failedCompares, l, r, leftItem, rightItem;
                            for (failedCompares = l = 0; (!limitFailedCompares || failedCompares < limitFailedCompares) && (leftItem = left[l]); ++l) {
                                for (r = 0; rightItem = right[r]; ++r) {
                                    if (leftItem['value'] === rightItem['value']) {
                                        leftItem['moved'] = rightItem['index'];
                                        rightItem['moved'] = leftItem['index'];
                                        right.splice(r, 1); // This item is marked as moved; so remove it from right list
                                        failedCompares = r = 0; // Reset failed compares count because we're checking for consecutive failures
                                        break;
                                    }
                                }
                                failedCompares += r;
                            }
                        }
                    };

                    ko.utils.compareArrays = function () {
                        var statusNotInOld = 'added',
                            statusNotInNew = 'deleted';

                        // Simple calculation based on Levenshtein distance.
                        function compareArrays(oldArray, newArray, options) {
                            // For backward compatibility, if the third arg is actually a bool, interpret
                            // it as the old parameter 'dontLimitMoves'. Newer code should use { dontLimitMoves: true }.
                            options = typeof options === 'boolean' ? { 'dontLimitMoves': options } : options || {};
                            oldArray = oldArray || [];
                            newArray = newArray || [];

                            if (oldArray.length < newArray.length) return compareSmallArrayToBigArray(oldArray, newArray, statusNotInOld, statusNotInNew, options);else return compareSmallArrayToBigArray(newArray, oldArray, statusNotInNew, statusNotInOld, options);
                        }

                        function compareSmallArrayToBigArray(smlArray, bigArray, statusNotInSml, statusNotInBig, options) {
                            var myMin = Math.min,
                                myMax = Math.max,
                                editDistanceMatrix = [],
                                smlIndex,
                                smlIndexMax = smlArray.length,
                                bigIndex,
                                bigIndexMax = bigArray.length,
                                compareRange = bigIndexMax - smlIndexMax || 1,
                                maxDistance = smlIndexMax + bigIndexMax + 1,
                                thisRow,
                                lastRow,
                                bigIndexMaxForRow,
                                bigIndexMinForRow;

                            for (smlIndex = 0; smlIndex <= smlIndexMax; smlIndex++) {
                                lastRow = thisRow;
                                editDistanceMatrix.push(thisRow = []);
                                bigIndexMaxForRow = myMin(bigIndexMax, smlIndex + compareRange);
                                bigIndexMinForRow = myMax(0, smlIndex - 1);
                                for (bigIndex = bigIndexMinForRow; bigIndex <= bigIndexMaxForRow; bigIndex++) {
                                    if (!bigIndex) thisRow[bigIndex] = smlIndex + 1;else if (!smlIndex) // Top row - transform empty array into new array via additions
                                        thisRow[bigIndex] = bigIndex + 1;else if (smlArray[smlIndex - 1] === bigArray[bigIndex - 1]) thisRow[bigIndex] = lastRow[bigIndex - 1]; // copy value (no edit)
                                    else {
                                            var northDistance = lastRow[bigIndex] || maxDistance; // not in big (deletion)
                                            var westDistance = thisRow[bigIndex - 1] || maxDistance; // not in small (addition)
                                            thisRow[bigIndex] = myMin(northDistance, westDistance) + 1;
                                        }
                                }
                            }

                            var editScript = [],
                                meMinusOne,
                                notInSml = [],
                                notInBig = [];
                            for (smlIndex = smlIndexMax, bigIndex = bigIndexMax; smlIndex || bigIndex;) {
                                meMinusOne = editDistanceMatrix[smlIndex][bigIndex] - 1;
                                if (bigIndex && meMinusOne === editDistanceMatrix[smlIndex][bigIndex - 1]) {
                                    notInSml.push(editScript[editScript.length] = { // added
                                        'status': statusNotInSml,
                                        'value': bigArray[--bigIndex],
                                        'index': bigIndex });
                                } else if (smlIndex && meMinusOne === editDistanceMatrix[smlIndex - 1][bigIndex]) {
                                    notInBig.push(editScript[editScript.length] = { // deleted
                                        'status': statusNotInBig,
                                        'value': smlArray[--smlIndex],
                                        'index': smlIndex });
                                } else {
                                    --bigIndex;
                                    --smlIndex;
                                    if (!options['sparse']) {
                                        editScript.push({
                                            'status': "retained",
                                            'value': bigArray[bigIndex] });
                                    }
                                }
                            }

                            // Set a limit on the number of consecutive non-matching comparisons; having it a multiple of
                            // smlIndexMax keeps the time complexity of this algorithm linear.
                            ko.utils.findMovesInArrayComparison(notInBig, notInSml, !options['dontLimitMoves'] && smlIndexMax * 10);

                            return editScript.reverse();
                        }

                        return compareArrays;
                    }();

                    ko.exportSymbol('utils.compareArrays', ko.utils.compareArrays);
                    (function () {
                        // Objective:
                        // * Given an input array, a container DOM node, and a function from array elements to arrays of DOM nodes,
                        //   map the array elements to arrays of DOM nodes, concatenate together all these arrays, and use them to populate the container DOM node
                        // * Next time we're given the same combination of things (with the array possibly having mutated), update the container DOM node
                        //   so that its children is again the concatenation of the mappings of the array elements, but don't re-map any array elements that we
                        //   previously mapped - retain those nodes, and just insert/delete other ones

                        // "callbackAfterAddingNodes" will be invoked after any "mapping"-generated nodes are inserted into the container node
                        // You can use this, for example, to activate bindings on those nodes.

                        function mapNodeAndRefreshWhenChanged(containerNode, mapping, valueToMap, callbackAfterAddingNodes, index) {
                            // Map this array value inside a dependentObservable so we re-map when any dependency changes
                            var mappedNodes = [];
                            var dependentObservable = ko.dependentObservable(function () {
                                var newMappedNodes = mapping(valueToMap, index, ko.utils.fixUpContinuousNodeArray(mappedNodes, containerNode)) || [];

                                // On subsequent evaluations, just replace the previously-inserted DOM nodes
                                if (mappedNodes.length > 0) {
                                    ko.utils.replaceDomNodes(mappedNodes, newMappedNodes);
                                    if (callbackAfterAddingNodes) ko.dependencyDetection.ignore(callbackAfterAddingNodes, null, [valueToMap, newMappedNodes, index]);
                                }

                                // Replace the contents of the mappedNodes array, thereby updating the record
                                // of which nodes would be deleted if valueToMap was itself later removed
                                mappedNodes.length = 0;
                                ko.utils.arrayPushAll(mappedNodes, newMappedNodes);
                            }, null, { disposeWhenNodeIsRemoved: containerNode, disposeWhen: function () {
                                    return !ko.utils.anyDomNodeIsAttachedToDocument(mappedNodes);
                                } });
                            return { mappedNodes: mappedNodes, dependentObservable: dependentObservable.isActive() ? dependentObservable : undefined };
                        }

                        var lastMappingResultDomDataKey = ko.utils.domData.nextKey(),
                            deletedItemDummyValue = ko.utils.domData.nextKey();

                        ko.utils.setDomNodeChildrenFromArrayMapping = function (domNode, array, mapping, options, callbackAfterAddingNodes) {
                            // Compare the provided array against the previous one
                            array = array || [];
                            options = options || {};
                            var isFirstExecution = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) === undefined;
                            var lastMappingResult = ko.utils.domData.get(domNode, lastMappingResultDomDataKey) || [];
                            var lastArray = ko.utils.arrayMap(lastMappingResult, function (x) {
                                return x.arrayEntry;
                            });
                            var editScript = ko.utils.compareArrays(lastArray, array, options['dontLimitMoves']);

                            // Build the new mapping result
                            var newMappingResult = [];
                            var lastMappingResultIndex = 0;
                            var newMappingResultIndex = 0;

                            var nodesToDelete = [];
                            var itemsToProcess = [];
                            var itemsForBeforeRemoveCallbacks = [];
                            var itemsForMoveCallbacks = [];
                            var itemsForAfterAddCallbacks = [];
                            var mapData;

                            function itemMovedOrRetained(editScriptIndex, oldPosition) {
                                mapData = lastMappingResult[oldPosition];
                                if (newMappingResultIndex !== oldPosition) itemsForMoveCallbacks[editScriptIndex] = mapData;
                                // Since updating the index might change the nodes, do so before calling fixUpContinuousNodeArray
                                mapData.indexObservable(newMappingResultIndex++);
                                ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode);
                                newMappingResult.push(mapData);
                                itemsToProcess.push(mapData);
                            }

                            function callCallback(callback, items) {
                                if (callback) {
                                    for (var i = 0, n = items.length; i < n; i++) {
                                        if (items[i]) {
                                            ko.utils.arrayForEach(items[i].mappedNodes, function (node) {
                                                callback(node, i, items[i].arrayEntry);
                                            });
                                        }
                                    }
                                }
                            }

                            for (var i = 0, editScriptItem, movedIndex; editScriptItem = editScript[i]; i++) {
                                movedIndex = editScriptItem['moved'];
                                switch (editScriptItem['status']) {
                                    case "deleted":
                                        if (movedIndex === undefined) {
                                            mapData = lastMappingResult[lastMappingResultIndex];

                                            // Stop tracking changes to the mapping for these nodes
                                            if (mapData.dependentObservable) {
                                                mapData.dependentObservable.dispose();
                                                mapData.dependentObservable = undefined;
                                            }

                                            // Queue these nodes for later removal
                                            if (ko.utils.fixUpContinuousNodeArray(mapData.mappedNodes, domNode).length) {
                                                if (options['beforeRemove']) {
                                                    newMappingResult.push(mapData);
                                                    itemsToProcess.push(mapData);
                                                    if (mapData.arrayEntry === deletedItemDummyValue) {
                                                        mapData = null;
                                                    } else {
                                                        itemsForBeforeRemoveCallbacks[i] = mapData;
                                                    }
                                                }
                                                if (mapData) {
                                                    nodesToDelete.push.apply(nodesToDelete, mapData.mappedNodes);
                                                }
                                            }
                                        }
                                        lastMappingResultIndex++;
                                        break;

                                    case "retained":
                                        itemMovedOrRetained(i, lastMappingResultIndex++);
                                        break;

                                    case "added":
                                        if (movedIndex !== undefined) {
                                            itemMovedOrRetained(i, movedIndex);
                                        } else {
                                            mapData = { arrayEntry: editScriptItem['value'], indexObservable: ko.observable(newMappingResultIndex++) };
                                            newMappingResult.push(mapData);
                                            itemsToProcess.push(mapData);
                                            if (!isFirstExecution) itemsForAfterAddCallbacks[i] = mapData;
                                        }
                                        break;
                                }
                            }

                            // Store a copy of the array items we just considered so we can difference it next time
                            ko.utils.domData.set(domNode, lastMappingResultDomDataKey, newMappingResult);

                            // Call beforeMove first before any changes have been made to the DOM
                            callCallback(options['beforeMove'], itemsForMoveCallbacks);

                            // Next remove nodes for deleted items (or just clean if there's a beforeRemove callback)
                            ko.utils.arrayForEach(nodesToDelete, options['beforeRemove'] ? ko.cleanNode : ko.removeNode);

                            // Next add/reorder the remaining items (will include deleted items if there's a beforeRemove callback)
                            for (var i = 0, nextNode = ko.virtualElements.firstChild(domNode), lastNode, node; mapData = itemsToProcess[i]; i++) {
                                // Get nodes for newly added items
                                if (!mapData.mappedNodes) ko.utils.extend(mapData, mapNodeAndRefreshWhenChanged(domNode, mapping, mapData.arrayEntry, callbackAfterAddingNodes, mapData.indexObservable));

                                // Put nodes in the right place if they aren't there already
                                for (var j = 0; node = mapData.mappedNodes[j]; nextNode = node.nextSibling, lastNode = node, j++) {
                                    if (node !== nextNode) ko.virtualElements.insertAfter(domNode, node, lastNode);
                                }

                                // Run the callbacks for newly added nodes (for example, to apply bindings, etc.)
                                if (!mapData.initialized && callbackAfterAddingNodes) {
                                    callbackAfterAddingNodes(mapData.arrayEntry, mapData.mappedNodes, mapData.indexObservable);
                                    mapData.initialized = true;
                                }
                            }

                            // If there's a beforeRemove callback, call it after reordering.
                            // Note that we assume that the beforeRemove callback will usually be used to remove the nodes using
                            // some sort of animation, which is why we first reorder the nodes that will be removed. If the
                            // callback instead removes the nodes right away, it would be more efficient to skip reordering them.
                            // Perhaps we'll make that change in the future if this scenario becomes more common.
                            callCallback(options['beforeRemove'], itemsForBeforeRemoveCallbacks);

                            // Replace the stored values of deleted items with a dummy value. This provides two benefits: it marks this item
                            // as already "removed" so we won't call beforeRemove for it again, and it ensures that the item won't match up
                            // with an actual item in the array and appear as "retained" or "moved".
                            for (i = 0; i < itemsForBeforeRemoveCallbacks.length; ++i) {
                                if (itemsForBeforeRemoveCallbacks[i]) {
                                    itemsForBeforeRemoveCallbacks[i].arrayEntry = deletedItemDummyValue;
                                }
                            }

                            // Finally call afterMove and afterAdd callbacks
                            callCallback(options['afterMove'], itemsForMoveCallbacks);
                            callCallback(options['afterAdd'], itemsForAfterAddCallbacks);
                        };
                    })();

                    ko.exportSymbol('utils.setDomNodeChildrenFromArrayMapping', ko.utils.setDomNodeChildrenFromArrayMapping);
                    ko.nativeTemplateEngine = function () {
                        this['allowTemplateRewriting'] = false;
                    };

                    ko.nativeTemplateEngine.prototype = new ko.templateEngine();
                    ko.nativeTemplateEngine.prototype.constructor = ko.nativeTemplateEngine;
                    ko.nativeTemplateEngine.prototype['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
                        var useNodesIfAvailable = !(ko.utils.ieVersion < 9),
                            // IE<9 cloneNode doesn't work properly
                        templateNodesFunc = useNodesIfAvailable ? templateSource['nodes'] : null,
                            templateNodes = templateNodesFunc ? templateSource['nodes']() : null;

                        if (templateNodes) {
                            return ko.utils.makeArray(templateNodes.cloneNode(true).childNodes);
                        } else {
                            var templateText = templateSource['text']();
                            return ko.utils.parseHtmlFragment(templateText, templateDocument);
                        }
                    };

                    ko.nativeTemplateEngine.instance = new ko.nativeTemplateEngine();
                    ko.setTemplateEngine(ko.nativeTemplateEngine.instance);

                    ko.exportSymbol('nativeTemplateEngine', ko.nativeTemplateEngine);
                    (function () {
                        ko.jqueryTmplTemplateEngine = function () {
                            // Detect which version of jquery-tmpl you're using. Unfortunately jquery-tmpl
                            // doesn't expose a version number, so we have to infer it.
                            // Note that as of Knockout 1.3, we only support jQuery.tmpl 1.0.0pre and later,
                            // which KO internally refers to as version "2", so older versions are no longer detected.
                            var jQueryTmplVersion = this.jQueryTmplVersion = function () {
                                if (!jQueryInstance || !jQueryInstance['tmpl']) return 0;
                                // Since it exposes no official version number, we use our own numbering system. To be updated as jquery-tmpl evolves.
                                try {
                                    if (jQueryInstance['tmpl']['tag']['tmpl']['open'].toString().indexOf('__') >= 0) {
                                        // Since 1.0.0pre, custom tags should append markup to an array called "__"
                                        return 2; // Final version of jquery.tmpl
                                    }
                                } catch (ex) {/* Apparently not the version we were looking for */}

                                return 1; // Any older version that we don't support
                            }();

                            function ensureHasReferencedJQueryTemplates() {
                                if (jQueryTmplVersion < 2) throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
                            }

                            function executeTemplate(compiledTemplate, data, jQueryTemplateOptions) {
                                return jQueryInstance['tmpl'](compiledTemplate, data, jQueryTemplateOptions);
                            }

                            this['renderTemplateSource'] = function (templateSource, bindingContext, options, templateDocument) {
                                templateDocument = templateDocument || document;
                                options = options || {};
                                ensureHasReferencedJQueryTemplates();

                                // Ensure we have stored a precompiled version of this template (don't want to reparse on every render)
                                var precompiled = templateSource['data']('precompiled');
                                if (!precompiled) {
                                    var templateText = templateSource['text']() || "";
                                    // Wrap in "with($whatever.koBindingContext) { ... }"
                                    templateText = "{{ko_with $item.koBindingContext}}" + templateText + "{{/ko_with}}";

                                    precompiled = jQueryInstance['template'](null, templateText);
                                    templateSource['data']('precompiled', precompiled);
                                }

                                var data = [bindingContext['$data']]; // Prewrap the data in an array to stop jquery.tmpl from trying to unwrap any arrays
                                var jQueryTemplateOptions = jQueryInstance['extend']({ 'koBindingContext': bindingContext }, options['templateOptions']);

                                var resultNodes = executeTemplate(precompiled, data, jQueryTemplateOptions);
                                resultNodes['appendTo'](templateDocument.createElement("div")); // Using "appendTo" forces jQuery/jQuery.tmpl to perform necessary cleanup work

                                jQueryInstance['fragments'] = {}; // Clear jQuery's fragment cache to avoid a memory leak after a large number of template renders
                                return resultNodes;
                            };

                            this['createJavaScriptEvaluatorBlock'] = function (script) {
                                return "{{ko_code ((function() { return " + script + " })()) }}";
                            };

                            this['addTemplate'] = function (templateName, templateMarkup) {
                                document.write("<script type='text/html' id='" + templateName + "'>" + templateMarkup + "<" + "/script>");
                            };

                            if (jQueryTmplVersion > 0) {
                                jQueryInstance['tmpl']['tag']['ko_code'] = {
                                    open: "__.push($1 || '');"
                                };
                                jQueryInstance['tmpl']['tag']['ko_with'] = {
                                    open: "with($1) {",
                                    close: "} "
                                };
                            }
                        };

                        ko.jqueryTmplTemplateEngine.prototype = new ko.templateEngine();
                        ko.jqueryTmplTemplateEngine.prototype.constructor = ko.jqueryTmplTemplateEngine;

                        // Use this one by default *only if jquery.tmpl is referenced*
                        var jqueryTmplTemplateEngineInstance = new ko.jqueryTmplTemplateEngine();
                        if (jqueryTmplTemplateEngineInstance.jQueryTmplVersion > 0) ko.setTemplateEngine(jqueryTmplTemplateEngineInstance);

                        ko.exportSymbol('jqueryTmplTemplateEngine', ko.jqueryTmplTemplateEngine);
                    })();
                });
            })();
        })();
    })(this);

    return _retrieveGlobal();
});
System.registerDynamic("github:knockout/knockout@3.4.1.js", ["github:knockout/knockout@3.4.1/dist/knockout.debug.js"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:knockout/knockout@3.4.1/dist/knockout.debug.js");
  return module.exports;
});
(function() {
var define = System.amdDefine;
(function(global, factory) {
  "use strict";
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) : function(w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }
      return factory(w);
    };
  } else {
    factory(global);
  }
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
  "use strict";
  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};
  function DOMEval(code, doc) {
    doc = doc || document;
    var script = doc.createElement("script");
    script.text = code;
    doc.head.appendChild(script).parentNode.removeChild(script);
  }
  var version = "3.1.1",
      jQuery = function(selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g,
      fcamelCase = function(all, letter) {
        return letter.toUpperCase();
      };
  jQuery.fn = jQuery.prototype = {
    jquery: version,
    constructor: jQuery,
    length: 0,
    toArray: function() {
      return slice.call(this);
    },
    get: function(num) {
      if (num == null) {
        return slice.call(this);
      }
      return num < 0 ? this[num + this.length] : this[num];
    },
    pushStack: function(elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      return ret;
    },
    each: function(callback) {
      return jQuery.each(this, callback);
    },
    map: function(callback) {
      return this.pushStack(jQuery.map(this, function(elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function() {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function() {
      return this.eq(0);
    },
    last: function() {
      return this.eq(-1);
    },
    eq: function(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function() {
      return this.prevObject || this.constructor();
    },
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };
  jQuery.extend = jQuery.fn.extend = function() {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[i] || {};
      i++;
    }
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    isReady: true,
    error: function(msg) {
      throw new Error(msg);
    },
    noop: function() {},
    isFunction: function(obj) {
      return jQuery.type(obj) === "function";
    },
    isArray: Array.isArray,
    isWindow: function(obj) {
      return obj != null && obj === obj.window;
    },
    isNumeric: function(obj) {
      var type = jQuery.type(obj);
      return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
    },
    isPlainObject: function(obj) {
      var proto,
          Ctor;
      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }
      proto = getProto(obj);
      if (!proto) {
        return true;
      }
      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function(obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    type: function(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    },
    globalEval: function(code) {
      DOMEval(code);
    },
    camelCase: function(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },
    nodeName: function(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function(obj, callback) {
      var length,
          i = 0;
      if (isArrayLike(obj)) {
        length = obj.length;
        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }
      return obj;
    },
    trim: function(text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    makeArray: function(arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    merge: function(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;
      for (; j < len; j++) {
        first[i++] = second[j];
      }
      first.length = i;
      return first;
    },
    grep: function(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert;
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }
      return matches;
    },
    map: function(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = [];
      if (isArrayLike(elems)) {
        length = elems.length;
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret.push(value);
          }
        }
      }
      return concat.apply([], ret);
    },
    guid: 1,
    proxy: function(fn, context) {
      var tmp,
          args,
          proxy;
      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    now: Date.now,
    support: support
  });
  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  }
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });
  function isArrayLike(obj) {
    var length = !!obj && "length" in obj && obj.length,
        type = jQuery.type(obj);
    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }
    return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
  }
  var Sizzle = (function(window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function(a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        indexOf = function(list, elem) {
          var i = 0,
              len = list.length;
          for (; i < len; i++) {
            if (list[i] === elem) {
              return i;
            }
          }
          return -1;
        },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        whitespace = "[\\x20\\t\\r\\n\\f]",
        identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
        rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
          "ID": new RegExp("^#(" + identifier + ")"),
          "CLASS": new RegExp("^\\.(" + identifier + ")"),
          "TAG": new RegExp("^(" + identifier + "|[*])"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function(_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        },
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function(ch, asCodePoint) {
          if (asCodePoint) {
            if (ch === "\0") {
              return "\uFFFD";
            }
            return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
          }
          return "\\" + ch;
        },
        unloadHandler = function() {
          setDocument();
        },
        disabledAncestor = addCombinator(function(elem) {
          return elem.disabled === true && ("form" in elem || "label" in elem);
        }, {
          dir: "parentNode",
          next: "legend"
        });
    try {
      push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {apply: arr.length ? function(target, els) {
          push_native.apply(target, slice.call(els));
        } : function(target, els) {
          var j = target.length,
              i = 0;
          while ((target[j++] = els[i++])) {}
          target.length = j - 1;
        }};
    }
    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          nodeType = context ? context.nodeType : 9;
      results = results || [];
      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      }
      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }
        context = context || document;
        if (documentIsHTML) {
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            if ((m = match[1])) {
              if (nodeType === 9) {
                if ((elem = context.getElementById(m))) {
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }
          if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            if (nodeType !== 1) {
              newContext = context;
              newSelector = selector;
            } else if (context.nodeName.toLowerCase() !== "object") {
              if ((nid = context.getAttribute("id"))) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", (nid = expando));
              }
              groups = tokenize(selector);
              i = groups.length;
              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }
              newSelector = groups.join(",");
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }
            if (newSelector) {
              try {
                push.apply(results, newContext.querySelectorAll(newSelector));
                return results;
              } catch (qsaError) {} finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    function createCache() {
      var keys = [];
      function cache(key, value) {
        if (keys.push(key + " ") > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return (cache[key + " "] = value);
      }
      return cache;
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var el = document.createElement("fieldset");
      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
        el = null;
      }
    }
    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;
      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
      if (diff) {
        return diff;
      }
      if (cur) {
        while ((cur = cur.nextSibling)) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function(elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    function createDisabledPseudo(disabled) {
      return function(elem) {
        if ("form" in elem) {
          if (elem.parentNode && elem.disabled === false) {
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            }
            return elem.isDisabled === disabled || elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
          }
          return elem.disabled === disabled;
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        }
        return false;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function(argument) {
        argument = +argument;
        return markFunction(function(seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;
          while (i--) {
            if (seed[(j = matchIndexes[i])]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    }
    support = Sizzle.support = {};
    isXML = Sizzle.isXML = function(elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== "HTML" : false;
    };
    setDocument = Sizzle.setDocument = function(node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document);
      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false);
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      support.attributes = assert(function(el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      support.getElementsByTagName = assert(function(el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      });
      support.getElementsByClassName = rnative.test(document.getElementsByClassName);
      support.getById = assert(function(el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      });
      if (support.getById) {
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            return elem.getAttribute("id") === attrId;
          };
        };
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function(id) {
          var attrId = id.replace(runescape, funescape);
          return function(elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        };
        Expr.find["ID"] = function(id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);
            if (elem) {
              node = elem.getAttributeNode("id");
              if (node && node.value === id) {
                return [elem];
              }
              elems = context.getElementsByName(id);
              i = 0;
              while ((elem = elems[i++])) {
                node = elem.getAttributeNode("id");
                if (node && node.value === id) {
                  return [elem];
                }
              }
            }
            return [];
          }
        };
      }
      Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag);
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function(tag, context) {
        var elem,
            tmp = [],
            i = 0,
            results = context.getElementsByTagName(tag);
        if (tag === "*") {
          while ((elem = results[i++])) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [];
      if ((support.qsa = rnative.test(document.querySelectorAll))) {
        assert(function(el) {
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          }
          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function(el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D");
          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          }
          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          docElem.appendChild(el).disabled = true;
          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }
      if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
        assert(function(el) {
          support.disconnectedMatch = matches.call(el, "*");
          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }
      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      hasCompare = rnative.test(docElem.compareDocumentPosition);
      contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while ((b = b.parentNode)) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = hasCompare ? function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
        if (compare) {
          return compare;
        }
        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }
          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          }
          return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        }
        return compare & 4 ? -1 : 1;
      } : function(a, b) {
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b];
        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while ((cur = cur.parentNode)) {
          ap.unshift(cur);
        }
        cur = b;
        while ((cur = cur.parentNode)) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };
    Sizzle.matches = function(expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function(elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, "='$1']");
      if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {}
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function(context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function(elem, name) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      var fn = Expr.attrHandle[name.toLowerCase()],
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };
    Sizzle.escape = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    Sizzle.error = function(msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    Sizzle.uniqueSort = function(results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0;
      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);
      if (hasDuplicate) {
        while ((elem = results[i++])) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      sortInput = null;
      return results;
    };
    getText = Sizzle.getText = function(elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;
      if (!nodeType) {
        while ((node = elem[i++])) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {dir: "parentNode"},
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {dir: "previousSibling"}
      },
      preFilter: {
        "ATTR": function(match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }
          return match.slice(0, 4);
        },
        "CHILD": function(match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === "nth") {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +((match[7] + match[8]) || match[3] === "odd");
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        "PSEUDO": function(match) {
          var excess,
              unquoted = !match[6] && match[2];
          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          }
          if (match[3]) {
            match[2] = match[4] || match[5] || "";
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function() {
            return true;
          } : function(elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function(name, operator, check) {
          return function(elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === "!=";
            }
            if (!operator) {
              return true;
            }
            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function(type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? function(elem) {
            return !!elem.parentNode;
          } : function(elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while ((node = node[dir])) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === "only" && !start && "nextSibling";
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                node = parent;
                outerCache = node[expando] || (node[expando] = {});
                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                if (useCache) {
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {});
                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                }
                if (diff === false) {
                  while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {});
                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }
                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || (diff % first === 0 && diff / first >= 0);
            }
          };
        },
        "PSEUDO": function(pseudo, argument) {
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;
              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function(elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        "not": markFunction(function(selector) {
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length;
            while (i--) {
              if ((elem = unmatched[i])) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function(elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function(selector) {
          return function(elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function(text) {
          text = text.replace(runescape, funescape);
          return function(elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        "lang": markFunction(function(lang) {
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function(elem) {
            var elemLang;
            do {
              if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        "target": function(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function(elem) {
          return elem === docElem;
        },
        "focus": function(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function(elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
        },
        "selected": function(elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        "empty": function(elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }
          return true;
        },
        "parent": function(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        "header": function(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        "first": createPositionalPseudo(function() {
          return [0];
        }),
        "last": createPositionalPseudo(function(matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function(matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function(matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function(matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length; ) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"];
    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function setFilters() {}
    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();
    tokenize = Sizzle.tokenize = function(selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push((tokens = []));
        }
        matched = false;
        if ((match = rcombinators.exec(soFar))) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    };
    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? function(elem, context, xml) {
        while ((elem = elem[dir])) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
        return false;
      } : function(elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName];
        if (xml) {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while ((elem = elem[dir])) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                return (newCache[2] = oldCache[2]);
              } else {
                uniqueCache[key] = newCache;
                if ((newCache[2] = matcher(elem, context, xml))) {
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function(elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;
      for (; i < len; i++) {
        if ((elem = unmatched[i])) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function(seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if ((elem = temp[i])) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i])) {
                  temp.push((matcherIn[i] = elem));
                }
              }
              postFinder(null, (matcherOut = []), temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          matchContext = addCombinator(function(elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function(elem) {
            return indexOf(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function(elem, context, xml) {
            var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
            checkContext = null;
            return ret;
          }];
      for (; i < len; i++) {
        if ((matcher = Expr.relative[tokens[i].type])) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function(seed, context, xml, results, outermost) {
            var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                len = elems.length;
            if (outermost) {
              outermostContext = context === document || context || outermost;
            }
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                if (!context && elem.ownerDocument !== document) {
                  setDocument(elem);
                  xml = !documentIsHTML;
                }
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context || document, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }
              if (bySet) {
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }
              if (seed) {
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }
                setMatched = condense(setMatched);
              }
              push.apply(results, setMatched);
              if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) {
                Sizzle.uniqueSort(results);
              }
            }
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }
            return unmatched;
          };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function(selector, match) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];
      if (!cached) {
        if (!match) {
          match = tokenize(selector);
        }
        i = match.length;
        while (i--) {
          cached = matcherFromTokens(match[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
        cached.selector = selector;
      }
      return cached;
    };
    select = Sizzle.select = function(selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));
      results = results || [];
      if (match.length === 1) {
        tokens = match[0] = match[0].slice(0);
        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
          if (!context) {
            return results;
          } else if (compiled) {
            context = context.parentNode;
          }
          selector = selector.slice(tokens.shift().value.length);
        }
        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
        while (i--) {
          token = tokens[i];
          if (Expr.relative[(type = token.type)]) {
            break;
          }
          if ((find = Expr.find[type])) {
            if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);
              if (!selector) {
                push.apply(results, seed);
                return results;
              }
              break;
            }
          }
        }
      }
      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    };
    support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
    support.detectDuplicates = !!hasDuplicate;
    setDocument();
    support.sortDetached = assert(function(el) {
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    });
    if (!assert(function(el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function(elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    }
    if (!support.attributes || !assert(function(el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function(elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    }
    if (!assert(function(el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function(elem, name, isXML) {
        var val;
        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }
    return Sizzle;
  })(window);
  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;
  var dir = function(elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;
    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }
        matched.push(elem);
      }
    }
    return matched;
  };
  var siblings = function(n, elem) {
    var matched = [];
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }
    return matched;
  };
  var rneedsContext = jQuery.expr.match.needsContext;
  var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
  var risSimple = /^.[^:#\[\.,]*$/;
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function(elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    }
    if (qualifier.nodeType) {
      return jQuery.grep(elements, function(elem) {
        return (elem === qualifier) !== not;
      });
    }
    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function(elem) {
        return (indexOf.call(qualifier, elem) > -1) !== not;
      });
    }
    if (risSimple.test(qualifier)) {
      return jQuery.filter(qualifier, elements, not);
    }
    qualifier = jQuery.filter(qualifier, elements);
    return jQuery.grep(elements, function(elem) {
      return (indexOf.call(qualifier, elem) > -1) !== not && elem.nodeType === 1;
    });
  }
  jQuery.filter = function(expr, elems, not) {
    var elem = elems[0];
    if (not) {
      expr = ":not(" + expr + ")";
    }
    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }
    return jQuery.find.matches(expr, jQuery.grep(elems, function(elem) {
      return elem.nodeType === 1;
    }));
  };
  jQuery.fn.extend({
    find: function(selector) {
      var i,
          ret,
          len = this.length,
          self = this;
      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function() {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      ret = this.pushStack([]);
      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }
      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function(selector) {
      return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  });
  var rootjQuery,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function(selector, context, root) {
        var match,
            elem;
        if (!selector) {
          return this;
        }
        root = root || rootjQuery;
        if (typeof selector === "string") {
          if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
            match = [null, selector, null];
          } else {
            match = rquickExpr.exec(selector);
          }
          if (match && (match[1] || !context)) {
            if (match[1]) {
              context = context instanceof jQuery ? context[0] : context;
              jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
              if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                for (match in context) {
                  if (jQuery.isFunction(this[match])) {
                    this[match](context[match]);
                  } else {
                    this.attr(match, context[match]);
                  }
                }
              }
              return this;
            } else {
              elem = document.getElementById(match[2]);
              if (elem) {
                this[0] = elem;
                this.length = 1;
              }
              return this;
            }
          } else if (!context || context.jquery) {
            return (context || root).find(selector);
          } else {
            return this.constructor(context).find(selector);
          }
        } else if (selector.nodeType) {
          this[0] = selector;
          this.length = 1;
          return this;
        } else if (jQuery.isFunction(selector)) {
          return root.ready !== undefined ? root.ready(selector) : selector(jQuery);
        }
        return jQuery.makeArray(selector, this);
      };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
      };
  jQuery.fn.extend({
    has: function(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function() {
        var i = 0;
        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors);
      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }
      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    index: function(elem) {
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }
      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      }
      return indexOf.call(this, elem.jquery ? elem[0] : elem);
    },
    add: function(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}
    return cur;
  }
  jQuery.each({
    parent: function(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function(elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function(elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function(elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function(elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function(elem) {
      return siblings(elem.firstChild);
    },
    contents: function(elem) {
      return elem.contentDocument || jQuery.merge([], elem.childNodes);
    }
  }, function(name, fn) {
    jQuery.fn[name] = function(until, selector) {
      var matched = jQuery.map(this, fn, until);
      if (name.slice(-5) !== "Until") {
        selector = until;
      }
      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }
      if (this.length > 1) {
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        }
        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }
      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);
  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function(options) {
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
    var firing,
        memory,
        fired,
        locked,
        list = [],
        queue = [],
        firingIndex = -1,
        fire = function() {
          locked = options.once;
          fired = firing = true;
          for (; queue.length; firingIndex = -1) {
            memory = queue.shift();
            while (++firingIndex < list.length) {
              if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                firingIndex = list.length;
                memory = false;
              }
            }
          }
          if (!options.memory) {
            memory = false;
          }
          firing = false;
          if (locked) {
            if (memory) {
              list = [];
            } else {
              list = "";
            }
          }
        },
        self = {
          add: function() {
            if (list) {
              if (memory && !firing) {
                firingIndex = list.length - 1;
                queue.push(memory);
              }
              (function add(args) {
                jQuery.each(args, function(_, arg) {
                  if (jQuery.isFunction(arg)) {
                    if (!options.unique || !self.has(arg)) {
                      list.push(arg);
                    }
                  } else if (arg && arg.length && jQuery.type(arg) !== "string") {
                    add(arg);
                  }
                });
              })(arguments);
              if (memory && !firing) {
                fire();
              }
            }
            return this;
          },
          remove: function() {
            jQuery.each(arguments, function(_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (index <= firingIndex) {
                  firingIndex--;
                }
              }
            });
            return this;
          },
          has: function(fn) {
            return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
          },
          empty: function() {
            if (list) {
              list = [];
            }
            return this;
          },
          disable: function() {
            locked = queue = [];
            list = memory = "";
            return this;
          },
          disabled: function() {
            return !list;
          },
          lock: function() {
            locked = queue = [];
            if (!memory && !firing) {
              list = memory = "";
            }
            return this;
          },
          locked: function() {
            return !!locked;
          },
          fireWith: function(context, args) {
            if (!locked) {
              args = args || [];
              args = [context, args.slice ? args.slice() : args];
              queue.push(args);
              if (!firing) {
                fire();
              }
            }
            return this;
          },
          fire: function() {
            self.fireWith(this, arguments);
            return this;
          },
          fired: function() {
            return !!fired;
          }
        };
    return self;
  };
  function Identity(v) {
    return v;
  }
  function Thrower(ex) {
    throw ex;
  }
  function adoptValue(value, resolve, reject) {
    var method;
    try {
      if (value && jQuery.isFunction((method = value.promise))) {
        method.call(value).done(resolve).fail(reject);
      } else if (value && jQuery.isFunction((method = value.then))) {
        method.call(value, resolve, reject);
      } else {
        resolve.call(undefined, value);
      }
    } catch (value) {
      reject.call(undefined, value);
    }
  }
  jQuery.extend({
    Deferred: function(func) {
      var tuples = [["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          state = "pending",
          promise = {
            state: function() {
              return state;
            },
            always: function() {
              deferred.done(arguments).fail(arguments);
              return this;
            },
            "catch": function(fn) {
              return promise.then(null, fn);
            },
            pipe: function() {
              var fns = arguments;
              return jQuery.Deferred(function(newDefer) {
                jQuery.each(tuples, function(i, tuple) {
                  var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];
                  deferred[tuple[1]](function() {
                    var returned = fn && fn.apply(this, arguments);
                    if (returned && jQuery.isFunction(returned.promise)) {
                      returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                    } else {
                      newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                    }
                  });
                });
                fns = null;
              }).promise();
            },
            then: function(onFulfilled, onRejected, onProgress) {
              var maxDepth = 0;
              function resolve(depth, deferred, handler, special) {
                return function() {
                  var that = this,
                      args = arguments,
                      mightThrow = function() {
                        var returned,
                            then;
                        if (depth < maxDepth) {
                          return;
                        }
                        returned = handler.apply(that, args);
                        if (returned === deferred.promise()) {
                          throw new TypeError("Thenable self-resolution");
                        }
                        then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                        if (jQuery.isFunction(then)) {
                          if (special) {
                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                          } else {
                            maxDepth++;
                            then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                          }
                        } else {
                          if (handler !== Identity) {
                            that = undefined;
                            args = [returned];
                          }
                          (special || deferred.resolveWith)(that, args);
                        }
                      },
                      process = special ? mightThrow : function() {
                        try {
                          mightThrow();
                        } catch (e) {
                          if (jQuery.Deferred.exceptionHook) {
                            jQuery.Deferred.exceptionHook(e, process.stackTrace);
                          }
                          if (depth + 1 >= maxDepth) {
                            if (handler !== Thrower) {
                              that = undefined;
                              args = [e];
                            }
                            deferred.rejectWith(that, args);
                          }
                        }
                      };
                  if (depth) {
                    process();
                  } else {
                    if (jQuery.Deferred.getStackHook) {
                      process.stackTrace = jQuery.Deferred.getStackHook();
                    }
                    window.setTimeout(process);
                  }
                };
              }
              return jQuery.Deferred(function(newDefer) {
                tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));
                tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
              }).promise();
            },
            promise: function(obj) {
              return obj != null ? jQuery.extend(obj, promise) : promise;
            }
          },
          deferred = {};
      jQuery.each(tuples, function(i, tuple) {
        var list = tuple[2],
            stateString = tuple[5];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function() {
            state = stateString;
          }, tuples[3 - i][2].disable, tuples[0][2].lock);
        }
        list.add(tuple[3].fire);
        deferred[tuple[0]] = function() {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function(singleValue) {
      var remaining = arguments.length,
          i = remaining,
          resolveContexts = Array(i),
          resolveValues = slice.call(arguments),
          master = jQuery.Deferred(),
          updateFunc = function(i) {
            return function(value) {
              resolveContexts[i] = this;
              resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
              if (!(--remaining)) {
                master.resolveWith(resolveContexts, resolveValues);
              }
            };
          };
      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject);
        if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      }
      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }
      return master.promise();
    }
  });
  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  jQuery.Deferred.exceptionHook = function(error, stack) {
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };
  jQuery.readyException = function(error) {
    window.setTimeout(function() {
      throw error;
    });
  };
  var readyList = jQuery.Deferred();
  jQuery.fn.ready = function(fn) {
    readyList.then(fn).catch(function(error) {
      jQuery.readyException(error);
    });
    return this;
  };
  jQuery.extend({
    isReady: false,
    readyWait: 1,
    holdReady: function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function(wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then;
  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  }
  if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    window.setTimeout(jQuery.ready);
  } else {
    document.addEventListener("DOMContentLoaded", completed);
    window.addEventListener("load", completed);
  }
  var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null;
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      }
    } else if (value !== undefined) {
      chainable = true;
      if (!jQuery.isFunction(value)) {
        raw = true;
      }
      if (bulk) {
        if (raw) {
          fn.call(elems, value);
          fn = null;
        } else {
          bulk = fn;
          fn = function(elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }
      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }
    if (chainable) {
      return elems;
    }
    if (bulk) {
      return fn.call(elems);
    }
    return len ? fn(elems[0], key) : emptyGet;
  };
  var acceptData = function(owner) {
    return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
  };
  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }
  Data.uid = 1;
  Data.prototype = {
    cache: function(owner) {
      var value = owner[this.expando];
      if (!value) {
        value = {};
        if (acceptData(owner)) {
          if (owner.nodeType) {
            owner[this.expando] = value;
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }
      return value;
    },
    set: function(owner, data, value) {
      var prop,
          cache = this.cache(owner);
      if (typeof data === "string") {
        cache[jQuery.camelCase(data)] = value;
      } else {
        for (prop in data) {
          cache[jQuery.camelCase(prop)] = data[prop];
        }
      }
      return cache;
    },
    get: function(owner, key) {
      return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
    },
    access: function(owner, key, value) {
      if (key === undefined || ((key && typeof key === "string") && value === undefined)) {
        return this.get(owner, key);
      }
      this.set(owner, key, value);
      return value !== undefined ? value : key;
    },
    remove: function(owner, key) {
      var i,
          cache = owner[this.expando];
      if (cache === undefined) {
        return;
      }
      if (key !== undefined) {
        if (jQuery.isArray(key)) {
          key = key.map(jQuery.camelCase);
        } else {
          key = jQuery.camelCase(key);
          key = key in cache ? [key] : (key.match(rnothtmlwhite) || []);
        }
        i = key.length;
        while (i--) {
          delete cache[key[i]];
        }
      }
      if (key === undefined || jQuery.isEmptyObject(cache)) {
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data();
  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;
  function getData(data) {
    if (data === "true") {
      return true;
    }
    if (data === "false") {
      return false;
    }
    if (data === "null") {
      return null;
    }
    if (data === +data + "") {
      return +data;
    }
    if (rbrace.test(data)) {
      return JSON.parse(data);
    }
    return data;
  }
  function dataAttr(elem, key, data) {
    var name;
    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {}
        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  jQuery.extend({
    hasData: function(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function(elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function(elem, name) {
      dataUser.remove(elem, name);
    },
    _data: function(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes;
      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);
          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;
            while (i--) {
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }
        return data;
      }
      if (typeof key === "object") {
        return this.each(function() {
          dataUser.set(this, key);
        });
      }
      return access(this, function(value) {
        var data;
        if (elem && value === undefined) {
          data = dataUser.get(elem, key);
          if (data !== undefined) {
            return data;
          }
          data = dataAttr(elem, key);
          if (data !== undefined) {
            return data;
          }
          return;
        }
        this.each(function() {
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function(key) {
      return this.each(function() {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function(elem, type, data) {
      var queue;
      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function(elem, type) {
      type = type || "fx";
      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function() {
            jQuery.dequeue(elem, type);
          };
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }
      if (fn) {
        if (type === "fx") {
          queue.unshift("inprogress");
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {empty: jQuery.Callbacks("once memory").add(function() {
          dataPriv.remove(elem, [type + "queue", key]);
        })});
    }
  });
  jQuery.fn.extend({
    queue: function(type, data) {
      var setter = 2;
      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function() {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function(type) {
      return this.each(function() {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function(type) {
      return this.queue(type || "fx", []);
    },
    promise: function(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function() {
            if (!(--count)) {
              defer.resolveWith(elements, [elements]);
            }
          };
      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";
      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var isHiddenWithinTree = function(elem, el) {
    elem = el || elem;
    return elem.style.display === "none" || elem.style.display === "" && jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
  };
  var swap = function(elem, options, callback, args) {
    var ret,
        name,
        old = {};
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }
    ret = callback.apply(elem, args || []);
    for (name in options) {
      elem.style[name] = old[name];
    }
    return ret;
  };
  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale = 1,
        maxIterations = 20,
        currentValue = tween ? function() {
          return tween.cur();
        } : function() {
          return jQuery.css(elem, prop, "");
        },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
    if (initialInUnit && initialInUnit[3] !== unit) {
      unit = unit || initialInUnit[3];
      valueParts = valueParts || [];
      initialInUnit = +initial || 1;
      do {
        scale = scale || ".5";
        initialInUnit = initialInUnit / scale;
        jQuery.style(elem, prop, initialInUnit + unit);
      } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
    }
    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0;
      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }
    return adjusted;
  }
  var defaultDisplayMap = {};
  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];
    if (display) {
      return display;
    }
    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);
    if (display === "none") {
      display = "block";
    }
    defaultDisplayMap[nodeName] = display;
    return display;
  }
  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      display = elem.style.display;
      if (show) {
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;
          if (!values[index]) {
            elem.style.display = "";
          }
        }
        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none";
          dataPriv.set(elem, "display", display);
        }
      }
    }
    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }
    return elements;
  }
  jQuery.fn.extend({
    show: function() {
      return showHide(this, true);
    },
    hide: function() {
      return showHide(this);
    },
    toggle: function(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }
      return this.each(function() {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = (/^(?:checkbox|radio)$/i);
  var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);
  var rscriptType = (/^$|\/(?:java|ecma)script/i);
  var wrapMap = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  function getAll(context, tag) {
    var ret;
    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }
    if (tag === undefined || tag && jQuery.nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }
    return ret;
  }
  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;
    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }
  var rhtml = /<|&#?\w+;/;
  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        contains,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;
    for (; i < l; i++) {
      elem = elems[i];
      if (elem || elem === 0) {
        if (jQuery.type(elem) === "object") {
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem));
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div"));
          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
          j = wrap[0];
          while (j--) {
            tmp = tmp.lastChild;
          }
          jQuery.merge(nodes, tmp.childNodes);
          tmp = fragment.firstChild;
          tmp.textContent = "";
        }
      }
    }
    fragment.textContent = "";
    i = 0;
    while ((elem = nodes[i++])) {
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }
        continue;
      }
      contains = jQuery.contains(elem.ownerDocument, elem);
      tmp = getAll(fragment.appendChild(elem), "script");
      if (contains) {
        setGlobalEval(tmp);
      }
      if (scripts) {
        j = 0;
        while ((elem = tmp[j++])) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }
    return fragment;
  }
  (function() {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input);
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();
  var documentElement = document.documentElement;
  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }
  function on(elem, types, selector, data, fn, one) {
    var origFn,
        type;
    if (typeof types === "object") {
      if (typeof selector !== "string") {
        data = data || selector;
        selector = undefined;
      }
      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }
      return elem;
    }
    if (data == null && fn == null) {
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        fn = data;
        data = undefined;
      } else {
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }
    if (one === 1) {
      origFn = fn;
      fn = function(event) {
        jQuery().off(event);
        return origFn.apply(this, arguments);
      };
      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }
    return elem.each(function() {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  jQuery.event = {
    global: {},
    add: function(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function(e) {
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
    },
    remove: function(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function(nativeEvent) {
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
      args[0] = event;
      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function(event, handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
      if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + " ";
              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }
            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      }
      cur = this;
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    addProp: function(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: jQuery.isFunction(hook) ? function() {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function() {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {noBubble: true},
      focus: {
        trigger: function() {
          if (this !== safeActiveElement() && this.focus) {
            this.focus();
            return false;
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
            this.click();
            return false;
          }
        },
        _default: function(event) {
          return jQuery.nodeName(event.target, "a");
        }
      },
      beforeunload: {postDispatch: function(event) {
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }}
    }
  };
  jQuery.removeEvent = function(elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };
  jQuery.Event = function(src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
      this.target = (src.target && src.target.nodeType === 3) ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;
      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }
      this.stopPropagation();
    }
  };
  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function(event) {
      var button = event.button;
      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      }
      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }
        if (button & 2) {
          return 3;
        }
        if (button & 4) {
          return 2;
        }
        return 0;
      }
      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj;
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function(types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function(types, selector, fn) {
      var handleObj,
          type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === "object") {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function() {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      rnoInnerhtml = /<script|<style|<link/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function manipulationTarget(elem, content) {
    if (jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return elem.getElementsByTagName("tbody")[0] || elem;
    }
    return elem;
  }
  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }
  function cloneCopyEvent(src, dest) {
    var i,
        l,
        type,
        pdataOld,
        pdataCur,
        udataOld,
        udataCur,
        events;
    if (dest.nodeType !== 1) {
      return;
    }
    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;
      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};
        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    }
    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  }
  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase();
    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked;
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }
  function domManip(collection, args, callback, ignored) {
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        isFunction = jQuery.isFunction(value);
    if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
      return collection.each(function(index) {
        var self = collection.eq(index);
        if (isFunction) {
          args[0] = value.call(this, index, self.html());
        }
        domManip(self, args, callback, ignored);
      });
    }
    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;
      if (fragment.childNodes.length === 1) {
        fragment = first;
      }
      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length;
        for (; i < l; i++) {
          node = fragment;
          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true);
            if (hasScripts) {
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }
          callback.call(collection[i], node, i);
        }
        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument;
          jQuery.map(scripts, restoreScript);
          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];
            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src) {
                if (jQuery._evalUrl) {
                  jQuery._evalUrl(node.src);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), doc);
              }
            }
          }
        }
      }
    }
    return collection;
  }
  function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;
    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }
      if (node.parentNode) {
        if (keepData && jQuery.contains(node.ownerDocument, node)) {
          setGlobalEval(getAll(node, "script"));
        }
        node.parentNode.removeChild(node);
      }
    }
    return elem;
  }
  jQuery.extend({
    htmlPrefilter: function(html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = jQuery.contains(elem.ownerDocument, elem);
      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }
      return clone;
    },
    cleanData: function(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;
      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if ((data = elem[dataPriv.expando])) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            elem[dataPriv.expando] = undefined;
          }
          if (elem[dataUser.expando]) {
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function(selector) {
      return remove(this, selector, true);
    },
    remove: function(selector) {
      return remove(this, selector);
    },
    text: function(value) {
      return access(this, function(value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function() {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function() {
      return domManip(this, arguments, function(elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function() {
      return domManip(this, arguments, function(elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function() {
      var elem,
          i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
          elem.textContent = "";
        }
      }
      return this;
    },
    clone: function(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function() {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function(value) {
      return access(this, function(value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;
        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        }
        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {}
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function() {
      var ignored = [];
      return domManip(this, arguments, function(elem) {
        var parent = this.parentNode;
        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));
          if (parent) {
            parent.replaceChild(elem, this);
          }
        }
      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(name, original) {
    jQuery.fn[name] = function(selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  var rmargin = (/^margin/);
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
  var getStyles = function(elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  };
  (function() {
    function computeStyleTests() {
      if (!div) {
        return;
      }
      div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
      div.innerHTML = "";
      documentElement.appendChild(container);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%";
      reliableMarginLeftVal = divStyle.marginLeft === "2px";
      boxSizingReliableVal = divStyle.width === "4px";
      div.style.marginRight = "50%";
      pixelMarginRightVal = divStyle.marginRight === "4px";
      documentElement.removeChild(container);
      div = null;
    }
    var pixelPositionVal,
        boxSizingReliableVal,
        pixelMarginRightVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div");
    if (!div.style) {
      return;
    }
    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
    container.appendChild(div);
    jQuery.extend(support, {
      pixelPosition: function() {
        computeStyleTests();
        return pixelPositionVal;
      },
      boxSizingReliable: function() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelMarginRight: function() {
        computeStyleTests();
        return pixelMarginRightVal;
      },
      reliableMarginLeft: function() {
        computeStyleTests();
        return reliableMarginLeftVal;
      }
    });
  })();
  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        style = elem.style;
    computed = computed || getStyles(elem);
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
      if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
        ret = jQuery.style(elem, name);
      }
      if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }
    return ret !== undefined ? ret + "" : ret;
  }
  function addGetHookIf(conditionFn, hookFn) {
    return {get: function() {
        if (conditionFn()) {
          delete this.get;
          return;
        }
        return (this.get = hookFn).apply(this, arguments);
      }};
  }
  var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style;
  function vendorPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rcssNum.exec(value);
    return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i,
        val = 0;
    if (extra === (isBorderBox ? "border" : "content")) {
      i = 4;
    } else {
      i = name === "width" ? 1 : 0;
    }
    for (; i < 4; i += 2) {
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var val,
        valueIsBorderBox = true,
        styles = getStyles(elem),
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
    if (elem.getClientRects().length) {
      val = elem.getBoundingClientRect()[name];
    }
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return (val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
  }
  jQuery.extend({
    cssHooks: {opacity: {get: function(elem, computed) {
          if (computed) {
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }}},
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    cssProps: {"float": "cssFloat"},
    style: function(elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret,
          type,
          hooks,
          origName = jQuery.camelCase(name),
          style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret);
          type = "number";
        }
        if (value == null || value !== value) {
          return;
        }
        if (type === "number") {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        }
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          style[name] = value;
        }
      } else {
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }
      return val;
    }
  });
  jQuery.each(["height", "width"], function(i, name) {
    jQuery.cssHooks[name] = {
      get: function(elem, computed, extra) {
        if (computed) {
          return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function(elem, value, extra) {
        var matches,
            styles = extra && getStyles(elem),
            subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[name] = value;
          value = jQuery.css(elem, name);
        }
        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {marginLeft: 0}, function() {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  });
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {expand: function(value) {
        var i = 0,
            expanded = {},
            parts = typeof value === "string" ? value.split(" ") : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }};
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({css: function(name, value) {
      return access(this, function(elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }});
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {_default: {
      get: function(tween) {
        var result;
        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, "");
        return !result || result === "auto" ? 0 : result;
      },
      set: function(tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }};
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {set: function(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }};
  jQuery.easing = {
    linear: function(p) {
      return p;
    },
    swing: function(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.step = {};
  var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;
  function raf() {
    if (timerId) {
      window.requestAnimationFrame(raf);
      jQuery.fx.tick();
    }
  }
  function createFxNow() {
    window.setTimeout(function() {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }
  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {height: type};
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {
        return tween;
      }
    }
  }
  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow");
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function() {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function() {
        anim.always(function() {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    }
    propTween = !jQuery.isEmptyObject(props);
    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    }
    if (isBox && elem.nodeType === 1) {
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];
      restoreDisplay = dataShow && dataShow.display;
      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }
      display = jQuery.css(elem, "display");
      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      }
      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          if (!propTween) {
            anim.done(function() {
              style.display = restoreDisplay;
            });
            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }
          style.display = "inline-block";
        }
      }
    }
    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function() {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    }
    propTween = false;
    for (prop in orig) {
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay});
        }
        if (toggle) {
          dataShow.hidden = !hidden;
        }
        if (hidden) {
          showHide([elem], true);
        }
        anim.done(function() {
          if (!hidden) {
            showHide([elem]);
          }
          dataPriv.remove(elem, "fxshow");
          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      }
      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;
        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }
  function propFilter(props, specialEasing) {
    var index,
        name,
        easing,
        value,
        hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function() {
          delete tick.elem;
        }),
        tick = function() {
          if (stopped) {
            return false;
          }
          var currentTime = fxNow || createFxNow(),
              remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
          for (; index < length; index++) {
            animation.tweens[index].run(percent);
          }
          deferred.notifyWith(elem, [animation, percent, remaining]);
          if (percent < 1 && length) {
            return remaining;
          } else {
            deferred.resolveWith(elem, [animation]);
            return false;
          }
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(true, {
            specialEasing: {},
            easing: jQuery.easing._default
          }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function(prop, end) {
            var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
            animation.tweens.push(tween);
            return tween;
          },
          stop: function(gotoEnd) {
            var index = 0,
                length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) {
              return this;
            }
            stopped = true;
            for (; index < length; index++) {
              animation.tweens[index].run(1);
            }
            if (gotoEnd) {
              deferred.notifyWith(elem, [animation, 1, 0]);
              deferred.resolveWith(elem, [animation, gotoEnd]);
            } else {
              deferred.rejectWith(elem, [animation, gotoEnd]);
            }
            return this;
          }
        }),
        props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        if (jQuery.isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
        }
        return result;
      }
    }
    jQuery.map(props, createTween, animation);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {"*": [function(prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]},
    tweener: function(props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }
      var prop,
          index = 0,
          length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });
  jQuery.speed = function(speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };
    if (jQuery.fx.off || document.hidden) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    }
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }
    opt.old = opt.complete;
    opt.complete = function() {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.fn.extend({
    fadeTo: function(speed, to, easing, callback) {
      return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function() {
            var anim = Animation(this, jQuery.extend({}, prop), optall);
            if (empty || dataPriv.get(this, "finish")) {
              anim.stop(true);
            }
          };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function(type, clearQueue, gotoEnd) {
      var stopQueue = function(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }
      return this.each(function() {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function(type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function() {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }
        for (index = timers.length; index--; ) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function(i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function(speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function(name, props) {
    jQuery.fn[name] = function(speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];
  jQuery.fx.tick = function() {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function(timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function() {
    if (!timerId) {
      timerId = window.requestAnimationFrame ? window.requestAnimationFrame(raf) : window.setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function() {
    if (window.cancelAnimationFrame) {
      window.cancelAnimationFrame(timerId);
    } else {
      window.clearInterval(timerId);
    }
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fn.delay = function(time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function(next, hooks) {
      var timeout = window.setTimeout(next, time);
      hooks.stop = function() {
        window.clearTimeout(timeout);
      };
    });
  };
  (function() {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox";
    support.checkOn = input.value !== "";
    support.optSelected = opt.selected;
    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();
  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function(name) {
      return this.each(function() {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        elem.setAttribute(name, value + "");
        return value;
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      ret = jQuery.find.attr(elem, name);
      return ret == null ? undefined : ret;
    },
    attrHooks: {type: {set: function(elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }}},
    removeAttr: function(elem, value) {
      var name,
          i = 0,
          attrNames = value && value.match(rnothtmlwhite);
      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          elem.removeAttribute(name);
        }
      }
    }
  });
  boolHook = {set: function(elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }
      return name;
    }};
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;
    attrHandle[name] = function(elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();
      if (!isXML) {
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }
      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function(name) {
      return this.each(function() {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType;
      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }
        return (elem[name] = value);
      }
      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }
      return elem[name];
    },
    propHooks: {tabIndex: {get: function(elem) {
          var tabindex = jQuery.find.attr(elem, "tabindex");
          if (tabindex) {
            return parseInt(tabindex, 10);
          }
          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }
          return -1;
        }}},
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  });
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function(elem) {
        var parent = elem.parentNode;
        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }
        return null;
      },
      set: function(elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }
  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    jQuery.propFix[this.toLowerCase()] = this;
  });
  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }
  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }
  jQuery.fn.extend({
    addClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnothtmlwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    removeClass: function(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;
      if (jQuery.isFunction(value)) {
        return this.each(function(j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      if (typeof value === "string" && value) {
        classes = value.match(rnothtmlwhite) || [];
        while ((elem = this[i++])) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");
          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }
            finalValue = stripAndCollapse(cur);
            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }
      return this;
    },
    toggleClass: function(value, stateVal) {
      var type = typeof value;
      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }
      if (jQuery.isFunction(value)) {
        return this.each(function(i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }
      return this.each(function() {
        var className,
            i,
            self,
            classNames;
        if (type === "string") {
          i = 0;
          self = jQuery(this);
          classNames = value.match(rnothtmlwhite) || [];
          while ((className = classNames[i++])) {
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }
        } else if (value === undefined || type === "boolean") {
          className = getClass(this);
          if (className) {
            dataPriv.set(this, "__className__", className);
          }
          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";
      while ((elem = this[i++])) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }
      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({val: function(value) {
      var hooks,
          ret,
          isFunction,
          elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }
          ret = elem.value;
          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          }
          return ret == null ? "" : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function(i) {
        var val;
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function(value) {
            return value == null ? "" : value + "";
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }});
  jQuery.extend({valHooks: {
      option: {get: function(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : stripAndCollapse(jQuery.text(elem));
        }},
      select: {
        get: function(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;
          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          }
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;
          while (i--) {
            option = options[i];
            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
          }
          if (!optionSet) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    }});
  jQuery.each(["radio", "checkbox"], function() {
    jQuery.valHooks[this] = {set: function(elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
        }
      }};
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function(elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });
  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
  jQuery.extend(jQuery.event, {
    trigger: function(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf(".") > -1) {
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            elem[type]();
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    simulate: function(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function(type, data) {
      return this.each(function() {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function(type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(i, name) {
    jQuery.fn[name] = function(data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({hover: function(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }});
  support.focusin = "onfocusin" in window;
  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function(orig, fix) {
      var handler = function(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };
      jQuery.event.special[fix] = {
        setup: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);
          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;
          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }
  var location = window.location;
  var nonce = jQuery.now();
  var rquery = (/\?/);
  jQuery.parseXML = function(data) {
    var xml;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      xml = (new window.DOMParser()).parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }
    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };
  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function(i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === "object") {
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.param = function(a, traditional) {
    var prefix,
        s = [],
        add = function(key, valueOrFunction) {
          var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
          s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      jQuery.each(a, function() {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join("&");
  };
  jQuery.fn.extend({
    serialize: function() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function() {
      return this.map(function() {
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function() {
        var type = this.type;
        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function(i, elem) {
        var val = jQuery(this).val();
        if (val == null) {
          return null;
        }
        if (jQuery.isArray(val)) {
          return jQuery.map(val, function(val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }
        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*"),
      originAnchor = document.createElement("a");
  originAnchor.href = location.href;
  function addToPrefiltersOrTransports(structure) {
    return function(dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }
      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
      if (jQuery.isFunction(func)) {
        while ((dataType = dataTypes[i++])) {
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = (structure === transports);
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }
  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes;
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    current = dataTypes.shift();
    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }
      prev = current;
      current = dataTypes.shift();
      if (current) {
        if (current === "*") {
          current = prev;
        } else if (prev !== "*" && prev !== current) {
          conv = converters[prev + " " + current] || converters["* " + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(" ");
              if (tmp[1] === current) {
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }
    return {
      state: "success",
      data: response
    };
  }
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": true,
        "text json": JSON.parse,
        "text xml": jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function(target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function(url, options) {
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }
      options = options || {};
      var transport,
          cacheURL,
          responseHeadersString,
          responseHeaders,
          timeoutTimer,
          urlAnchor,
          completed,
          fireGlobals,
          i,
          uncached,
          s = jQuery.ajaxSetup({}, options),
          callbackContext = s.context || s,
          globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          statusCode = s.statusCode || {},
          requestHeaders = {},
          requestHeadersNames = {},
          strAbort = "canceled",
          jqXHR = {
            readyState: 0,
            getResponseHeader: function(key) {
              var match;
              if (completed) {
                if (!responseHeaders) {
                  responseHeaders = {};
                  while ((match = rheaders.exec(responseHeadersString))) {
                    responseHeaders[match[1].toLowerCase()] = match[2];
                  }
                }
                match = responseHeaders[key.toLowerCase()];
              }
              return match == null ? null : match;
            },
            getAllResponseHeaders: function() {
              return completed ? responseHeadersString : null;
            },
            setRequestHeader: function(name, value) {
              if (completed == null) {
                name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                requestHeaders[name] = value;
              }
              return this;
            },
            overrideMimeType: function(type) {
              if (completed == null) {
                s.mimeType = type;
              }
              return this;
            },
            statusCode: function(map) {
              var code;
              if (map) {
                if (completed) {
                  jqXHR.always(map[jqXHR.status]);
                } else {
                  for (code in map) {
                    statusCode[code] = [statusCode[code], map[code]];
                  }
                }
              }
              return this;
            },
            abort: function(statusText) {
              var finalText = statusText || strAbort;
              if (transport) {
                transport.abort(finalText);
              }
              done(0, finalText);
              return this;
            }
          };
      deferred.promise(jqXHR);
      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a");
        try {
          urlAnchor.href = s.url;
          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          s.crossDomain = true;
        }
      }
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (completed) {
        return jqXHR;
      }
      fireGlobals = jQuery.event && s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url.replace(rhash, "");
      if (!s.hasContent) {
        uncached = s.url.slice(cacheURL.length);
        if (s.data) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
        }
        s.url = cacheURL + uncached;
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }
      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        return jqXHR.abort();
      }
      strAbort = "abort";
      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error);
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        if (completed) {
          return jqXHR;
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function() {
            jqXHR.abort("timeout");
          }, s.timeout);
        }
        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (completed) {
            throw e;
          }
          done(-1, e);
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText;
        if (completed) {
          return;
        }
        completed = true;
        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || "";
        jqXHR.readyState = status > 0 ? 4 : 0;
        isSuccess = status >= 200 && status < 300 || status === 304;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        response = ajaxConvert(s, response, jqXHR, isSuccess);
        if (isSuccess) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";
          } else if (status === 304) {
            statusText = "notmodified";
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        }
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }
      return jqXHR;
    },
    getJSON: function(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function(i, method) {
    jQuery[method] = function(url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery._evalUrl = function(url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      "throws": true
    });
  };
  jQuery.fn.extend({
    wrapAll: function(html) {
      var wrap;
      if (this[0]) {
        if (jQuery.isFunction(html)) {
          html = html.call(this[0]);
        }
        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function() {
          var elem = this;
          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function(html) {
      if (jQuery.isFunction(html)) {
        return this.each(function(i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function() {
        var self = jQuery(this),
            contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function(html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function(i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function(selector) {
      this.parent(selector).not("body").each(function() {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });
  jQuery.expr.pseudos.hidden = function(elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };
  jQuery.expr.pseudos.visible = function(elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };
  jQuery.ajaxSettings.xhr = function() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };
  var xhrSuccessStatus = {
    0: 200,
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function(options) {
    var callback,
        errorCallback;
    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password);
          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          }
          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          }
          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }
          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          }
          callback = function(type) {
            return function() {
              if (callback) {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete(xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {binary: xhr.response} : {text: xhr.responseText}, xhr.getAllResponseHeaders());
                }
              }
            };
          };
          xhr.onload = callback();
          errorCallback = xhr.onerror = callback("error");
          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                window.setTimeout(function() {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          }
          callback = callback("abort");
          try {
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            if (callback) {
              throw e;
            }
          }
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  jQuery.ajaxPrefilter(function(s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  });
  jQuery.ajaxSetup({
    accepts: {script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"},
    contents: {script: /\b(?:java|ecma)script\b/},
    converters: {"text script": function(text) {
        jQuery.globalEval(text);
        return text;
      }}
  });
  jQuery.ajaxPrefilter("script", function(s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
    }
  });
  jQuery.ajaxTransport("script", function(s) {
    if (s.crossDomain) {
      var script,
          callback;
      return {
        send: function(_, complete) {
          script = jQuery("<script>").prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function(evt) {
            script.remove();
            callback = null;
            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          });
          document.head.appendChild(script[0]);
        },
        abort: function() {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
    if (jsonProp || s.dataTypes[0] === "jsonp") {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }
      s.converters["script json"] = function() {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = "json";
      overwritten = window[callbackName];
      window[callbackName] = function() {
        responseContainer = arguments;
      };
      jqXHR.always(function() {
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName);
        } else {
          window[callbackName] = overwritten;
        }
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return "script";
    }
  });
  support.createHTMLDocument = (function() {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  })();
  jQuery.parseHTML = function(data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    var base,
        parsed,
        scripts;
    if (!context) {
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument("");
        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }
    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && [];
    if (parsed) {
      return [context.createElement(parsed[1])];
    }
    parsed = buildFragment([data], context, scripts);
    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }
    return jQuery.merge([], parsed.childNodes);
  };
  jQuery.fn.load = function(url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");
    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === "object") {
      type = "POST";
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function(responseText) {
        response = arguments;
        self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).always(callback && function(jqXHR, status) {
        self.each(function() {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }
    return this;
  };
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) {
    jQuery.fn[type] = function(fn) {
      return this.on(type, fn);
    };
  });
  jQuery.expr.pseudos.animated = function(elem) {
    return jQuery.grep(jQuery.timers, function(fn) {
      return elem === fn.elem;
    }).length;
  };
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
  }
  jQuery.offset = {setOffset: function(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
      if (position === "static") {
        elem.style.position = "relative";
      }
      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }
      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }
      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }};
  jQuery.fn.extend({
    offset: function(options) {
      if (arguments.length) {
        return options === undefined ? this : this.each(function(i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }
      var docElem,
          win,
          rect,
          doc,
          elem = this[0];
      if (!elem) {
        return;
      }
      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      }
      rect = elem.getBoundingClientRect();
      if (rect.width || rect.height) {
        doc = elem.ownerDocument;
        win = getWindow(doc);
        docElem = doc.documentElement;
        return {
          top: rect.top + win.pageYOffset - docElem.clientTop,
          left: rect.left + win.pageXOffset - docElem.clientLeft
        };
      }
      return rect;
    },
    position: function() {
      if (!this[0]) {
        return;
      }
      var offsetParent,
          offset,
          elem = this[0],
          parentOffset = {
            top: 0,
            left: 0
          };
      if (jQuery.css(elem, "position") === "fixed") {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }
        parentOffset = {
          top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
          left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
        };
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    offsetParent: function() {
      return this.map(function() {
        var offsetParent = this.offsetParent;
        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || documentElement;
      });
    }
  });
  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(method, prop) {
    var top = "pageYOffset" === prop;
    jQuery.fn[method] = function(val) {
      return access(this, function(elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  });
  jQuery.each(["top", "left"], function(i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop);
        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  });
  jQuery.each({
    Height: "height",
    Width: "width"
  }, function(name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function(defaultExtra, funcName) {
      jQuery.fn[funcName] = function(margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function(elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.fn.extend({
    bind: function(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function(selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });
  jQuery.parseJSON = JSON.parse;
  if (typeof define === "function" && define.amd) {
    define("npm:jquery@3.1.1/dist/jquery.js", [], function() {
      return jQuery;
    }) && define("jquery", ["npm:jquery@3.1.1/dist/jquery.js"], function(m) {
      return m;
    });
  }
  var _jQuery = window.jQuery,
      _$ = window.$;
  jQuery.noConflict = function(deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }
    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }
    return jQuery;
  };
  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }
  return jQuery;
});

})();
(function() {
var define = System.amdDefine;
define("npm:jquery@3.1.1.js", ["npm:jquery@3.1.1/dist/jquery.js"], function(main) {
  return main;
});

})();
System.registerDynamic("github:twbs/bootstrap@3.3.7/js/bootstrap.js", ["npm:jquery@3.1.1.js"], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, "$", null);

  (function ($__global) {
    /* */
    "format global";
    "deps jquery";
    "exports $";
    /*!
     * Bootstrap v3.3.7 (http://getbootstrap.com)
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under the MIT license
     */

    if (typeof jQuery === 'undefined') {
      throw new Error('Bootstrap\'s JavaScript requires jQuery');
    }

    +function ($) {
      'use strict';

      var version = $.fn.jquery.split(' ')[0].split('.');
      if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 3) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4');
      }
    }(jQuery);

    /* ========================================================================
     * Bootstrap: transition.js v3.3.7
     * http://getbootstrap.com/javascript/#transitions
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
      // ============================================================

      function transitionEnd() {
        var el = document.createElement('bootstrap');

        var transEndEventNames = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
          transition: 'transitionend'
        };

        for (var name in transEndEventNames) {
          if (el.style[name] !== undefined) {
            return { end: transEndEventNames[name] };
          }
        }

        return false; // explicit for ie8 (  ._.)
      }

      // http://blog.alexmaccaw.com/css-transitions
      $.fn.emulateTransitionEnd = function (duration) {
        var called = false;
        var $el = this;
        $(this).one('bsTransitionEnd', function () {
          called = true;
        });
        var callback = function () {
          if (!called) $($el).trigger($.support.transition.end);
        };
        setTimeout(callback, duration);
        return this;
      };

      $(function () {
        $.support.transition = transitionEnd();

        if (!$.support.transition) return;

        $.event.special.bsTransitionEnd = {
          bindType: $.support.transition.end,
          delegateType: $.support.transition.end,
          handle: function (e) {
            if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
          }
        };
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: alert.js v3.3.7
     * http://getbootstrap.com/javascript/#alerts
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // ALERT CLASS DEFINITION
      // ======================

      var dismiss = '[data-dismiss="alert"]';
      var Alert = function (el) {
        $(el).on('click', dismiss, this.close);
      };

      Alert.VERSION = '3.3.7';

      Alert.TRANSITION_DURATION = 150;

      Alert.prototype.close = function (e) {
        var $this = $(this);
        var selector = $this.attr('data-target');

        if (!selector) {
          selector = $this.attr('href');
          selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
        }

        var $parent = $(selector === '#' ? [] : selector);

        if (e) e.preventDefault();

        if (!$parent.length) {
          $parent = $this.closest('.alert');
        }

        $parent.trigger(e = $.Event('close.bs.alert'));

        if (e.isDefaultPrevented()) return;

        $parent.removeClass('in');

        function removeElement() {
          // detach from parent, fire event then clean up data
          $parent.detach().trigger('closed.bs.alert').remove();
        }

        $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
      };

      // ALERT PLUGIN DEFINITION
      // =======================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.alert');

          if (!data) $this.data('bs.alert', data = new Alert(this));
          if (typeof option == 'string') data[option].call($this);
        });
      }

      var old = $.fn.alert;

      $.fn.alert = Plugin;
      $.fn.alert.Constructor = Alert;

      // ALERT NO CONFLICT
      // =================

      $.fn.alert.noConflict = function () {
        $.fn.alert = old;
        return this;
      };

      // ALERT DATA-API
      // ==============

      $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
    }(jQuery);

    /* ========================================================================
     * Bootstrap: button.js v3.3.7
     * http://getbootstrap.com/javascript/#buttons
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // BUTTON PUBLIC CLASS DEFINITION
      // ==============================

      var Button = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
      };

      Button.VERSION = '3.3.7';

      Button.DEFAULTS = {
        loadingText: 'loading...'
      };

      Button.prototype.setState = function (state) {
        var d = 'disabled';
        var $el = this.$element;
        var val = $el.is('input') ? 'val' : 'html';
        var data = $el.data();

        state += 'Text';

        if (data.resetText == null) $el.data('resetText', $el[val]());

        // push to event loop to allow forms to submit
        setTimeout($.proxy(function () {
          $el[val](data[state] == null ? this.options[state] : data[state]);

          if (state == 'loadingText') {
            this.isLoading = true;
            $el.addClass(d).attr(d, d).prop(d, true);
          } else if (this.isLoading) {
            this.isLoading = false;
            $el.removeClass(d).removeAttr(d).prop(d, false);
          }
        }, this), 0);
      };

      Button.prototype.toggle = function () {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');

        if ($parent.length) {
          var $input = this.$element.find('input');
          if ($input.prop('type') == 'radio') {
            if ($input.prop('checked')) changed = false;
            $parent.find('.active').removeClass('active');
            this.$element.addClass('active');
          } else if ($input.prop('type') == 'checkbox') {
            if ($input.prop('checked') !== this.$element.hasClass('active')) changed = false;
            this.$element.toggleClass('active');
          }
          $input.prop('checked', this.$element.hasClass('active'));
          if (changed) $input.trigger('change');
        } else {
          this.$element.attr('aria-pressed', !this.$element.hasClass('active'));
          this.$element.toggleClass('active');
        }
      };

      // BUTTON PLUGIN DEFINITION
      // ========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.button');
          var options = typeof option == 'object' && option;

          if (!data) $this.data('bs.button', data = new Button(this, options));

          if (option == 'toggle') data.toggle();else if (option) data.setState(option);
        });
      }

      var old = $.fn.button;

      $.fn.button = Plugin;
      $.fn.button.Constructor = Button;

      // BUTTON NO CONFLICT
      // ==================

      $.fn.button.noConflict = function () {
        $.fn.button = old;
        return this;
      };

      // BUTTON DATA-API
      // ===============

      $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        var $btn = $(e.target).closest('.btn');
        Plugin.call($btn, 'toggle');
        if (!$(e.target).is('input[type="radio"], input[type="checkbox"]')) {
          // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
          e.preventDefault();
          // The target component still receive the focus
          if ($btn.is('input,button')) $btn.trigger('focus');else $btn.find('input:visible,button:visible').first().trigger('focus');
        }
      }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
        $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: carousel.js v3.3.7
     * http://getbootstrap.com/javascript/#carousel
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // CAROUSEL CLASS DEFINITION
      // =========================

      var Carousel = function (element, options) {
        this.$element = $(element);
        this.$indicators = this.$element.find('.carousel-indicators');
        this.options = options;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;

        this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this));

        this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this));
      };

      Carousel.VERSION = '3.3.7';

      Carousel.TRANSITION_DURATION = 600;

      Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true,
        keyboard: true
      };

      Carousel.prototype.keydown = function (e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        switch (e.which) {
          case 37:
            this.prev();break;
          case 39:
            this.next();break;
          default:
            return;
        }

        e.preventDefault();
      };

      Carousel.prototype.cycle = function (e) {
        e || (this.paused = false);

        this.interval && clearInterval(this.interval);

        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));

        return this;
      };

      Carousel.prototype.getItemIndex = function (item) {
        this.$items = item.parent().children('.item');
        return this.$items.index(item || this.$active);
      };

      Carousel.prototype.getItemForDirection = function (direction, active) {
        var activeIndex = this.getItemIndex(active);
        var willWrap = direction == 'prev' && activeIndex === 0 || direction == 'next' && activeIndex == this.$items.length - 1;
        if (willWrap && !this.options.wrap) return active;
        var delta = direction == 'prev' ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this.$items.length;
        return this.$items.eq(itemIndex);
      };

      Carousel.prototype.to = function (pos) {
        var that = this;
        var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'));

        if (pos > this.$items.length - 1 || pos < 0) return;

        if (this.sliding) return this.$element.one('slid.bs.carousel', function () {
          that.to(pos);
        }); // yes, "slid"
        if (activeIndex == pos) return this.pause().cycle();

        return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos));
      };

      Carousel.prototype.pause = function (e) {
        e || (this.paused = true);

        if (this.$element.find('.next, .prev').length && $.support.transition) {
          this.$element.trigger($.support.transition.end);
          this.cycle(true);
        }

        this.interval = clearInterval(this.interval);

        return this;
      };

      Carousel.prototype.next = function () {
        if (this.sliding) return;
        return this.slide('next');
      };

      Carousel.prototype.prev = function () {
        if (this.sliding) return;
        return this.slide('prev');
      };

      Carousel.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active');
        var $next = next || this.getItemForDirection(type, $active);
        var isCycling = this.interval;
        var direction = type == 'next' ? 'left' : 'right';
        var that = this;

        if ($next.hasClass('active')) return this.sliding = false;

        var relatedTarget = $next[0];
        var slideEvent = $.Event('slide.bs.carousel', {
          relatedTarget: relatedTarget,
          direction: direction
        });
        this.$element.trigger(slideEvent);
        if (slideEvent.isDefaultPrevented()) return;

        this.sliding = true;

        isCycling && this.pause();

        if (this.$indicators.length) {
          this.$indicators.find('.active').removeClass('active');
          var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
          $nextIndicator && $nextIndicator.addClass('active');
        }

        var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }); // yes, "slid"
        if ($.support.transition && this.$element.hasClass('slide')) {
          $next.addClass(type);
          $next[0].offsetWidth; // force reflow
          $active.addClass(direction);
          $next.addClass(direction);
          $active.one('bsTransitionEnd', function () {
            $next.removeClass([type, direction].join(' ')).addClass('active');
            $active.removeClass(['active', direction].join(' '));
            that.sliding = false;
            setTimeout(function () {
              that.$element.trigger(slidEvent);
            }, 0);
          }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
        } else {
          $active.removeClass('active');
          $next.addClass('active');
          this.sliding = false;
          this.$element.trigger(slidEvent);
        }

        isCycling && this.cycle();

        return this;
      };

      // CAROUSEL PLUGIN DEFINITION
      // ==========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.carousel');
          var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option);
          var action = typeof option == 'string' ? option : options.slide;

          if (!data) $this.data('bs.carousel', data = new Carousel(this, options));
          if (typeof option == 'number') data.to(option);else if (action) data[action]();else if (options.interval) data.pause().cycle();
        });
      }

      var old = $.fn.carousel;

      $.fn.carousel = Plugin;
      $.fn.carousel.Constructor = Carousel;

      // CAROUSEL NO CONFLICT
      // ====================

      $.fn.carousel.noConflict = function () {
        $.fn.carousel = old;
        return this;
      };

      // CAROUSEL DATA-API
      // =================

      var clickHandler = function (e) {
        var href;
        var $this = $(this);
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
        if (!$target.hasClass('carousel')) return;
        var options = $.extend({}, $target.data(), $this.data());
        var slideIndex = $this.attr('data-slide-to');
        if (slideIndex) options.interval = false;

        Plugin.call($target, options);

        if (slideIndex) {
          $target.data('bs.carousel').to(slideIndex);
        }

        e.preventDefault();
      };

      $(document).on('click.bs.carousel.data-api', '[data-slide]', clickHandler).on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler);

      $(window).on('load', function () {
        $('[data-ride="carousel"]').each(function () {
          var $carousel = $(this);
          Plugin.call($carousel, $carousel.data());
        });
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: collapse.js v3.3.7
     * http://getbootstrap.com/javascript/#collapse
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    /* jshint latedef: false */

    +function ($) {
      'use strict';

      // COLLAPSE PUBLIC CLASS DEFINITION
      // ================================

      var Collapse = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;

        if (this.options.parent) {
          this.$parent = this.getParent();
        } else {
          this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }

        if (this.options.toggle) this.toggle();
      };

      Collapse.VERSION = '3.3.7';

      Collapse.TRANSITION_DURATION = 350;

      Collapse.DEFAULTS = {
        toggle: true
      };

      Collapse.prototype.dimension = function () {
        var hasWidth = this.$element.hasClass('width');
        return hasWidth ? 'width' : 'height';
      };

      Collapse.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('in')) return;

        var activesData;
        var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

        if (actives && actives.length) {
          activesData = actives.data('bs.collapse');
          if (activesData && activesData.transitioning) return;
        }

        var startEvent = $.Event('show.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;

        if (actives && actives.length) {
          Plugin.call(actives, 'hide');
          activesData || actives.data('bs.collapse', null);
        }

        var dimension = this.dimension();

        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

        this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

        this.transitioning = 1;

        var complete = function () {
          this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
          this.transitioning = 0;
          this.$element.trigger('shown.bs.collapse');
        };

        if (!$.support.transition) return complete.call(this);

        var scrollSize = $.camelCase(['scroll', dimension].join('-'));

        this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
      };

      Collapse.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('in')) return;

        var startEvent = $.Event('hide.bs.collapse');
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;

        var dimension = this.dimension();

        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

        this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

        this.$trigger.addClass('collapsed').attr('aria-expanded', false);

        this.transitioning = 1;

        var complete = function () {
          this.transitioning = 0;
          this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
        };

        if (!$.support.transition) return complete.call(this);

        this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
      };

      Collapse.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']();
      };

      Collapse.prototype.getParent = function () {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
          var $element = $(element);
          this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
      };

      Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
        var isOpen = $element.hasClass('in');

        $element.attr('aria-expanded', isOpen);
        $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
      };

      function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

        return $(target);
      }

      // COLLAPSE PLUGIN DEFINITION
      // ==========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.collapse');
          var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option);

          if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
          if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.collapse;

      $.fn.collapse = Plugin;
      $.fn.collapse.Constructor = Collapse;

      // COLLAPSE NO CONFLICT
      // ====================

      $.fn.collapse.noConflict = function () {
        $.fn.collapse = old;
        return this;
      };

      // COLLAPSE DATA-API
      // =================

      $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
        var $this = $(this);

        if (!$this.attr('data-target')) e.preventDefault();

        var $target = getTargetFromTrigger($this);
        var data = $target.data('bs.collapse');
        var option = data ? 'toggle' : $this.data();

        Plugin.call($target, option);
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: dropdown.js v3.3.7
     * http://getbootstrap.com/javascript/#dropdowns
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // DROPDOWN CLASS DEFINITION
      // =========================

      var backdrop = '.dropdown-backdrop';
      var toggle = '[data-toggle="dropdown"]';
      var Dropdown = function (element) {
        $(element).on('click.bs.dropdown', this.toggle);
      };

      Dropdown.VERSION = '3.3.7';

      function getParent($this) {
        var selector = $this.attr('data-target');

        if (!selector) {
          selector = $this.attr('href');
          selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
        }

        var $parent = selector && $(selector);

        return $parent && $parent.length ? $parent : $this.parent();
      }

      function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function () {
          var $this = $(this);
          var $parent = getParent($this);
          var relatedTarget = { relatedTarget: this };

          if (!$parent.hasClass('open')) return;

          if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;

          $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget));

          if (e.isDefaultPrevented()) return;

          $this.attr('aria-expanded', 'false');
          $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget));
        });
      }

      Dropdown.prototype.toggle = function (e) {
        var $this = $(this);

        if ($this.is('.disabled, :disabled')) return;

        var $parent = getParent($this);
        var isActive = $parent.hasClass('open');

        clearMenus();

        if (!isActive) {
          if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
            // if mobile we use a backdrop because click events don't delegate
            $(document.createElement('div')).addClass('dropdown-backdrop').insertAfter($(this)).on('click', clearMenus);
          }

          var relatedTarget = { relatedTarget: this };
          $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget));

          if (e.isDefaultPrevented()) return;

          $this.trigger('focus').attr('aria-expanded', 'true');

          $parent.toggleClass('open').trigger($.Event('shown.bs.dropdown', relatedTarget));
        }

        return false;
      };

      Dropdown.prototype.keydown = function (e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

        var $this = $(this);

        e.preventDefault();
        e.stopPropagation();

        if ($this.is('.disabled, :disabled')) return;

        var $parent = getParent($this);
        var isActive = $parent.hasClass('open');

        if (!isActive && e.which != 27 || isActive && e.which == 27) {
          if (e.which == 27) $parent.find(toggle).trigger('focus');
          return $this.trigger('click');
        }

        var desc = ' li:not(.disabled):visible a';
        var $items = $parent.find('.dropdown-menu' + desc);

        if (!$items.length) return;

        var index = $items.index(e.target);

        if (e.which == 38 && index > 0) index--; // up
        if (e.which == 40 && index < $items.length - 1) index++; // down
        if (!~index) index = 0;

        $items.eq(index).trigger('focus');
      };

      // DROPDOWN PLUGIN DEFINITION
      // ==========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.dropdown');

          if (!data) $this.data('bs.dropdown', data = new Dropdown(this));
          if (typeof option == 'string') data[option].call($this);
        });
      }

      var old = $.fn.dropdown;

      $.fn.dropdown = Plugin;
      $.fn.dropdown.Constructor = Dropdown;

      // DROPDOWN NO CONFLICT
      // ====================

      $.fn.dropdown.noConflict = function () {
        $.fn.dropdown = old;
        return this;
      };

      // APPLY TO STANDARD DROPDOWN ELEMENTS
      // ===================================

      $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function (e) {
        e.stopPropagation();
      }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown).on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown);
    }(jQuery);

    /* ========================================================================
     * Bootstrap: modal.js v3.3.7
     * http://getbootstrap.com/javascript/#modals
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // MODAL CLASS DEFINITION
      // ======================

      var Modal = function (element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$dialog = this.$element.find('.modal-dialog');
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;

        if (this.options.remote) {
          this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
            this.$element.trigger('loaded.bs.modal');
          }, this));
        }
      };

      Modal.VERSION = '3.3.7';

      Modal.TRANSITION_DURATION = 300;
      Modal.BACKDROP_TRANSITION_DURATION = 150;

      Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
      };

      Modal.prototype.toggle = function (_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
      };

      Modal.prototype.show = function (_relatedTarget) {
        var that = this;
        var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget });

        this.$element.trigger(e);

        if (this.isShown || e.isDefaultPrevented()) return;

        this.isShown = true;

        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass('modal-open');

        this.escape();
        this.resize();

        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));

        this.$dialog.on('mousedown.dismiss.bs.modal', function () {
          that.$element.one('mouseup.dismiss.bs.modal', function (e) {
            if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
          });
        });

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade');

          if (!that.$element.parent().length) {
            that.$element.appendTo(that.$body); // don't move modals dom position
          }

          that.$element.show().scrollTop(0);

          that.adjustDialog();

          if (transition) {
            that.$element[0].offsetWidth; // force reflow
          }

          that.$element.addClass('in');

          that.enforceFocus();

          var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget });

          transition ? that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e);
          }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
        });
      };

      Modal.prototype.hide = function (e) {
        if (e) e.preventDefault();

        e = $.Event('hide.bs.modal');

        this.$element.trigger(e);

        if (!this.isShown || e.isDefaultPrevented()) return;

        this.isShown = false;

        this.escape();
        this.resize();

        $(document).off('focusin.bs.modal');

        this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');

        this.$dialog.off('mousedown.dismiss.bs.modal');

        $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
      };

      Modal.prototype.enforceFocus = function () {
        $(document).off('focusin.bs.modal') // guard against infinite focus loop
        .on('focusin.bs.modal', $.proxy(function (e) {
          if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
            this.$element.trigger('focus');
          }
        }, this));
      };

      Modal.prototype.escape = function () {
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
            e.which == 27 && this.hide();
          }, this));
        } else if (!this.isShown) {
          this.$element.off('keydown.dismiss.bs.modal');
        }
      };

      Modal.prototype.resize = function () {
        if (this.isShown) {
          $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
        } else {
          $(window).off('resize.bs.modal');
        }
      };

      Modal.prototype.hideModal = function () {
        var that = this;
        this.$element.hide();
        this.backdrop(function () {
          that.$body.removeClass('modal-open');
          that.resetAdjustments();
          that.resetScrollbar();
          that.$element.trigger('hidden.bs.modal');
        });
      };

      Modal.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
      };

      Modal.prototype.backdrop = function (callback) {
        var that = this;
        var animate = this.$element.hasClass('fade') ? 'fade' : '';

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate;

          this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);

          this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
            if (this.ignoreBackdropClick) {
              this.ignoreBackdropClick = false;
              return;
            }
            if (e.target !== e.currentTarget) return;
            this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
          }, this));

          if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

          this.$backdrop.addClass('in');

          if (!callback) return;

          doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in');

          var callbackRemove = function () {
            that.removeBackdrop();
            callback && callback();
          };
          $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
        } else if (callback) {
          callback();
        }
      };

      // these following methods are used to handle overflowing modals

      Modal.prototype.handleUpdate = function () {
        this.adjustDialog();
      };

      Modal.prototype.adjustDialog = function () {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;

        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
          paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
        });
      };

      Modal.prototype.resetAdjustments = function () {
        this.$element.css({
          paddingLeft: '',
          paddingRight: ''
        });
      };

      Modal.prototype.checkScrollbar = function () {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
          // workaround for missing window.innerWidth in IE8
          var documentElementRect = document.documentElement.getBoundingClientRect();
          fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar();
      };

      Modal.prototype.setScrollbar = function () {
        var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || '';
        if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
      };

      Modal.prototype.resetScrollbar = function () {
        this.$body.css('padding-right', this.originalBodyPad);
      };

      Modal.prototype.measureScrollbar = function () {
        // thx walsh
        var scrollDiv = document.createElement('div');
        scrollDiv.className = 'modal-scrollbar-measure';
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
      };

      // MODAL PLUGIN DEFINITION
      // =======================

      function Plugin(option, _relatedTarget) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.modal');
          var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);

          if (!data) $this.data('bs.modal', data = new Modal(this, options));
          if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
        });
      }

      var old = $.fn.modal;

      $.fn.modal = Plugin;
      $.fn.modal.Constructor = Modal;

      // MODAL NO CONFLICT
      // =================

      $.fn.modal.noConflict = function () {
        $.fn.modal = old;
        return this;
      };

      // MODAL DATA-API
      // ==============

      $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
        var $this = $(this);
        var href = $this.attr('href');
        var $target = $($this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

        if ($this.is('a')) e.preventDefault();

        $target.one('show.bs.modal', function (showEvent) {
          if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown
          $target.one('hidden.bs.modal', function () {
            $this.is(':visible') && $this.trigger('focus');
          });
        });
        Plugin.call($target, option, this);
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: tooltip.js v3.3.7
     * http://getbootstrap.com/javascript/#tooltip
     * Inspired by the original jQuery.tipsy by Jason Frame
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // TOOLTIP PUBLIC CLASS DEFINITION
      // ===============================

      var Tooltip = function (element, options) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;

        this.init('tooltip', element, options);
      };

      Tooltip.VERSION = '3.3.7';

      Tooltip.TRANSITION_DURATION = 150;

      Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
          selector: 'body',
          padding: 0
        }
      };

      Tooltip.prototype.init = function (type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $(element);
        this.options = this.getOptions(options);
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = { click: false, hover: false, focus: false };

        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
          throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
        }

        var triggers = this.options.trigger.split(' ');

        for (var i = triggers.length; i--;) {
          var trigger = triggers[i];

          if (trigger == 'click') {
            this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this));
          } else if (trigger != 'manual') {
            var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin';
            var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout';

            this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this));
            this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this));
          }
        }

        this.options.selector ? this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' }) : this.fixTitle();
      };

      Tooltip.prototype.getDefaults = function () {
        return Tooltip.DEFAULTS;
      };

      Tooltip.prototype.getOptions = function (options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);

        if (options.delay && typeof options.delay == 'number') {
          options.delay = {
            show: options.delay,
            hide: options.delay
          };
        }

        return options;
      };

      Tooltip.prototype.getDelegateOptions = function () {
        var options = {};
        var defaults = this.getDefaults();

        this._options && $.each(this._options, function (key, value) {
          if (defaults[key] != value) options[key] = value;
        });

        return options;
      };

      Tooltip.prototype.enter = function (obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

        if (!self) {
          self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
          $(obj.currentTarget).data('bs.' + this.type, self);
        }

        if (obj instanceof $.Event) {
          self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true;
        }

        if (self.tip().hasClass('in') || self.hoverState == 'in') {
          self.hoverState = 'in';
          return;
        }

        clearTimeout(self.timeout);

        self.hoverState = 'in';

        if (!self.options.delay || !self.options.delay.show) return self.show();

        self.timeout = setTimeout(function () {
          if (self.hoverState == 'in') self.show();
        }, self.options.delay.show);
      };

      Tooltip.prototype.isInStateTrue = function () {
        for (var key in this.inState) {
          if (this.inState[key]) return true;
        }

        return false;
      };

      Tooltip.prototype.leave = function (obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type);

        if (!self) {
          self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
          $(obj.currentTarget).data('bs.' + this.type, self);
        }

        if (obj instanceof $.Event) {
          self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false;
        }

        if (self.isInStateTrue()) return;

        clearTimeout(self.timeout);

        self.hoverState = 'out';

        if (!self.options.delay || !self.options.delay.hide) return self.hide();

        self.timeout = setTimeout(function () {
          if (self.hoverState == 'out') self.hide();
        }, self.options.delay.hide);
      };

      Tooltip.prototype.show = function () {
        var e = $.Event('show.bs.' + this.type);

        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);

          var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (e.isDefaultPrevented() || !inDom) return;
          var that = this;

          var $tip = this.tip();

          var tipId = this.getUID(this.type);

          this.setContent();
          $tip.attr('id', tipId);
          this.$element.attr('aria-describedby', tipId);

          if (this.options.animation) $tip.addClass('fade');

          var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;

          var autoToken = /\s?auto?\s?/i;
          var autoPlace = autoToken.test(placement);
          if (autoPlace) placement = placement.replace(autoToken, '') || 'top';

          $tip.detach().css({ top: 0, left: 0, display: 'block' }).addClass(placement).data('bs.' + this.type, this);

          this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
          this.$element.trigger('inserted.bs.' + this.type);

          var pos = this.getPosition();
          var actualWidth = $tip[0].offsetWidth;
          var actualHeight = $tip[0].offsetHeight;

          if (autoPlace) {
            var orgPlacement = placement;
            var viewportDim = this.getPosition(this.$viewport);

            placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < viewportDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > viewportDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < viewportDim.left ? 'right' : placement;

            $tip.removeClass(orgPlacement).addClass(placement);
          }

          var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);

          this.applyPlacement(calculatedOffset, placement);

          var complete = function () {
            var prevHoverState = that.hoverState;
            that.$element.trigger('shown.bs.' + that.type);
            that.hoverState = null;

            if (prevHoverState == 'out') that.leave(that);
          };

          $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        }
      };

      Tooltip.prototype.applyPlacement = function (offset, placement) {
        var $tip = this.tip();
        var width = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;

        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css('margin-top'), 10);
        var marginLeft = parseInt($tip.css('margin-left'), 10);

        // we must check for NaN for ie 8/9
        if (isNaN(marginTop)) marginTop = 0;
        if (isNaN(marginLeft)) marginLeft = 0;

        offset.top += marginTop;
        offset.left += marginLeft;

        // $.fn.offset doesn't round pixel values
        // so we use setOffset directly with our own function B-0
        $.offset.setOffset($tip[0], $.extend({
          using: function (props) {
            $tip.css({
              top: Math.round(props.top),
              left: Math.round(props.left)
            });
          }
        }, offset), 0);

        $tip.addClass('in');

        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;

        if (placement == 'top' && actualHeight != height) {
          offset.top = offset.top + height - actualHeight;
        }

        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);

        if (delta.left) offset.left += delta.left;else offset.top += delta.top;

        var isVertical = /top|bottom/.test(placement);
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight';

        $tip.offset(offset);
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
      };

      Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
        this.arrow().css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%').css(isVertical ? 'top' : 'left', '');
      };

      Tooltip.prototype.setContent = function () {
        var $tip = this.tip();
        var title = this.getTitle();

        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title);
        $tip.removeClass('fade in top bottom left right');
      };

      Tooltip.prototype.hide = function (callback) {
        var that = this;
        var $tip = $(this.$tip);
        var e = $.Event('hide.bs.' + this.type);

        function complete() {
          if (that.hoverState != 'in') $tip.detach();
          if (that.$element) {
            // TODO: Check whether guarding this code with this `if` is really necessary.
            that.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + that.type);
          }
          callback && callback();
        }

        this.$element.trigger(e);

        if (e.isDefaultPrevented()) return;

        $tip.removeClass('in');

        $.support.transition && $tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();

        this.hoverState = null;

        return this;
      };

      Tooltip.prototype.fixTitle = function () {
        var $e = this.$element;
        if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
          $e.attr('data-original-title', $e.attr('title') || '').attr('title', '');
        }
      };

      Tooltip.prototype.hasContent = function () {
        return this.getTitle();
      };

      Tooltip.prototype.getPosition = function ($element) {
        $element = $element || this.$element;

        var el = $element[0];
        var isBody = el.tagName == 'BODY';

        var elRect = el.getBoundingClientRect();
        if (elRect.width == null) {
          // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
          elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top });
        }
        var isSvg = window.SVGElement && el instanceof window.SVGElement;
        // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
        // See https://github.com/twbs/bootstrap/issues/20280
        var elOffset = isBody ? { top: 0, left: 0 } : isSvg ? null : $element.offset();
        var scroll = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() };
        var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

        return $.extend({}, elRect, scroll, outerDims, elOffset);
      };

      Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? { top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'top' ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } : placement == 'left' ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */{ top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width };
      };

      Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
        var delta = { top: 0, left: 0 };
        if (!this.$viewport) return delta;

        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
        var viewportDimensions = this.getPosition(this.$viewport);

        if (/right|left/.test(placement)) {
          var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
          var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
          if (topEdgeOffset < viewportDimensions.top) {
            // top overflow
            delta.top = viewportDimensions.top - topEdgeOffset;
          } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
            // bottom overflow
            delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
          }
        } else {
          var leftEdgeOffset = pos.left - viewportPadding;
          var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
          if (leftEdgeOffset < viewportDimensions.left) {
            // left overflow
            delta.left = viewportDimensions.left - leftEdgeOffset;
          } else if (rightEdgeOffset > viewportDimensions.right) {
            // right overflow
            delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
          }
        }

        return delta;
      };

      Tooltip.prototype.getTitle = function () {
        var title;
        var $e = this.$element;
        var o = this.options;

        title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title);

        return title;
      };

      Tooltip.prototype.getUID = function (prefix) {
        do prefix += ~~(Math.random() * 1000000); while (document.getElementById(prefix));
        return prefix;
      };

      Tooltip.prototype.tip = function () {
        if (!this.$tip) {
          this.$tip = $(this.options.template);
          if (this.$tip.length != 1) {
            throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
          }
        }
        return this.$tip;
      };

      Tooltip.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
      };

      Tooltip.prototype.enable = function () {
        this.enabled = true;
      };

      Tooltip.prototype.disable = function () {
        this.enabled = false;
      };

      Tooltip.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      };

      Tooltip.prototype.toggle = function (e) {
        var self = this;
        if (e) {
          self = $(e.currentTarget).data('bs.' + this.type);
          if (!self) {
            self = new this.constructor(e.currentTarget, this.getDelegateOptions());
            $(e.currentTarget).data('bs.' + this.type, self);
          }
        }

        if (e) {
          self.inState.click = !self.inState.click;
          if (self.isInStateTrue()) self.enter(self);else self.leave(self);
        } else {
          self.tip().hasClass('in') ? self.leave(self) : self.enter(self);
        }
      };

      Tooltip.prototype.destroy = function () {
        var that = this;
        clearTimeout(this.timeout);
        this.hide(function () {
          that.$element.off('.' + that.type).removeData('bs.' + that.type);
          if (that.$tip) {
            that.$tip.detach();
          }
          that.$tip = null;
          that.$arrow = null;
          that.$viewport = null;
          that.$element = null;
        });
      };

      // TOOLTIP PLUGIN DEFINITION
      // =========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.tooltip');
          var options = typeof option == 'object' && option;

          if (!data && /destroy|hide/.test(option)) return;
          if (!data) $this.data('bs.tooltip', data = new Tooltip(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.tooltip;

      $.fn.tooltip = Plugin;
      $.fn.tooltip.Constructor = Tooltip;

      // TOOLTIP NO CONFLICT
      // ===================

      $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old;
        return this;
      };
    }(jQuery);

    /* ========================================================================
     * Bootstrap: popover.js v3.3.7
     * http://getbootstrap.com/javascript/#popovers
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // POPOVER PUBLIC CLASS DEFINITION
      // ===============================

      var Popover = function (element, options) {
        this.init('popover', element, options);
      };

      if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js');

      Popover.VERSION = '3.3.7';

      Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
      });

      // NOTE: POPOVER EXTENDS tooltip.js
      // ================================

      Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);

      Popover.prototype.constructor = Popover;

      Popover.prototype.getDefaults = function () {
        return Popover.DEFAULTS;
      };

      Popover.prototype.setContent = function () {
        var $tip = this.tip();
        var title = this.getTitle();
        var content = this.getContent();

        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title);
        $tip.find('.popover-content').children().detach().end()[// we use append for html objects to maintain js events
        this.options.html ? typeof content == 'string' ? 'html' : 'append' : 'text'](content);

        $tip.removeClass('fade top bottom left right in');

        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide();
      };

      Popover.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      };

      Popover.prototype.getContent = function () {
        var $e = this.$element;
        var o = this.options;

        return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content);
      };

      Popover.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find('.arrow');
      };

      // POPOVER PLUGIN DEFINITION
      // =========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.popover');
          var options = typeof option == 'object' && option;

          if (!data && /destroy|hide/.test(option)) return;
          if (!data) $this.data('bs.popover', data = new Popover(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.popover;

      $.fn.popover = Plugin;
      $.fn.popover.Constructor = Popover;

      // POPOVER NO CONFLICT
      // ===================

      $.fn.popover.noConflict = function () {
        $.fn.popover = old;
        return this;
      };
    }(jQuery);

    /* ========================================================================
     * Bootstrap: scrollspy.js v3.3.7
     * http://getbootstrap.com/javascript/#scrollspy
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // SCROLLSPY CLASS DEFINITION
      // ==========================

      function ScrollSpy(element, options) {
        this.$body = $(document.body);
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || '') + ' .nav li > a';
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;

        this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this));
        this.refresh();
        this.process();
      }

      ScrollSpy.VERSION = '3.3.7';

      ScrollSpy.DEFAULTS = {
        offset: 10
      };

      ScrollSpy.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
      };

      ScrollSpy.prototype.refresh = function () {
        var that = this;
        var offsetMethod = 'offset';
        var offsetBase = 0;

        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();

        if (!$.isWindow(this.$scrollElement[0])) {
          offsetMethod = 'position';
          offsetBase = this.$scrollElement.scrollTop();
        }

        this.$body.find(this.selector).map(function () {
          var $el = $(this);
          var href = $el.data('target') || $el.attr('href');
          var $href = /^#./.test(href) && $(href);

          return $href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]] || null;
        }).sort(function (a, b) {
          return a[0] - b[0];
        }).each(function () {
          that.offsets.push(this[0]);
          that.targets.push(this[1]);
        });
      };

      ScrollSpy.prototype.process = function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;

        if (this.scrollHeight != scrollHeight) {
          this.refresh();
        }

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        }

        if (activeTarget && scrollTop < offsets[0]) {
          this.activeTarget = null;
          return this.clear();
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
        }
      };

      ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target;

        this.clear();

        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';

        var active = $(selector).parents('li').addClass('active');

        if (active.parent('.dropdown-menu').length) {
          active = active.closest('li.dropdown').addClass('active');
        }

        active.trigger('activate.bs.scrollspy');
      };

      ScrollSpy.prototype.clear = function () {
        $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
      };

      // SCROLLSPY PLUGIN DEFINITION
      // ===========================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.scrollspy');
          var options = typeof option == 'object' && option;

          if (!data) $this.data('bs.scrollspy', data = new ScrollSpy(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.scrollspy;

      $.fn.scrollspy = Plugin;
      $.fn.scrollspy.Constructor = ScrollSpy;

      // SCROLLSPY NO CONFLICT
      // =====================

      $.fn.scrollspy.noConflict = function () {
        $.fn.scrollspy = old;
        return this;
      };

      // SCROLLSPY DATA-API
      // ==================

      $(window).on('load.bs.scrollspy.data-api', function () {
        $('[data-spy="scroll"]').each(function () {
          var $spy = $(this);
          Plugin.call($spy, $spy.data());
        });
      });
    }(jQuery);

    /* ========================================================================
     * Bootstrap: tab.js v3.3.7
     * http://getbootstrap.com/javascript/#tabs
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // TAB CLASS DEFINITION
      // ====================

      var Tab = function (element) {
        // jscs:disable requireDollarBeforejQueryAssignment
        this.element = $(element);
        // jscs:enable requireDollarBeforejQueryAssignment
      };

      Tab.VERSION = '3.3.7';

      Tab.TRANSITION_DURATION = 150;

      Tab.prototype.show = function () {
        var $this = this.element;
        var $ul = $this.closest('ul:not(.dropdown-menu)');
        var selector = $this.data('target');

        if (!selector) {
          selector = $this.attr('href');
          selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
        }

        if ($this.parent('li').hasClass('active')) return;

        var $previous = $ul.find('.active:last a');
        var hideEvent = $.Event('hide.bs.tab', {
          relatedTarget: $this[0]
        });
        var showEvent = $.Event('show.bs.tab', {
          relatedTarget: $previous[0]
        });

        $previous.trigger(hideEvent);
        $this.trigger(showEvent);

        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

        var $target = $(selector);

        this.activate($this.closest('li'), $ul);
        this.activate($target, $target.parent(), function () {
          $previous.trigger({
            type: 'hidden.bs.tab',
            relatedTarget: $this[0]
          });
          $this.trigger({
            type: 'shown.bs.tab',
            relatedTarget: $previous[0]
          });
        });
      };

      Tab.prototype.activate = function (element, container, callback) {
        var $active = container.find('> .active');
        var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

        function next() {
          $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

          element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

          if (transition) {
            element[0].offsetWidth; // reflow for transition
            element.addClass('in');
          } else {
            element.removeClass('fade');
          }

          if (element.parent('.dropdown-menu').length) {
            element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
          }

          callback && callback();
        }

        $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

        $active.removeClass('in');
      };

      // TAB PLUGIN DEFINITION
      // =====================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.tab');

          if (!data) $this.data('bs.tab', data = new Tab(this));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.tab;

      $.fn.tab = Plugin;
      $.fn.tab.Constructor = Tab;

      // TAB NO CONFLICT
      // ===============

      $.fn.tab.noConflict = function () {
        $.fn.tab = old;
        return this;
      };

      // TAB DATA-API
      // ============

      var clickHandler = function (e) {
        e.preventDefault();
        Plugin.call($(this), 'show');
      };

      $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
    }(jQuery);

    /* ========================================================================
     * Bootstrap: affix.js v3.3.7
     * http://getbootstrap.com/javascript/#affix
     * ========================================================================
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */

    +function ($) {
      'use strict';

      // AFFIX CLASS DEFINITION
      // ======================

      var Affix = function (element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options);

        this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this));

        this.$element = $(element);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;

        this.checkPosition();
      };

      Affix.VERSION = '3.3.7';

      Affix.RESET = 'affix affix-top affix-bottom';

      Affix.DEFAULTS = {
        offset: 0,
        target: window
      };

      Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var targetHeight = this.$target.height();

        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false;

        if (this.affixed == 'bottom') {
          if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : 'bottom';
          return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : 'bottom';
        }

        var initializing = this.affixed == null;
        var colliderTop = initializing ? scrollTop : position.top;
        var colliderHeight = initializing ? targetHeight : height;

        if (offsetTop != null && scrollTop <= offsetTop) return 'top';
        if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return 'bottom';

        return false;
      };

      Affix.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass('affix');
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
      };

      Affix.prototype.checkPositionWithEventLoop = function () {
        setTimeout($.proxy(this.checkPosition, this), 1);
      };

      Affix.prototype.checkPosition = function () {
        if (!this.$element.is(':visible')) return;

        var height = this.$element.height();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        var scrollHeight = Math.max($(document).height(), $(document.body).height());

        if (typeof offset != 'object') offsetBottom = offsetTop = offset;
        if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element);
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element);

        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);

        if (this.affixed != affix) {
          if (this.unpin != null) this.$element.css('top', '');

          var affixType = 'affix' + (affix ? '-' + affix : '');
          var e = $.Event(affixType + '.bs.affix');

          this.$element.trigger(e);

          if (e.isDefaultPrevented()) return;

          this.affixed = affix;
          this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null;

          this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace('affix', 'affixed') + '.bs.affix');
        }

        if (affix == 'bottom') {
          this.$element.offset({
            top: scrollHeight - height - offsetBottom
          });
        }
      };

      // AFFIX PLUGIN DEFINITION
      // =======================

      function Plugin(option) {
        return this.each(function () {
          var $this = $(this);
          var data = $this.data('bs.affix');
          var options = typeof option == 'object' && option;

          if (!data) $this.data('bs.affix', data = new Affix(this, options));
          if (typeof option == 'string') data[option]();
        });
      }

      var old = $.fn.affix;

      $.fn.affix = Plugin;
      $.fn.affix.Constructor = Affix;

      // AFFIX NO CONFLICT
      // =================

      $.fn.affix.noConflict = function () {
        $.fn.affix = old;
        return this;
      };

      // AFFIX DATA-API
      // ==============

      $(window).on('load', function () {
        $('[data-spy="affix"]').each(function () {
          var $spy = $(this);
          var data = $spy.data();

          data.offset = data.offset || {};

          if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
          if (data.offsetTop != null) data.offset.top = data.offsetTop;

          Plugin.call($spy, data);
        });
      });
    }(jQuery);
  })(this);

  return _retrieveGlobal();
});
System.registerDynamic("github:twbs/bootstrap@3.3.7.js", ["github:twbs/bootstrap@3.3.7/js/bootstrap.js"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require("github:twbs/bootstrap@3.3.7/js/bootstrap.js");
  return module.exports;
});
System.registerDynamic("github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-css@0.1.32.js", [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {})(this);

  return _retrieveGlobal();
});
System.register('lib/main.js', ['npm:babel-runtime@5.8.38/core-js/get-iterator.js', 'npm:jquery@3.1.1.js', 'github:knockout/knockout@3.4.1.js', 'github:twbs/bootstrap@3.3.7.js', 'github:twbs/bootstrap@3.3.7/css/bootstrap.css!github:systemjs/plugin-css@0.1.32.js'], function (_export) {
				var _getIterator, $, ko;

				return {
								setters: [function (_npmBabelRuntime5838CoreJsGetIteratorJs) {
												_getIterator = _npmBabelRuntime5838CoreJsGetIteratorJs['default'];
								}, function (_npmJquery311Js) {
												$ = _npmJquery311Js['default'];
								}, function (_githubKnockoutKnockout341Js) {
												ko = _githubKnockoutKnockout341Js['default'];
								}, function (_githubTwbsBootstrap337Js) {}, function (_githubTwbsBootstrap337CssBootstrapCssGithubSystemjsPluginCss0132Js) {}],
								execute: function () {
												'use strict';

												$(function () {
																var createHandler = function createHandler() {
																				var map;
																				var markers = [];

																				ko.bindingHandlers.googlemap = {
																								init: function init(element, valueAccessor) {
																												var value = ko.unwrap(valueAccessor()),
																												    zoom = ko.unwrap(value.zoom),
																												    center = ko.unwrap(value.center);

																												var mapOptions = {
																																zoom: zoom,
																																center: new google.maps.LatLng(center.latitude, center.longitude),
																																mapTypeId: google.maps.MapTypeId.ROADMAP
																												};
																												map = new google.maps.Map(element, mapOptions);
																								},

																								update: function update(element, valueAccessor) {
																												markers.map(function (marker) {
																																return marker.setMap(null);
																												});

																												var value = ko.unwrap(valueAccessor()),
																												    locations = ko.unwrap(value.locations);

																												ko.utils.arrayForEach(locations, function (location) {
																																return markers.push(new google.maps.Marker({
																																				position: new google.maps.LatLng(ko.unwrap(location.latitude), ko.unwrap(location.longitude)),
																																				map: map
																																}));
																												});
																								}
																				};
																};

																var model = {
																				locations: [{ name: "Home", latitude: 37.3986234, longitude: -121.94488590000003 }, { name: "Safeway", latitude: 37.394634, longitude: -121.94767999999999 }, { name: "Walmart", latitude: 37.39000850000001, longitude: -121.98550219999998 }, { name: "Philz Coffee", latitude: 37.39000850000001, longitude: -122.03171250000003 }, { name: "Sunnyvale Library", latitude: 37.37189800000001, longitude: -122.03891699999997 }, { name: "Sprouts Farmers Market", latitude: 37.3667316, longitude: -122.0308412 }],
																				zoom: 12,
																				center: { latitude: 37.3986234, longitude: -121.94488590000003 }
																};

																var vm = {
																				locations: ko.observableArray(ko.utils.arrayMap(model.locations, function (item) {
																								return { name: ko.observable(item.name),
																												latitude: ko.observable(item.latitude),
																												longitude: ko.observable(item.longitude) };
																				})),
																				zoom: ko.observable(model.zoom),
																				center: ko.observable(model.center),
																				query: ko.observable(""),
																				search: function search(value) {
																								vm.locations.removeAll();
																								var _iteratorNormalCompletion = true;
																								var _didIteratorError = false;
																								var _iteratorError = undefined;

																								try {
																												for (var _iterator = _getIterator(model.locations), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
																																var loc = _step.value;

																																if (loc.name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
																																				vm.locations.push(loc);
																																}
																												}
																								} catch (err) {
																												_didIteratorError = true;
																												_iteratorError = err;
																								} finally {
																												try {
																																if (!_iteratorNormalCompletion && _iterator['return']) {
																																				_iterator['return']();
																																}
																												} finally {
																																if (_didIteratorError) {
																																				throw _iteratorError;
																																}
																												}
																								}
																				}
																};

																createHandler();
																vm.query.subscribe(vm.search);
																ko.applyBindings(vm);
												});
								}
				};
});
(function(c){if (typeof document == 'undefined') return; var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[a](d.createTextNode(c));})
("/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{box-sizing:content-box;-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:transparent!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"#\"]:after,a[href^=\"javascript:\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:Glyphicons Halflings;src:url('jspm_packages/github/twbs/bootstrap@3.3.7/fonts/glyphicons-halflings-regular.eot');src:url('jspm_packages/github/twbs/bootstrap@3.3.7/fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'),url('jspm_packages/github/twbs/bootstrap@3.3.7/fonts/glyphicons-halflings-regular.woff2') format('woff2'),url('jspm_packages/github/twbs/bootstrap@3.3.7/fonts/glyphicons-halflings-regular.woff') format('woff'),url('jspm_packages/github/twbs/bootstrap@3.3.7/fonts/glyphicons-halflings-regular.ttf') format('truetype'),url('jspm_packages/github/twbs/bootstrap@3.3.7/fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:Glyphicons Halflings;font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"\\002a\"}.glyphicon-plus:before{content:\"\\002b\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20ac\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270f\"}.glyphicon-glass:before{content:\"\\e001\"}.glyphicon-music:before{content:\"\\e002\"}.glyphicon-search:before{content:\"\\e003\"}.glyphicon-heart:before{content:\"\\e005\"}.glyphicon-star:before{content:\"\\e006\"}.glyphicon-star-empty:before{content:\"\\e007\"}.glyphicon-user:before{content:\"\\e008\"}.glyphicon-film:before{content:\"\\e009\"}.glyphicon-th-large:before{content:\"\\e010\"}.glyphicon-th:before{content:\"\\e011\"}.glyphicon-th-list:before{content:\"\\e012\"}.glyphicon-ok:before{content:\"\\e013\"}.glyphicon-remove:before{content:\"\\e014\"}.glyphicon-zoom-in:before{content:\"\\e015\"}.glyphicon-zoom-out:before{content:\"\\e016\"}.glyphicon-off:before{content:\"\\e017\"}.glyphicon-signal:before{content:\"\\e018\"}.glyphicon-cog:before{content:\"\\e019\"}.glyphicon-trash:before{content:\"\\e020\"}.glyphicon-home:before{content:\"\\e021\"}.glyphicon-file:before{content:\"\\e022\"}.glyphicon-time:before{content:\"\\e023\"}.glyphicon-road:before{content:\"\\e024\"}.glyphicon-download-alt:before{content:\"\\e025\"}.glyphicon-download:before{content:\"\\e026\"}.glyphicon-upload:before{content:\"\\e027\"}.glyphicon-inbox:before{content:\"\\e028\"}.glyphicon-play-circle:before{content:\"\\e029\"}.glyphicon-repeat:before{content:\"\\e030\"}.glyphicon-refresh:before{content:\"\\e031\"}.glyphicon-list-alt:before{content:\"\\e032\"}.glyphicon-lock:before{content:\"\\e033\"}.glyphicon-flag:before{content:\"\\e034\"}.glyphicon-headphones:before{content:\"\\e035\"}.glyphicon-volume-off:before{content:\"\\e036\"}.glyphicon-volume-down:before{content:\"\\e037\"}.glyphicon-volume-up:before{content:\"\\e038\"}.glyphicon-qrcode:before{content:\"\\e039\"}.glyphicon-barcode:before{content:\"\\e040\"}.glyphicon-tag:before{content:\"\\e041\"}.glyphicon-tags:before{content:\"\\e042\"}.glyphicon-book:before{content:\"\\e043\"}.glyphicon-bookmark:before{content:\"\\e044\"}.glyphicon-print:before{content:\"\\e045\"}.glyphicon-camera:before{content:\"\\e046\"}.glyphicon-font:before{content:\"\\e047\"}.glyphicon-bold:before{content:\"\\e048\"}.glyphicon-italic:before{content:\"\\e049\"}.glyphicon-text-height:before{content:\"\\e050\"}.glyphicon-text-width:before{content:\"\\e051\"}.glyphicon-align-left:before{content:\"\\e052\"}.glyphicon-align-center:before{content:\"\\e053\"}.glyphicon-align-right:before{content:\"\\e054\"}.glyphicon-align-justify:before{content:\"\\e055\"}.glyphicon-list:before{content:\"\\e056\"}.glyphicon-indent-left:before{content:\"\\e057\"}.glyphicon-indent-right:before{content:\"\\e058\"}.glyphicon-facetime-video:before{content:\"\\e059\"}.glyphicon-picture:before{content:\"\\e060\"}.glyphicon-map-marker:before{content:\"\\e062\"}.glyphicon-adjust:before{content:\"\\e063\"}.glyphicon-tint:before{content:\"\\e064\"}.glyphicon-edit:before{content:\"\\e065\"}.glyphicon-share:before{content:\"\\e066\"}.glyphicon-check:before{content:\"\\e067\"}.glyphicon-move:before{content:\"\\e068\"}.glyphicon-step-backward:before{content:\"\\e069\"}.glyphicon-fast-backward:before{content:\"\\e070\"}.glyphicon-backward:before{content:\"\\e071\"}.glyphicon-play:before{content:\"\\e072\"}.glyphicon-pause:before{content:\"\\e073\"}.glyphicon-stop:before{content:\"\\e074\"}.glyphicon-forward:before{content:\"\\e075\"}.glyphicon-fast-forward:before{content:\"\\e076\"}.glyphicon-step-forward:before{content:\"\\e077\"}.glyphicon-eject:before{content:\"\\e078\"}.glyphicon-chevron-left:before{content:\"\\e079\"}.glyphicon-chevron-right:before{content:\"\\e080\"}.glyphicon-plus-sign:before{content:\"\\e081\"}.glyphicon-minus-sign:before{content:\"\\e082\"}.glyphicon-remove-sign:before{content:\"\\e083\"}.glyphicon-ok-sign:before{content:\"\\e084\"}.glyphicon-question-sign:before{content:\"\\e085\"}.glyphicon-info-sign:before{content:\"\\e086\"}.glyphicon-screenshot:before{content:\"\\e087\"}.glyphicon-remove-circle:before{content:\"\\e088\"}.glyphicon-ok-circle:before{content:\"\\e089\"}.glyphicon-ban-circle:before{content:\"\\e090\"}.glyphicon-arrow-left:before{content:\"\\e091\"}.glyphicon-arrow-right:before{content:\"\\e092\"}.glyphicon-arrow-up:before{content:\"\\e093\"}.glyphicon-arrow-down:before{content:\"\\e094\"}.glyphicon-share-alt:before{content:\"\\e095\"}.glyphicon-resize-full:before{content:\"\\e096\"}.glyphicon-resize-small:before{content:\"\\e097\"}.glyphicon-exclamation-sign:before{content:\"\\e101\"}.glyphicon-gift:before{content:\"\\e102\"}.glyphicon-leaf:before{content:\"\\e103\"}.glyphicon-fire:before{content:\"\\e104\"}.glyphicon-eye-open:before{content:\"\\e105\"}.glyphicon-eye-close:before{content:\"\\e106\"}.glyphicon-warning-sign:before{content:\"\\e107\"}.glyphicon-plane:before{content:\"\\e108\"}.glyphicon-calendar:before{content:\"\\e109\"}.glyphicon-random:before{content:\"\\e110\"}.glyphicon-comment:before{content:\"\\e111\"}.glyphicon-magnet:before{content:\"\\e112\"}.glyphicon-chevron-up:before{content:\"\\e113\"}.glyphicon-chevron-down:before{content:\"\\e114\"}.glyphicon-retweet:before{content:\"\\e115\"}.glyphicon-shopping-cart:before{content:\"\\e116\"}.glyphicon-folder-close:before{content:\"\\e117\"}.glyphicon-folder-open:before{content:\"\\e118\"}.glyphicon-resize-vertical:before{content:\"\\e119\"}.glyphicon-resize-horizontal:before{content:\"\\e120\"}.glyphicon-hdd:before{content:\"\\e121\"}.glyphicon-bullhorn:before{content:\"\\e122\"}.glyphicon-bell:before{content:\"\\e123\"}.glyphicon-certificate:before{content:\"\\e124\"}.glyphicon-thumbs-up:before{content:\"\\e125\"}.glyphicon-thumbs-down:before{content:\"\\e126\"}.glyphicon-hand-right:before{content:\"\\e127\"}.glyphicon-hand-left:before{content:\"\\e128\"}.glyphicon-hand-up:before{content:\"\\e129\"}.glyphicon-hand-down:before{content:\"\\e130\"}.glyphicon-circle-arrow-right:before{content:\"\\e131\"}.glyphicon-circle-arrow-left:before{content:\"\\e132\"}.glyphicon-circle-arrow-up:before{content:\"\\e133\"}.glyphicon-circle-arrow-down:before{content:\"\\e134\"}.glyphicon-globe:before{content:\"\\e135\"}.glyphicon-wrench:before{content:\"\\e136\"}.glyphicon-tasks:before{content:\"\\e137\"}.glyphicon-filter:before{content:\"\\e138\"}.glyphicon-briefcase:before{content:\"\\e139\"}.glyphicon-fullscreen:before{content:\"\\e140\"}.glyphicon-dashboard:before{content:\"\\e141\"}.glyphicon-paperclip:before{content:\"\\e142\"}.glyphicon-heart-empty:before{content:\"\\e143\"}.glyphicon-link:before{content:\"\\e144\"}.glyphicon-phone:before{content:\"\\e145\"}.glyphicon-pushpin:before{content:\"\\e146\"}.glyphicon-usd:before{content:\"\\e148\"}.glyphicon-gbp:before{content:\"\\e149\"}.glyphicon-sort:before{content:\"\\e150\"}.glyphicon-sort-by-alphabet:before{content:\"\\e151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\e152\"}.glyphicon-sort-by-order:before{content:\"\\e153\"}.glyphicon-sort-by-order-alt:before{content:\"\\e154\"}.glyphicon-sort-by-attributes:before{content:\"\\e155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\e156\"}.glyphicon-unchecked:before{content:\"\\e157\"}.glyphicon-expand:before{content:\"\\e158\"}.glyphicon-collapse-down:before{content:\"\\e159\"}.glyphicon-collapse-up:before{content:\"\\e160\"}.glyphicon-log-in:before{content:\"\\e161\"}.glyphicon-flash:before{content:\"\\e162\"}.glyphicon-log-out:before{content:\"\\e163\"}.glyphicon-new-window:before{content:\"\\e164\"}.glyphicon-record:before{content:\"\\e165\"}.glyphicon-save:before{content:\"\\e166\"}.glyphicon-open:before{content:\"\\e167\"}.glyphicon-saved:before{content:\"\\e168\"}.glyphicon-import:before{content:\"\\e169\"}.glyphicon-export:before{content:\"\\e170\"}.glyphicon-send:before{content:\"\\e171\"}.glyphicon-floppy-disk:before{content:\"\\e172\"}.glyphicon-floppy-saved:before{content:\"\\e173\"}.glyphicon-floppy-remove:before{content:\"\\e174\"}.glyphicon-floppy-save:before{content:\"\\e175\"}.glyphicon-floppy-open:before{content:\"\\e176\"}.glyphicon-credit-card:before{content:\"\\e177\"}.glyphicon-transfer:before{content:\"\\e178\"}.glyphicon-cutlery:before{content:\"\\e179\"}.glyphicon-header:before{content:\"\\e180\"}.glyphicon-compressed:before{content:\"\\e181\"}.glyphicon-earphone:before{content:\"\\e182\"}.glyphicon-phone-alt:before{content:\"\\e183\"}.glyphicon-tower:before{content:\"\\e184\"}.glyphicon-stats:before{content:\"\\e185\"}.glyphicon-sd-video:before{content:\"\\e186\"}.glyphicon-hd-video:before{content:\"\\e187\"}.glyphicon-subtitles:before{content:\"\\e188\"}.glyphicon-sound-stereo:before{content:\"\\e189\"}.glyphicon-sound-dolby:before{content:\"\\e190\"}.glyphicon-sound-5-1:before{content:\"\\e191\"}.glyphicon-sound-6-1:before{content:\"\\e192\"}.glyphicon-sound-7-1:before{content:\"\\e193\"}.glyphicon-copyright-mark:before{content:\"\\e194\"}.glyphicon-registration-mark:before{content:\"\\e195\"}.glyphicon-cloud-download:before{content:\"\\e197\"}.glyphicon-cloud-upload:before{content:\"\\e198\"}.glyphicon-tree-conifer:before{content:\"\\e199\"}.glyphicon-tree-deciduous:before{content:\"\\e200\"}.glyphicon-cd:before{content:\"\\e201\"}.glyphicon-save-file:before{content:\"\\e202\"}.glyphicon-open-file:before{content:\"\\e203\"}.glyphicon-level-up:before{content:\"\\e204\"}.glyphicon-copy:before{content:\"\\e205\"}.glyphicon-paste:before{content:\"\\e206\"}.glyphicon-alert:before{content:\"\\e209\"}.glyphicon-equalizer:before{content:\"\\e210\"}.glyphicon-king:before{content:\"\\e211\"}.glyphicon-queen:before{content:\"\\e212\"}.glyphicon-pawn:before{content:\"\\e213\"}.glyphicon-bishop:before{content:\"\\e214\"}.glyphicon-knight:before{content:\"\\e215\"}.glyphicon-baby-formula:before{content:\"\\e216\"}.glyphicon-tent:before{content:\"\\26fa\"}.glyphicon-blackboard:before{content:\"\\e218\"}.glyphicon-bed:before{content:\"\\e219\"}.glyphicon-apple:before{content:\"\\f8ff\"}.glyphicon-erase:before{content:\"\\e221\"}.glyphicon-hourglass:before{content:\"\\231b\"}.glyphicon-lamp:before{content:\"\\e223\"}.glyphicon-duplicate:before{content:\"\\e224\"}.glyphicon-piggy-bank:before{content:\"\\e225\"}.glyphicon-scissors:before{content:\"\\e226\"}.glyphicon-bitcoin:before,.glyphicon-btc:before,.glyphicon-xbt:before{content:\"\\e227\"}.glyphicon-jpy:before,.glyphicon-yen:before{content:\"\\00a5\"}.glyphicon-rub:before,.glyphicon-ruble:before{content:\"\\20bd\"}.glyphicon-scale:before{content:\"\\e230\"}.glyphicon-ice-lolly:before{content:\"\\e231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\e232\"}.glyphicon-education:before{content:\"\\e233\"}.glyphicon-option-horizontal:before{content:\"\\e234\"}.glyphicon-option-vertical:before{content:\"\\e235\"}.glyphicon-menu-hamburger:before{content:\"\\e236\"}.glyphicon-modal-window:before{content:\"\\e237\"}.glyphicon-oil:before{content:\"\\e238\"}.glyphicon-grain:before{content:\"\\e239\"}.glyphicon-sunglasses:before{content:\"\\e240\"}.glyphicon-text-size:before{content:\"\\e241\"}.glyphicon-text-color:before{content:\"\\e242\"}.glyphicon-text-background:before{content:\"\\e243\"}.glyphicon-object-align-top:before{content:\"\\e244\"}.glyphicon-object-align-bottom:before{content:\"\\e245\"}.glyphicon-object-align-horizontal:before{content:\"\\e246\"}.glyphicon-object-align-left:before{content:\"\\e247\"}.glyphicon-object-align-vertical:before{content:\"\\e248\"}.glyphicon-object-align-right:before{content:\"\\e249\"}.glyphicon-triangle-right:before{content:\"\\e250\"}.glyphicon-triangle-left:before{content:\"\\e251\"}.glyphicon-triangle-bottom:before{content:\"\\e252\"}.glyphicon-triangle-top:before{content:\"\\e253\"}.glyphicon-console:before{content:\"\\e254\"}.glyphicon-superscript:before{content:\"\\e255\"}.glyphicon-subscript:before{content:\"\\e256\"}.glyphicon-menu-left:before{content:\"\\e257\"}.glyphicon-menu-right:before{content:\"\\e258\"}.glyphicon-menu-down:before{content:\"\\e259\"}.glyphicon-menu-up:before{content:\"\\e260\"}*,:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail>img,.thumbnail a>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-inline,.list-unstyled{padding-left:0;list-style:none}.list-inline{margin-left:-5px}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014 \\00A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\\00A0 \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,Courier New,monospace}code{color:#c7254e;background-color:#f9f2f4;border-radius:4px}code,kbd{padding:2px 4px;font-size:90%}kbd{color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777}caption,th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered,.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{min-width:0;margin:0}fieldset,legend{padding:0;border:0}legend{display:block;width:100%;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=checkbox]:focus,input[type=file]:focus,input[type=radio]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{padding-top:7px}.form-control,output{display:block;font-size:14px;line-height:1.42857143;color:#555}.form-control{width:100%;height:34px;padding:6px 12px;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);-webkit-transition:border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;-webkit-transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],.input-group-sm input[type=time],input[type=date].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm,input[type=time].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],.input-group-lg input[type=time],input[type=date].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg,input[type=time].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox-inline input[type=checkbox],.checkbox input[type=checkbox],.radio-inline input[type=radio],.radio input[type=radio]{position:absolute;margin-top:4px\\9;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}.checkbox-inline.disabled,.checkbox.disabled label,.radio-inline.disabled,.radio.disabled label,fieldset[disabled] .checkbox-inline,fieldset[disabled] .checkbox label,fieldset[disabled] .radio-inline,fieldset[disabled] .radio label,fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success.checkbox-inline label,.has-success.checkbox label,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.radio-inline label,.has-success.radio label{color:#3c763d}.has-success .form-control{border-color:#3c763d;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning.checkbox-inline label,.has-warning.checkbox label,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.radio-inline label,.has-warning.radio label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error.checkbox-inline label,.has-error.checkbox label,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.radio-inline label,.has-error.radio label{color:#a94442}.has-error .form-control{border-color:#a94442;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);box-shadow:none;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.btn-default:hover,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.dropdown-toggle.btn-default.focus,.open>.dropdown-toggle.btn-default:focus,.open>.dropdown-toggle.btn-default:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary.active,.btn-primary:active,.btn-primary:hover,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success.active,.btn-success:active,.btn-success:hover,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info.active,.btn-info:active,.btn-info:hover,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.btn-warning:hover,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger.active,.btn-danger:active,.btn-danger:hover,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.35s;transition-duration:.35s;-webkit-transition-property:height,visibility;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled = false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio],[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group-addon,.input-group-btn,.input-group .form-control{display:table-cell}.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child),.input-group .form-control:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group .form-control:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle,.input-group .form-control:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{font-size:0;white-space:nowrap}.input-group-btn,.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li,.nav>li>a{position:relative;display:block}.nav>li>a{padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-right:0;padding-left:0}}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px;font-size:18px;line-height:20px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container-fluid .navbar-brand,.navbar>.container .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;margin:8px -15px;border-top:1px solid transparent;border-bottom:1px solid transparent;box-shadow:inset 0 1px 0 hsla(0,0%,100%,.1),0 1px 0 hsla(0,0%,100%,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-nav>li>a,.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>li>a,.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\00a0\"}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;background-color:#eee}.jumbotron,.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container-fluid .jumbotron,.container .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container-fluid .jumbotron,.container .jumbotron{padding-right:60px;padding-left:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;-webkit-transition:border .2s ease-in-out;transition:border .2s ease-in-out}.thumbnail>img,.thumbnail a>img{margin-right:auto;margin-left:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{0%{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{0%{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);-webkit-transition:width .6s ease;transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:-webkit-linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:-webkit-linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:-webkit-linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:-webkit-linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:-webkit-linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent);background-image:linear-gradient(45deg,hsla(0,0%,100%,.15) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.15) 0,hsla(0,0%,100%,.15) 75%,transparent 0,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-heading>.dropdown .dropdown-toggle,.panel-title{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.list-group+.panel-footer,.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table-responsive>.table caption,.panel>.table caption{padding-right:15px;padding-left:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:transparent;border:0}.modal,.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{-webkit-transition:-webkit-transform .3s ease-out;transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translateY(-25%);transform:translateY(-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0);transform:translate(0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px}.tooltip.top-left .tooltip-arrow,.tooltip.top-right .tooltip-arrow{bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{left:5px}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2);line-break:auto}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{content:\"\";border-width:10px}.popover.top>.arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top>.arrow:after{bottom:1px;margin-left:-10px;content:\" \";border-top-color:#fff;border-bottom-width:0}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right>.arrow:after{bottom:-10px;left:1px;content:\" \";border-right-color:#fff;border-left-width:0}.popover.bottom>.arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom>.arrow:after{top:1px;margin-left:-10px;content:\" \";border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{right:1px;bottom:-10px;content:\" \";border-right-width:0;border-left-color:#fff}.carousel,.carousel-inner{position:relative}.carousel-inner{width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;-webkit-transition:left .6s ease-in-out;transition:left .6s ease-in-out}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media (-webkit-transform-3d),all and (transform-3d){.carousel-inner>.item{-webkit-transition:-webkit-transform .6s ease-in-out;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{left:0;-webkit-transform:translateZ(0);transform:translateZ(0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);background-color:transparent;filter:alpha(opacity=50);opacity:.5}.carousel-control.left{background-image:-webkit-linear-gradient(left,rgba(0,0,0,.5),rgba(0,0,0,.0001));background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,.0001)));background-image:linear-gradient(90deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000',endColorstr='#00000000',GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:-webkit-linear-gradient(left,rgba(0,0,0,.0001),rgba(0,0,0,.5));background-image:-webkit-gradient(linear,left top,right top,from(rgba(0,0,0,.0001)),to(rgba(0,0,0,.5)));background-image:linear-gradient(90deg,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#80000000',GradientType=1);background-repeat:repeat-x}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;margin-top:-10px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203a'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000\\9;background-color:transparent;border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:\" \"}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}\n/*# sourceMappingURL=__.css.map */");
//# sourceMappingURL=build.js.map