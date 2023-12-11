import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.dfdfdf-1112.caption'),
          title: i18n.t('forms.application.sitemap.dfdfdf-1112.title'),
          children: [{
            link: 'i-i-s-dfdfdf-1112-организации-l',
            caption: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-организации-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-организации-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-dfdfdf-1112-график-отпуск-l',
            caption: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-график-отпуск-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-график-отпуск-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-dfdfdf-1112-должности-l',
            caption: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-должности-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-dfdfdf-1112-согласие-опд-l',
            caption: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-согласие-опд-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-согласие-опд-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-dfdfdf-1112-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-сотрудники-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-dfdfdf-1112-расчетный-лист-l',
            caption: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-расчетный-лист-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-расчетный-лист-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-dfdfdf-1112-отделы-l',
            caption: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-отделы-l.caption'),
            title: i18n.t('forms.application.sitemap.dfdfdf-1112.i-i-s-dfdfdf-1112-отделы-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})