import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISDfdfdf_1112ГрафикОтпускLForm from './forms/i-i-s-dfdfdf-1112-график-отпуск-l';
import IISDfdfdf_1112ДолжностиLForm from './forms/i-i-s-dfdfdf-1112-должности-l';
import IISDfdfdf_1112ОрганизацииLForm from './forms/i-i-s-dfdfdf-1112-организации-l';
import IISDfdfdf_1112ОтделыLForm from './forms/i-i-s-dfdfdf-1112-отделы-l';
import IISDfdfdf_1112РасчетныйЛистLForm from './forms/i-i-s-dfdfdf-1112-расчетный-лист-l';
import IISDfdfdf_1112СогласиеОпдLForm from './forms/i-i-s-dfdfdf-1112-согласие-опд-l';
import IISDfdfdf_1112СотрудникиLForm from './forms/i-i-s-dfdfdf-1112-сотрудники-l';
import IISDfdfdf_1112ГрафикОтпускEForm from './forms/i-i-s-dfdfdf-1112-график-отпуск-e';
import IISDfdfdf_1112ДолжностиEForm from './forms/i-i-s-dfdfdf-1112-должности-e';
import IISDfdfdf_1112ОрганизацииEForm from './forms/i-i-s-dfdfdf-1112-организации-e';
import IISDfdfdf_1112ОтделыEForm from './forms/i-i-s-dfdfdf-1112-отделы-e';
import IISDfdfdf_1112РасчетныйЛистEForm from './forms/i-i-s-dfdfdf-1112-расчетный-лист-e';
import IISDfdfdf_1112СогласиеОпдEForm from './forms/i-i-s-dfdfdf-1112-согласие-опд-e';
import IISDfdfdf_1112СотрудникиEForm from './forms/i-i-s-dfdfdf-1112-сотрудники-e';
import IISDfdfdf_1112ГрафикОтпускModel from './models/i-i-s-dfdfdf-1112-график-отпуск';
import IISDfdfdf_1112ДолжностиModel from './models/i-i-s-dfdfdf-1112-должности';
import IISDfdfdf_1112ОрганизацииModel from './models/i-i-s-dfdfdf-1112-организации';
import IISDfdfdf_1112ОтделыModel from './models/i-i-s-dfdfdf-1112-отделы';
import IISDfdfdf_1112РасчетныйЛистModel from './models/i-i-s-dfdfdf-1112-расчетный-лист';
import IISDfdfdf_1112СогласиеОпдModel from './models/i-i-s-dfdfdf-1112-согласие-опд';
import IISDfdfdf_1112СотрудникиModel from './models/i-i-s-dfdfdf-1112-сотрудники';
import IISDfdfdf_1112ТчModel from './models/i-i-s-dfdfdf-1112-тч';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-dfdfdf-1112-график-отпуск': IISDfdfdf_1112ГрафикОтпускModel,
    'i-i-s-dfdfdf-1112-должности': IISDfdfdf_1112ДолжностиModel,
    'i-i-s-dfdfdf-1112-организации': IISDfdfdf_1112ОрганизацииModel,
    'i-i-s-dfdfdf-1112-отделы': IISDfdfdf_1112ОтделыModel,
    'i-i-s-dfdfdf-1112-расчетный-лист': IISDfdfdf_1112РасчетныйЛистModel,
    'i-i-s-dfdfdf-1112-согласие-опд': IISDfdfdf_1112СогласиеОпдModel,
    'i-i-s-dfdfdf-1112-сотрудники': IISDfdfdf_1112СотрудникиModel,
    'i-i-s-dfdfdf-1112-тч': IISDfdfdf_1112ТчModel
  },

  'application-name': 'Dfdfdf_1112',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Dfdfdf_1112',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Dfdfdf_1112',
          title: 'Dfdfdf_1112'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'dfdfdf-1112': {
          caption: 'Dfdfdf_1112',
          title: 'Dfdfdf_1112',
          'i-i-s-dfdfdf-1112-организации-l': {
            caption: 'Организации',
            title: ''
          },
          'i-i-s-dfdfdf-1112-график-отпуск-l': {
            caption: 'График отпуск',
            title: ''
          },
          'i-i-s-dfdfdf-1112-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-dfdfdf-1112-согласие-опд-l': {
            caption: 'Согласие опд',
            title: ''
          },
          'i-i-s-dfdfdf-1112-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-dfdfdf-1112-расчетный-лист-l': {
            caption: 'Расчетный лист',
            title: ''
          },
          'i-i-s-dfdfdf-1112-отделы-l': {
            caption: 'Отделы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-dfdfdf-1112-график-отпуск-l': IISDfdfdf_1112ГрафикОтпускLForm,
    'i-i-s-dfdfdf-1112-должности-l': IISDfdfdf_1112ДолжностиLForm,
    'i-i-s-dfdfdf-1112-организации-l': IISDfdfdf_1112ОрганизацииLForm,
    'i-i-s-dfdfdf-1112-отделы-l': IISDfdfdf_1112ОтделыLForm,
    'i-i-s-dfdfdf-1112-расчетный-лист-l': IISDfdfdf_1112РасчетныйЛистLForm,
    'i-i-s-dfdfdf-1112-согласие-опд-l': IISDfdfdf_1112СогласиеОпдLForm,
    'i-i-s-dfdfdf-1112-сотрудники-l': IISDfdfdf_1112СотрудникиLForm,
    'i-i-s-dfdfdf-1112-график-отпуск-e': IISDfdfdf_1112ГрафикОтпускEForm,
    'i-i-s-dfdfdf-1112-должности-e': IISDfdfdf_1112ДолжностиEForm,
    'i-i-s-dfdfdf-1112-организации-e': IISDfdfdf_1112ОрганизацииEForm,
    'i-i-s-dfdfdf-1112-отделы-e': IISDfdfdf_1112ОтделыEForm,
    'i-i-s-dfdfdf-1112-расчетный-лист-e': IISDfdfdf_1112РасчетныйЛистEForm,
    'i-i-s-dfdfdf-1112-согласие-опд-e': IISDfdfdf_1112СогласиеОпдEForm,
    'i-i-s-dfdfdf-1112-сотрудники-e': IISDfdfdf_1112СотрудникиEForm
  },

});

export default translations;
