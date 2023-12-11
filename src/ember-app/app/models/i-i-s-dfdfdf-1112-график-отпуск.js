import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГрафикОтпускMixin
} from '../mixins/regenerated/models/i-i-s-dfdfdf-1112-график-отпуск';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГрафикОтпускMixin, Validations, {
});

defineProjections(Model);

export default Model;
