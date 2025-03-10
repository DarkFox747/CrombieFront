import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import { useTheme } from './ThemeContext';

import './App.css'

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div style={{ background: isDarkMode ? '#333' : '#FFF', color: isDarkMode ? '#FFF' : '#000' }}>
      <h1>Hello, World!</h1>
      <ThemeToggleButton />  
      

    </div>
  );
};

export default App;
