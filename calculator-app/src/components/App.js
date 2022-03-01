import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from '../theme';
import { ThemeProvider } from 'styled-components';

import HomePage from '../pages/Home';
import SettingPage from '../pages/Setting';
import { darkColors, lightColors } from '../constants/colors';

const App = () => {
  const themeColor = useSelector((state) => state.themeColor);
  return (
    <ThemeProvider
      theme={
        themeColor.darkTheme ? Object.assign(theme, darkColors) : Object.assign(theme, lightColors)
      }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="setting" element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
