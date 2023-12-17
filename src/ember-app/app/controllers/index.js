import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.novyjj-postamat.caption'),
          title: i18n.t('forms.application.sitemap.novyjj-postamat.title'),
          children: [{
            link: 'i-i-s-novyjj-postamat-транзакция-l',
            caption: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-транзакция-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-транзакция-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-novyjj-postamat-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-служба-доставки-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-novyjj-postamat-логистика-l',
            caption: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-логистика-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-novyjj-postamat-пользователь-l',
            caption: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-пользователь-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-novyjj-postamat-постамат-l',
            caption: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-постамат-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-novyjj-postamat-хранение-l',
            caption: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-хранение-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-novyjj-postamat-ключ-l',
            caption: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.novyjj-postamat.i-i-s-novyjj-postamat-ключ-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})