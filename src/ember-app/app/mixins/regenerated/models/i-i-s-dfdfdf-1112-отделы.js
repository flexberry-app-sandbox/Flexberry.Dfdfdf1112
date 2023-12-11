import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодОт: DS.attr('number'),
  наименование: DS.attr('string')
});

export let ValidationRules = {
  кодОт: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-отделы.validations.кодОт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-отделы.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтделыE', 'i-i-s-dfdfdf-1112-отделы', {
    кодОт: attr('Код от', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('ОтделыL', 'i-i-s-dfdfdf-1112-отделы', {
    кодОт: attr('Код от', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
