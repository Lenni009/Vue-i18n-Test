import { createI18n } from 'vue-i18n';
import Deutsch from './de';
import English from './en';

const messages = {
	Deutsch,
	English,
};

const userLang = navigator.language.replace('de', 'Deutsch').replace('en', 'English');
const localStorageLang = localStorage.getItem('lang');
export const preferredLang = localStorageLang ?? (Object.keys(messages).includes(userLang) ? userLang : 'English');

const i18n = createI18n({
	locale: preferredLang,
	legacy: false,
	messages,
});

export { i18n, messages };
