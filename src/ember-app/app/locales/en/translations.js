import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNovyjj_postamatКлючLForm from './forms/i-i-s-novyjj-postamat-ключ-l';
import IISNovyjj_postamatЛогистикаLForm from './forms/i-i-s-novyjj-postamat-логистика-l';
import IISNovyjj_postamatПользовательLForm from './forms/i-i-s-novyjj-postamat-пользователь-l';
import IISNovyjj_postamatПостаматLForm from './forms/i-i-s-novyjj-postamat-постамат-l';
import IISNovyjj_postamatСлужбаДоставкиLForm from './forms/i-i-s-novyjj-postamat-служба-доставки-l';
import IISNovyjj_postamatТранзакцияLForm from './forms/i-i-s-novyjj-postamat-транзакция-l';
import IISNovyjj_postamatХранениеLForm from './forms/i-i-s-novyjj-postamat-хранение-l';
import IISNovyjj_postamatКлючEForm from './forms/i-i-s-novyjj-postamat-ключ-e';
import IISNovyjj_postamatЛогистикаEForm from './forms/i-i-s-novyjj-postamat-логистика-e';
import IISNovyjj_postamatПользовательEForm from './forms/i-i-s-novyjj-postamat-пользователь-e';
import IISNovyjj_postamatПостаматEForm from './forms/i-i-s-novyjj-postamat-постамат-e';
import IISNovyjj_postamatСлужбаДоставкиEForm from './forms/i-i-s-novyjj-postamat-служба-доставки-e';
import IISNovyjj_postamatТранзакцияEForm from './forms/i-i-s-novyjj-postamat-транзакция-e';
import IISNovyjj_postamatХранениеEForm from './forms/i-i-s-novyjj-postamat-хранение-e';
import IISNovyjj_postamatКлючModel from './models/i-i-s-novyjj-postamat-ключ';
import IISNovyjj_postamatЛогистикаModel from './models/i-i-s-novyjj-postamat-логистика';
import IISNovyjj_postamatПользовательModel from './models/i-i-s-novyjj-postamat-пользователь';
import IISNovyjj_postamatПостаматModel from './models/i-i-s-novyjj-postamat-постамат';
import IISNovyjj_postamatПосылкаModel from './models/i-i-s-novyjj-postamat-посылка';
import IISNovyjj_postamatСлужбаДоставкиModel from './models/i-i-s-novyjj-postamat-служба-доставки';
import IISNovyjj_postamatТранзакцияModel from './models/i-i-s-novyjj-postamat-транзакция';
import IISNovyjj_postamatХранениеModel from './models/i-i-s-novyjj-postamat-хранение';
import IISNovyjj_postamatЯчейкаModel from './models/i-i-s-novyjj-postamat-ячейка';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-novyjj-postamat-ключ': IISNovyjj_postamatКлючModel,
    'i-i-s-novyjj-postamat-логистика': IISNovyjj_postamatЛогистикаModel,
    'i-i-s-novyjj-postamat-пользователь': IISNovyjj_postamatПользовательModel,
    'i-i-s-novyjj-postamat-постамат': IISNovyjj_postamatПостаматModel,
    'i-i-s-novyjj-postamat-посылка': IISNovyjj_postamatПосылкаModel,
    'i-i-s-novyjj-postamat-служба-доставки': IISNovyjj_postamatСлужбаДоставкиModel,
    'i-i-s-novyjj-postamat-транзакция': IISNovyjj_postamatТранзакцияModel,
    'i-i-s-novyjj-postamat-хранение': IISNovyjj_postamatХранениеModel,
    'i-i-s-novyjj-postamat-ячейка': IISNovyjj_postamatЯчейкаModel
  },

  'application-name': 'Novyjj_postamat',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Novyjj_postamat',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Novyjj_postamat',
          title: 'Novyjj_postamat'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'novyjj-postamat': {
          caption: 'Novyjj_postamat',
          title: 'Novyjj_postamat',
          'i-i-s-novyjj-postamat-транзакция-l': {
            caption: 'Транзакция',
            title: ''
          },
          'i-i-s-novyjj-postamat-служба-доставки-l': {
            caption: 'Служба доставки',
            title: ''
          },
          'i-i-s-novyjj-postamat-логистика-l': {
            caption: 'Логистика',
            title: ''
          },
          'i-i-s-novyjj-postamat-пользователь-l': {
            caption: 'Пользователь',
            title: ''
          },
          'i-i-s-novyjj-postamat-постамат-l': {
            caption: 'Постамат',
            title: ''
          },
          'i-i-s-novyjj-postamat-хранение-l': {
            caption: 'Хранение',
            title: ''
          },
          'i-i-s-novyjj-postamat-ключ-l': {
            caption: 'Ключ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-novyjj-postamat-ключ-l': IISNovyjj_postamatКлючLForm,
    'i-i-s-novyjj-postamat-логистика-l': IISNovyjj_postamatЛогистикаLForm,
    'i-i-s-novyjj-postamat-пользователь-l': IISNovyjj_postamatПользовательLForm,
    'i-i-s-novyjj-postamat-постамат-l': IISNovyjj_postamatПостаматLForm,
    'i-i-s-novyjj-postamat-служба-доставки-l': IISNovyjj_postamatСлужбаДоставкиLForm,
    'i-i-s-novyjj-postamat-транзакция-l': IISNovyjj_postamatТранзакцияLForm,
    'i-i-s-novyjj-postamat-хранение-l': IISNovyjj_postamatХранениеLForm,
    'i-i-s-novyjj-postamat-ключ-e': IISNovyjj_postamatКлючEForm,
    'i-i-s-novyjj-postamat-логистика-e': IISNovyjj_postamatЛогистикаEForm,
    'i-i-s-novyjj-postamat-пользователь-e': IISNovyjj_postamatПользовательEForm,
    'i-i-s-novyjj-postamat-постамат-e': IISNovyjj_postamatПостаматEForm,
    'i-i-s-novyjj-postamat-служба-доставки-e': IISNovyjj_postamatСлужбаДоставкиEForm,
    'i-i-s-novyjj-postamat-транзакция-e': IISNovyjj_postamatТранзакцияEForm,
    'i-i-s-novyjj-postamat-хранение-e': IISNovyjj_postamatХранениеEForm
  },

});

export default translations;
