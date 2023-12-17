import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-novyjj-postamat-ключ-l');
  this.route('i-i-s-novyjj-postamat-ключ-e',
  { path: 'i-i-s-novyjj-postamat-ключ-e/:id' });
  this.route('i-i-s-novyjj-postamat-ключ-e.new',
  { path: 'i-i-s-novyjj-postamat-ключ-e/new' });
  this.route('i-i-s-novyjj-postamat-логистика-l');
  this.route('i-i-s-novyjj-postamat-логистика-e',
  { path: 'i-i-s-novyjj-postamat-логистика-e/:id' });
  this.route('i-i-s-novyjj-postamat-логистика-e.new',
  { path: 'i-i-s-novyjj-postamat-логистика-e/new' });
  this.route('i-i-s-novyjj-postamat-пользователь-l');
  this.route('i-i-s-novyjj-postamat-пользователь-e',
  { path: 'i-i-s-novyjj-postamat-пользователь-e/:id' });
  this.route('i-i-s-novyjj-postamat-пользователь-e.new',
  { path: 'i-i-s-novyjj-postamat-пользователь-e/new' });
  this.route('i-i-s-novyjj-postamat-постамат-l');
  this.route('i-i-s-novyjj-postamat-постамат-e',
  { path: 'i-i-s-novyjj-postamat-постамат-e/:id' });
  this.route('i-i-s-novyjj-postamat-постамат-e.new',
  { path: 'i-i-s-novyjj-postamat-постамат-e/new' });
  this.route('i-i-s-novyjj-postamat-служба-доставки-l');
  this.route('i-i-s-novyjj-postamat-служба-доставки-e',
  { path: 'i-i-s-novyjj-postamat-служба-доставки-e/:id' });
  this.route('i-i-s-novyjj-postamat-служба-доставки-e.new',
  { path: 'i-i-s-novyjj-postamat-служба-доставки-e/new' });
  this.route('i-i-s-novyjj-postamat-транзакция-l');
  this.route('i-i-s-novyjj-postamat-транзакция-e',
  { path: 'i-i-s-novyjj-postamat-транзакция-e/:id' });
  this.route('i-i-s-novyjj-postamat-транзакция-e.new',
  { path: 'i-i-s-novyjj-postamat-транзакция-e/new' });
  this.route('i-i-s-novyjj-postamat-хранение-l');
  this.route('i-i-s-novyjj-postamat-хранение-e',
  { path: 'i-i-s-novyjj-postamat-хранение-e/:id' });
  this.route('i-i-s-novyjj-postamat-хранение-e.new',
  { path: 'i-i-s-novyjj-postamat-хранение-e/new' });
});

export default Router;
