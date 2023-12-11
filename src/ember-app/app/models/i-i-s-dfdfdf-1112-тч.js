import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТчMixin
} from '../mixins/regenerated/models/i-i-s-dfdfdf-1112-тч';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТчMixin, Validations, {
});

defineProjections(Model);

export default Model;
