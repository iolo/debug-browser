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
  var debug = $debug('debug');
  var DEBUG = debug.enabled;
  ...
  DEBUG && debug('hello, world!');

  ...
  var foo = $debug('foo');
  foo('hello, foo!');

  ...
  var bar = $debug('bar');
  foo('hello, bar!');
  ```

4. checkout your web inspector

  it looks like [this](http://toybox.iolo.kr/img/debug-browser.png)(big screenshot).

configurations
--------------

set global variable `DEBUG`

  * to enable all tags(default):

  ```js
  window.DEBUG = '*';
  //DEBUG = '*';
  ```

  * to disable all tags:

  ```js
  window.DEBUG = '';
  //DEBUG = '';
  ```

---
that's all folks!

may the **SOURCE** be with you...
