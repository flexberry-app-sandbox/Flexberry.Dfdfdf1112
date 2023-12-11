import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СогласиеОпдMixin
} from '../mixins/regenerated/models/i-i-s-dfdfdf-1112-согласие-опд';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СогласиеОпдMixin, Validations, {
});

defineProjections(Model);

export default Model;
