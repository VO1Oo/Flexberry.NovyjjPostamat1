import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-novyjj-postamat-хранение-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-novyjj-postamat-посылка+логистика':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'информация',
            required: true,
            relationName: 'логистика',
            projection: 'ЛогистикаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-novyjj-postamat-посылка+транзакция':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'время',
            required: true,
            relationName: 'транзакция',
            projection: 'ТранзакцияL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-novyjj-postamat-посылка+ключ':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: '',
            required: true,
            relationName: 'ключ',
            projection: 'КлючL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
