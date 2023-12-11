import {
  defineNamespace,
  defineProjections,
  Model as СогласиеОпдMixin
} from '../mixins/regenerated/models/i-i-s-dfdfdf-1112-согласие-опд';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СогласиеОпдMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
