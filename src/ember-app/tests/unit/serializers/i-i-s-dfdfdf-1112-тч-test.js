import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-dfdfdf-1112-тч', 'Unit | Serializer | i-i-s-dfdfdf-1112-тч', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-dfdfdf-1112-тч',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-dfdfdf-1112-тип',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
