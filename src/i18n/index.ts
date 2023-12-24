import { createI18n } from 'vue-i18n';
import de from './de';
import en from './en';

const messages = {
  de,
  en,
};

const i18n = createI18n({
  locale: 'de',
  legacy: false,
  messages,
});

export { i18n, messages };
