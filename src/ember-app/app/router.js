import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-dfdfdf-1112-график-отпуск-l');
  this.route('i-i-s-dfdfdf-1112-график-отпуск-e',
  { path: 'i-i-s-dfdfdf-1112-график-отпуск-e/:id' });
  this.route('i-i-s-dfdfdf-1112-график-отпуск-e.new',
  { path: 'i-i-s-dfdfdf-1112-график-отпуск-e/new' });
  this.route('i-i-s-dfdfdf-1112-должности-l');
  this.route('i-i-s-dfdfdf-1112-должности-e',
  { path: 'i-i-s-dfdfdf-1112-должности-e/:id' });
  this.route('i-i-s-dfdfdf-1112-должности-e.new',
  { path: 'i-i-s-dfdfdf-1112-должности-e/new' });
  this.route('i-i-s-dfdfdf-1112-организации-l');
  this.route('i-i-s-dfdfdf-1112-организации-e',
  { path: 'i-i-s-dfdfdf-1112-организации-e/:id' });
  this.route('i-i-s-dfdfdf-1112-организации-e.new',
  { path: 'i-i-s-dfdfdf-1112-организации-e/new' });
  this.route('i-i-s-dfdfdf-1112-отделы-l');
  this.route('i-i-s-dfdfdf-1112-отделы-e',
  { path: 'i-i-s-dfdfdf-1112-отделы-e/:id' });
  this.route('i-i-s-dfdfdf-1112-отделы-e.new',
  { path: 'i-i-s-dfdfdf-1112-отделы-e/new' });
  this.route('i-i-s-dfdfdf-1112-расчетный-лист-l');
  this.route('i-i-s-dfdfdf-1112-расчетный-лист-e',
  { path: 'i-i-s-dfdfdf-1112-расчетный-лист-e/:id' });
  this.route('i-i-s-dfdfdf-1112-расчетный-лист-e.new',
  { path: 'i-i-s-dfdfdf-1112-расчетный-лист-e/new' });
  this.route('i-i-s-dfdfdf-1112-согласие-опд-l');
  this.route('i-i-s-dfdfdf-1112-согласие-опд-e',
  { path: 'i-i-s-dfdfdf-1112-согласие-опд-e/:id' });
  this.route('i-i-s-dfdfdf-1112-согласие-опд-e.new',
  { path: 'i-i-s-dfdfdf-1112-согласие-опд-e/new' });
  this.route('i-i-s-dfdfdf-1112-сотрудники-l');
  this.route('i-i-s-dfdfdf-1112-сотрудники-e',
  { path: 'i-i-s-dfdfdf-1112-сотрудники-e/:id' });
  this.route('i-i-s-dfdfdf-1112-сотрудники-e.new',
  { path: 'i-i-s-dfdfdf-1112-сотрудники-e/new' });
});

export default Router;
