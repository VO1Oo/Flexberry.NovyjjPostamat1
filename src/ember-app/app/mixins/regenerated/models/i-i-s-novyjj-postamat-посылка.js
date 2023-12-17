import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-novyjj-postamat-статус'),
  ключ: DS.belongsTo('i-i-s-novyjj-postamat-ключ', { inverse: null, async: false }),
  логистика: DS.belongsTo('i-i-s-novyjj-postamat-логистика', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-novyjj-postamat-транзакция', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-novyjj-postamat-хранение', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-посылка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ключ: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-посылка.validations.ключ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-посылка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-novyjj-postamat-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    логистика: belongsTo('i-i-s-novyjj-postamat-логистика', 'Логистика', {
      информация: attr('Информация', { index: 3, hidden: true }),
      состояние: attr('Состояние посылки', { index: 9 })
    }, { index: 2, displayMemberPath: 'информация' }),
    транзакция: belongsTo('i-i-s-novyjj-postamat-транзакция', 'Транзакция', {
      время: attr('Время', { index: 5, hidden: true }),
      дата: attr('Дата', { index: 6 }),
      пользователь: belongsTo('i-i-s-novyjj-postamat-пользователь', '', {
        фИО: attr('ФИО', { index: 7 })
      }, { index: -1, hidden: true }),
      номер: attr('Номер транзакции', { index: 8 })
    }, { index: 4, displayMemberPath: 'время' }),
    ключ: belongsTo('i-i-s-novyjj-postamat-ключ', 'Сгенерировать ключ', {
      сгенКлюч: attr('Сгенерировать ключ', { index: 10, hidden: true })
    }, { index: 11, hidden: true })
  });
};
