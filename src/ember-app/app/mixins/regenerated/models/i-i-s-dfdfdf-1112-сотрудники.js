import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  имя: DS.attr('string'),
  номерПасп: DS.attr('string'),
  отчество: DS.attr('string'),
  серияПас: DS.attr('string'),
  фамилия: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-dfdfdf-1112-должности', { inverse: null, async: false }),
  организации: DS.belongsTo('i-i-s-dfdfdf-1112-организации', { inverse: null, async: false }),
  отделы: DS.belongsTo('i-i-s-dfdfdf-1112-отделы', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПасп: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.номерПасп.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПас: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.серияПас.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организации: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.организации.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-dfdfdf-1112-сотрудники.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-dfdfdf-1112-сотрудники', {
    iD: attr('ID', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    серияПас: attr('Серия пас', { index: 4 }),
    номерПасп: attr('Номер пасп', { index: 5 }),
    отделы: belongsTo('i-i-s-dfdfdf-1112-отделы', 'Отделы', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    должности: belongsTo('i-i-s-dfdfdf-1112-должности', 'Должности', {
      наименование: attr('Наименование', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'наименование' }),
    организации: belongsTo('i-i-s-dfdfdf-1112-организации', 'Организации', {
      наименование: attr('Наименование', { index: 11, hidden: true })
    }, { index: 10, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-dfdfdf-1112-сотрудники', {
    iD: attr('ID', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    серияПас: attr('Серия пас', { index: 4 }),
    номерПасп: attr('Номер пасп', { index: 5 }),
    отделы: belongsTo('i-i-s-dfdfdf-1112-отделы', 'Наименование', {
      наименование: attr('Наименование', { index: 6 })
    }, { index: -1, hidden: true }),
    должности: belongsTo('i-i-s-dfdfdf-1112-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 7 })
    }, { index: -1, hidden: true }),
    организации: belongsTo('i-i-s-dfdfdf-1112-организации', 'Наименование', {
      наименование: attr('Наименование', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
