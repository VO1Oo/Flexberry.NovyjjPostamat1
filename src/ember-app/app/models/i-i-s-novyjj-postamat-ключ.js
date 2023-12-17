import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлючMixin
} from '../mixins/regenerated/models/i-i-s-novyjj-postamat-ключ';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлючMixin, Validations, {
});

defineProjections(Model);

export default Model;
