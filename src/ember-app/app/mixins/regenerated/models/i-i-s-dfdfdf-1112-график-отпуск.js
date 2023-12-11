import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаНач: DS.attr('date'),
  колДней: DS.attr('number'),
  номерДок: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-dfdfdf-1112-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-график-отпуск.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаНач: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-график-отпуск.validations.датаНач.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  колДней: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-график-отпуск.validations.колДней.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-график-отпуск.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-график-отпуск.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикОтпускE', 'i-i-s-dfdfdf-1112-график-отпуск', {
    номерДок: attr('Номер док', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    датаНач: attr('Дата нач', { index: 2 }),
    колДней: attr('Кол дней', { index: 3 }),
    сотрудники: belongsTo('i-i-s-dfdfdf-1112-сотрудники', 'Сотрудники', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ГрафикОтпускL', 'i-i-s-dfdfdf-1112-график-отпуск', {
    номерДок: attr('Номер док', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    датаНач: attr('Дата нач', { index: 2 }),
    колДней: attr('Кол дней', { index: 3 }),
    сотрудники: belongsTo('i-i-s-dfdfdf-1112-сотрудники', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
