(function (window, console) {
  'use strict';

  var debugColors = [ // standard 16 colors
    'white', 'silver', 'yellow', 'lime', 'aqua', 'fuchsia', 'red', 'blue',
    'gray', 'olive', 'green', 'teal', 'navy', 'purple', 'maroon', 'black'
  ];
  var lastDebugColor = 0;

  var debugEnabled = [];
  var debugDisabled = [];

  var debugInitialized = false;

  function init() {
    (window.DEBUG || '*').split(/[\s,]+/).forEach(function (tag) {
      tag = tag.replace('*', '.*?');
      if (tag[0] === '-') {
        debugDisabled.push(new RegExp('^' + tag.substr(1) + '$'));
      } else {
        debugEnabled.push(new RegExp('^' + tag + '$'));
      }
    });
    debugInitialized = true;
  }

  function disabledLogger() {
    var disabled = function () {
    };
    disabled.enabled = false;
    return disabled;
  }

  function plainLogger(tag) {
    var label = '[' + tag + ']';
    var plain = function () {
      var args = Array.prototype.slice.call(arguments);
      args.unshift(label);
      console.log.apply(console, args);
    };
    plain.enabled = true;
    return plain;
  }

  function coloredLogger(tag) {
    var label = '%c[' + tag + ']';
    var color = 'color:' + debugColors[lastDebugColor] + ';background:' + debugColors[debugColors.length - lastDebugColor - 1] + ';';
    lastDebugColor = (lastDebugColor + 1) % debugColors.length;

    var colored = function () {
      var args = Array.prototype.slice.call(arguments);
      args.splice(0, 0, label, color);
      console.log.apply(console, args);
    };
    colored.enabled = true;
    return colored;
  }

  function debug(tag) {
    if (!debugInitialized) {
      init();
    }

    if (debugDisabled.some(function (re) {
      return re.test(tag);
    })) {
      return disabledLogger();
    }

    if (!debugEnabled.some(function (re) {
      return re.test(tag);
    })) {
      return disabledLogger();
    }

    // colored log is chrome only!
    if (!window.chrome) {
      return plainLogger(tag);
    }

    return coloredLogger(tag);
  }

  // exports as '$debug'
  window.$debug = debug;

}(window, console));