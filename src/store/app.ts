import { writable } from 'svelte/store';

type Theme = 'light' | 'dark' | 'unset'
export const isDarkMode = writable<Theme>('unset');
