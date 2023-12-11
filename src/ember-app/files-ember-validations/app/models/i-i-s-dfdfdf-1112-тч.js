import {
  defineNamespace,
  defineProjections,
  Model as ТчMixin
} from '../mixins/regenerated/models/i-i-s-dfdfdf-1112-тч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
