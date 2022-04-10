import { takeEvery, select, put, call } from 'redux-saga/effects'
import {
  LocationActionTypes,
  LocationStateType,
  NavigatorFetchDataType,
  WeatherStateType,
} from 'types'
import axios from 'axios'
import { fetchLocationErrorActionCreator, fetchLocationSuccessActionCreator } from 'actions'
import { errors } from 'constants/'

function* getWeather(location: string) {
  try {
    const urlApiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&appid=b9263267a94c30aaafc8ee41fb19e494&units=metric`
    const { data }: NavigatorFetchDataType = yield call(axios.get, urlApiWeather)
    console.log(data, 'getWeather')
  } catch (err) {
    console.log(err)
  }
}

function* getCityName(lat: number, lon: number) {
  try {
    const urlApiLocation = `https://us1.locationiq.com/v1/reverse.php?key=pk.6ac9639b7b2a2a0a688dbff51d3854c4&lat=${lat}&lon=${lon}&format=json`
    const { data }: NavigatorFetchDataType = yield call(axios.get, urlApiLocation)
    yield put(fetchLocationSuccessActionCreator(data.address.city))
    const { location }: LocationStateType = yield select((state) => state.locatonState)
    yield getWeather(location)
  } catch (error) {
    yield put(fetchLocationErrorActionCreator(errors.locationIQApiError))
  }
}

const getCurrentPosition = () =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (location) => resolve(location),
      (error) => reject(error),
    )
  })

function* getCityNameFromCoordinates() {
  try {
    const location: GeolocationPosition = yield call(getCurrentPosition)
    const { latitude, longitude } = location.coords
    yield getCityName(latitude, longitude)
  } catch (error) {
    yield put(fetchLocationErrorActionCreator(errors.navigatorError))
  }
}

/* axios
    .get('https://us1.locationiq.com/v1/reverse.php', {
      params: {
        lat: latitude,
        lon: longitude,
        format: 'json',
        key: 'pk.6ac9639b7b2a2a0a688dbff51d3854c4',
      },
    })
    .then((response) => {
      console.log(response.data.address.city)
    })
    .catch((error) => {
      console.log(error)
    }) */

export function* locationWatcher() {
  yield takeEvery(LocationActionTypes.FETCH_LOCATION, getCityNameFromCoordinates)
}

export default function* rootSaga() {
  yield locationWatcher()
}
