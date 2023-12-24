<script setup lang="ts">
import { useI18n } from './hooks/useI18n';

	const {t, locale} = useI18n();

	function changeLocale() {
		const currentLocale = locale.value;
		locale.value = currentLocale === 'de' ? 'en' : 'de';
	}
</script>

<template>
  <div>{{ t('helloWorld.hello') }}</div>

  <button @click="changeLocale">change locale</button>
</template>