import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  взносы: DS.attr('decimal'),
  наименование: DS.attr('string'),
  ндфл: DS.attr('decimal'),
  сумма: DS.attr('decimal'),
  тип: DS.attr('i-i-s-dfdfdf-1112-тип'),
  расчетныйЛист: DS.belongsTo('i-i-s-dfdfdf-1112-расчетный-лист', { inverse: 'тч', async: false })
});

export let ValidationRules = {
  взносы: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-тч.validations.взносы.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-тч.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ндфл: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-тч.validations.ндфл.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-тч.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-тч.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  расчетныйЛист: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-тч.validations.расчетныйЛист.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТчE', 'i-i-s-dfdfdf-1112-тч', {
    тип: attr('Тип', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    ндфл: attr('Ндфл', { index: 2 }),
    взносы: attr('Взносы', { index: 3 }),
    сумма: attr('Сумма', { index: 4 })
  });
};
