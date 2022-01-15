import { writable } from 'svelte/store';

// Default theme for the application
const theme = writable('system');

export { theme };

