import { createI18n } from 'vue-i18n';
import Deutsch from './de';
import English from './en';

const messages = {
	Deutsch,
	English,
};

const preferredLang = navigator.language.replace('de', 'Deutsch').replace('en', 'English');
export const localStorageLang = localStorage.getItem('lang') ?? Object.keys(messages).includes(preferredLang) ? preferredLang : 'English';

const i18n = createI18n({
	locale: localStorageLang,
	legacy: false,
	messages,
});

export { i18n, messages };
