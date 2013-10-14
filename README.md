debug-browser
=============

[tjholowaychuk's debug](https://github.com/visionmedia/debug) clone for browser environment.

getting started
---------------

1. get source from github:

  ```
  git clone git@github.com:iolo/debug-browser.git
  ```

  or install with bower:

  ```
  bower install debug-browser
  ```

2. load script in your html pages:

  ```html
  <script src="debug.js"></script>
  ```

  or

  ```html
  <script src="debug.min.js"></script>
  ```

3. get a logger and emit log with debug!

  ```js
  var debug = $debug('debug');
  debug('hello, world!');
  ...
  var DEBUG = debug.enabled;
  DEBUG && debug('hello, world!');

  ...
  var foo = $debug('foo');
  foo('hello, foo!');
  ...
  var FOO = foo.enabled;
  FOO && foo('hello, foo!');

  ...
  var bar = $debug('bar');
  bar('hello, bar!');
  ...
  var BAR = bar.enabled;
  BAR && bar('hello, bar!');
  ```

4. checkout your web inspector

  it looks like [this](http://toybox.iolo.kr/img/debug-browser.png)(big screenshot).

configurations
--------------

* set global variable `DEBUG` *before* `debug.js` is loaded:

  ```html
  <script>window.DEBUG='*'</script>
  <script src="debug.js"></script>
  ```

  or set `data-debug` attribute on `html` tag(since 0.0.2):

  ```html
  <html data-debug="*">
  ...
  <script src="debug.js"></script>
  </html>
  ```

  or init manually *after* `debug.js` is loaded(since 0.0.2):

  ```html
  <script src="debug.js"></script>
  <script>
  window.$debug.init('*');
  </script>
  ```

* see tjholowaychuk's document on [conventions](https://github.com/visionmedia/debug#conventions)
  and [wildcards](https://github.com/visionmedia/debug#wildcards)

---
that's all folks!

may the **SOURCE** be with you...
