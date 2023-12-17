import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-novyjj-postamat-статусы'),
  службаДоставки: DS.belongsTo('i-i-s-novyjj-postamat-служба-доставки', { inverse: null, async: false }),
  ячейка: DS.hasMany('i-i-s-novyjj-postamat-ячейка', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-постамат.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-постамат.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-постамат.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-novyjj-postamat-постамат.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-novyjj-postamat-постамат', {
    статус: attr('Статус', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-novyjj-postamat-служба-доставки', 'Служба доставки', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    ячейка: hasMany('i-i-s-novyjj-postamat-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 0 }),
      хранение: belongsTo('i-i-s-novyjj-postamat-хранение', 'Хранение', {
        продления: attr('Продления', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'продления' })
    })
  });

  modelClass.defineProjection('ПостаматL', 'i-i-s-novyjj-postamat-постамат', {
    статус: attr('Статус', { index: 0 }),
    номер: attr('Номер', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-novyjj-postamat-служба-доставки', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
