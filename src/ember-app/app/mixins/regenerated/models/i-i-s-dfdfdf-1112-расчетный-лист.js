import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерЛиста: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-dfdfdf-1112-сотрудники', { inverse: null, async: false }),
  тч: DS.hasMany('i-i-s-dfdfdf-1112-тч', { inverse: 'расчетныйЛист', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-расчетный-лист.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерЛиста: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-расчетный-лист.validations.номерЛиста.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-расчетный-лист.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тч: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-расчетный-лист.validations.тч.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетныйЛистE', 'i-i-s-dfdfdf-1112-расчетный-лист', {
    номерЛиста: attr('Номер листа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dfdfdf-1112-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' }),
    тч: hasMany('i-i-s-dfdfdf-1112-тч', 'Тч', {
      тип: attr('Тип', { index: 0 }),
      наименование: attr('Наименование', { index: 1 }),
      ндфл: attr('Ндфл', { index: 2 }),
      взносы: attr('Взносы', { index: 3 }),
      сумма: attr('Сумма', { index: 4 })
    })
  });

  modelClass.defineProjection('РасчетныйЛистL', 'i-i-s-dfdfdf-1112-расчетный-лист', {
    номерЛиста: attr('Номер листа', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dfdfdf-1112-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
