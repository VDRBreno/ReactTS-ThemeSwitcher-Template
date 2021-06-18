import React from 'react';

import { ThemeProvider } from 'styled-components';

import usePersistedState from './hooks/usePersistedState';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Body from './components/Body';

function App() {

  const [theme, setTheme] = usePersistedState<String>('theme', light.title);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? dark.title : light.title);
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyle />
      <Body toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;