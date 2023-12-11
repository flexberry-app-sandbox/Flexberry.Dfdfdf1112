import {
  defineNamespace,
  defineProjections,
  Model as ГрафикОтпускMixin
} from '../mixins/regenerated/models/i-i-s-dfdfdf-1112-график-отпуск';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафикОтпускMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
