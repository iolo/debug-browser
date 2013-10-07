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
  <script src="debug_browser.js"></script>
  ```

3. debug log with debug!

  ```js
  var debug = $debug('foo');
  var DEBUG = debug.enabled;
  ...
  DEBUG && debug('hello, world!');

  var foo = $debug('foo');
  foo('hello, foo!');

  var bar = $debug('bar');
  foo('hello, bar!');
  ```

  to enable all tags:
  ```js
  window.DEBUG = '*';
  //DEBUG = '*';
  ```js

  to disable all tags:
  ```
  window.DEBUG = '';
  //DEBUG = '';
  ```

4. checkout your web inspector

  it looks like [this](http://toybox.iolo.kr/img/debug-browser.png)(big screenshot)

---
that's all folks!

may the **SOURCE** be with you...
