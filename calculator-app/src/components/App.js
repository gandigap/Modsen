import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction } from '../reducers/calculateReducer';

function App() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.dataCalculator);

  const increment = useCallback(() => {
    dispatch(incrementAction(1));
  }, [dispatch]);

  return (
    <div className="App">
      {value.value}
      <button onClick={increment}>I</button>
    </div>
  );
}

export default App;
