import { test } from 'qunit';
import moduleForAcceptance from 'htmlbars/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | just test');

test('visiting /just-test', function(assert) {
  visit('/just-test');

  andThen(function() {
    assert.equal(currentURL(), '/just-test');
  });
});
