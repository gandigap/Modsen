import { CombinedState } from 'redux';

import { WeatherStateType, LocationStateType } from 'types';

interface GlobalState {
  weatherState: WeatherStateType;
  locationState: LocationStateType;
}

export const weatherDataSelector = (state: CombinedState<GlobalState>) =>
  state.weatherState.weatherData;

export const weatherStateSelector = (state: CombinedState<GlobalState>) =>
  state.weatherState;

export const locationStateSelector = (state: CombinedState<GlobalState>) =>
  state.locationState;
