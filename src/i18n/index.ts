import { createI18n } from 'vue-i18n';
import Deutsch from './de';
import English from './en';

const messages = {
  Deutsch,
  English,
};

const i18n = createI18n({
  locale: 'de',
  legacy: false,
  messages,
});

export { i18n, messages };
