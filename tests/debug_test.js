test('all', function () {
  expect(4);
  window.$debug.init('*');
  ok(window.$debug('foo').enabled === true);
  ok(window.$debug('bar').enabled === true);
  ok(window.$debug('baz').enabled === true);
  ok(window.$debug('qux').enabled === true);
});
test('none', function () {
  expect(4);
  window.$debug.init('-');
  ok(window.$debug('foo').enabled === false);
  ok(window.$debug('bar').enabled === false);
  ok(window.$debug('baz').enabled === false);
  ok(window.$debug('qux').enabled === false);
});
test('none is default', function () {
  expect(4);
  window.$debug.init();
  ok(window.$debug('foo').enabled === false);
  ok(window.$debug('bar').enabled === false);
  ok(window.$debug('baz').enabled === false);
  ok(window.$debug('qux').enabled === false);
});
test('custom', function () {
  expect(4);
  window.$debug.init('foo,bar,-baz,-qux');
  ok(window.$debug('foo').enabled === true);
  ok(window.$debug('bar').enabled === true);
  ok(window.$debug('baz').enabled === false);
  ok(window.$debug('qux').enabled === false);
});
