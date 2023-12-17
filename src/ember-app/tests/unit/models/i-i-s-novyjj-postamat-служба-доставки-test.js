import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-novyjj-postamat-служба-доставки', 'Unit | Model | i-i-s-novyjj-postamat-служба-доставки', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
