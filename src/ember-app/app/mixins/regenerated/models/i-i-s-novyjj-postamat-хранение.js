import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗавершения: DS.attr('date'),
  датаНачала: DS.attr('date'),
  номер: DS.attr('number'),
  продления: DS.attr('string', { defaultValue: 'Не продлен' }),
  посылка: DS.hasMany('i-i-s-novyjj-postamat-посылка', { inverse: 'хранение', async: false })
});

export let ValidationRules = {
  датаЗавершения: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-хранение.validations.датаЗавершения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-хранение.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-хранение.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  продления: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-хранение.validations.продления.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-хранение.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ХранениеE', 'i-i-s-novyjj-postamat-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 }),
    посылка: hasMany('i-i-s-novyjj-postamat-посылка', 'Посылка', {
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
    })
  });

  modelClass.defineProjection('ХранениеL', 'i-i-s-novyjj-postamat-хранение', {
    номер: attr('Номер', { index: 0 }),
    датаНачала: attr('Дата начала', { index: 1 }),
    датаЗавершения: attr('Дата завершения', { index: 2 }),
    продления: attr('Продления', { index: 3 })
  });
};
