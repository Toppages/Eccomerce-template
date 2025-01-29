import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

// Definir tipo explícito para colorScheme
type ColorSchemeType = 'light' | 'dark';

function Root() {
  // Garantizar que el tipo de colorScheme sea el correcto
  const [colorScheme, setColorScheme] = useLocalStorage<ColorSchemeType>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
  });

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          colors: {
            dark: [
              'white', '#acaebf', '#8c8fa3', '#666980', '#4d4f66',
              '#34354a', '#0A0A0A', '#151515', '#0c0d21', '#01010a',
            ],
            light: [
              '#f0f4f8', '#dce0e6', '#c4c9d0', '#a4abb3', '#858993',
              '#5a5e64', '#0A0A0A', '#2c2e33', '#1f2124', '#111213',
            ],
          },
          primaryColor: colorScheme === 'dark' ? 'dark' : 'light',
          globalStyles: (theme) => ({
            body: {
              backgroundColor: colorScheme === 'light' ? '#FBFCD4' : theme.colorScheme === 'dark' ? '#1A1B1E' : '',
            },
          }),
        }}
      >
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
