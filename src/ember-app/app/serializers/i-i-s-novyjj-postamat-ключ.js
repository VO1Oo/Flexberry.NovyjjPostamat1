import { Serializer as КлючSerializer } from
  '../mixins/regenerated/serializers/i-i-s-novyjj-postamat-ключ';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлючSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
