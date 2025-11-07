import { ref } from 'vue';

// Estado global reactivo compartido entre todos los componentes
const isDarkMode = ref(false);
const isInitialized = ref(false);

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    console.log('Toggle dark mode:', isDarkMode.value);
    updateTheme();
  };

  const updateTheme = () => {
    console.log('Updating theme, isDarkMode:', isDarkMode.value);

    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Applied dark mode, classes:', document.documentElement.classList.toString());
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Applied light mode, classes:', document.documentElement.classList.toString());
    }
  };

  const initTheme = () => {
    // Solo inicializar una vez
    if (isInitialized.value) {
      console.log('Theme already initialized');
      return;
    }

    console.log('Initializing theme...');

    // Verificar preferencia guardada o del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    console.log('Saved theme:', savedTheme);
    console.log('System prefers dark:', prefersDark);

    isDarkMode.value = savedTheme === 'dark' || (!savedTheme && prefersDark);
    console.log('Setting isDarkMode to:', isDarkMode.value);

    updateTheme();
    isInitialized.value = true;
    console.log('Theme initialized successfully');
  };

  return {
    isDarkMode,
    toggleDarkMode,
    initTheme
  };
}

