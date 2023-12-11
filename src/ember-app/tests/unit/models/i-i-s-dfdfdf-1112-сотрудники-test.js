import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dfdfdf-1112-сотрудники', 'Unit | Model | i-i-s-dfdfdf-1112-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-dfdfdf-1112-график-отпуск',
    'model:i-i-s-dfdfdf-1112-должности',
    'model:i-i-s-dfdfdf-1112-организации',
    'model:i-i-s-dfdfdf-1112-отделы',
    'model:i-i-s-dfdfdf-1112-расчетный-лист',
    'model:i-i-s-dfdfdf-1112-согласие-опд',
    'model:i-i-s-dfdfdf-1112-сотрудники',
    'model:i-i-s-dfdfdf-1112-тч',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
