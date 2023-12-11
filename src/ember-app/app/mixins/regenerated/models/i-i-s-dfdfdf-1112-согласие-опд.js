import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номер: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-dfdfdf-1112-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-согласие-опд.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-согласие-опд.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-согласие-опд.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СогласиеОпдE', 'i-i-s-dfdfdf-1112-согласие-опд', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dfdfdf-1112-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('СогласиеОпдL', 'i-i-s-dfdfdf-1112-согласие-опд', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    сотрудники: belongsTo('i-i-s-dfdfdf-1112-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
