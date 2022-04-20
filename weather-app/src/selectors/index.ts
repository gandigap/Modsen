import { CombinedState } from 'redux';
import { WeatherStateType, LocationStateType } from 'types';

interface GlobalState {
  weatherState: WeatherStateType;
  locationState: LocationStateType;
}

export const weatherDataSelector = (state: CombinedState<GlobalState>) =>
  state.weatherState.weatherData;
