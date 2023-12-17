import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj-postamat-логистика', 'Unit | Serializer | i-i-s-novyjj-postamat-логистика', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-novyjj-postamat-логистика',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-novyjj-postamat-оплата',
    'transform:i-i-s-novyjj-postamat-состояние',
    'transform:i-i-s-novyjj-postamat-статус',
    'transform:i-i-s-novyjj-postamat-статусы',

    'model:i-i-s-novyjj-postamat-ключ',
    'model:i-i-s-novyjj-postamat-логистика',
    'model:i-i-s-novyjj-postamat-пользователь',
    'model:i-i-s-novyjj-postamat-постамат',
    'model:i-i-s-novyjj-postamat-посылка',
    'model:i-i-s-novyjj-postamat-служба-доставки',
    'model:i-i-s-novyjj-postamat-транзакция',
    'model:i-i-s-novyjj-postamat-хранение',
    'model:i-i-s-novyjj-postamat-ячейка',
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
