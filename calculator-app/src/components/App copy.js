import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction } from '../reducers/calculateReducer';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { darkColors, lightColors } from '../constants/colors';

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.colors.primary};
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.dataCalculator);
  const [themeMode, setThemeMode] = useState(true);

  const increment = useCallback(() => {
    dispatch(incrementAction(1));
  }, [dispatch]);

  const changeTheme = useCallback(() => {
    setThemeMode(!themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider
      theme={themeMode ? Object.assign(theme, darkColors) : Object.assign(theme, lightColors)}>
      <div className="App">
        {value.value}
        <Button onClick={increment}>I</Button>
        <Button onClick={changeTheme}>Change theme</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
