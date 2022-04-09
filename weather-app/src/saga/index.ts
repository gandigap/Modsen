import { takeEvery, select, put, call } from 'redux-saga/effects'
import { LocationActionTypes } from 'types'
import axios from 'axios'
import { fetchLocationErrorActionCreator } from 'actions'
import { errors } from 'constants/'

const getWeather = async () => {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=London&lang=en&appid=b9263267a94c30aaafc8ee41fb19e494&units=metric',
    )

    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
  }
}

const getCityNameUseCoordinates = (pos: GeolocationPosition) => {
  const { latitude, longitude } = pos.coords
  axios
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
    })
}

function* getCurrentPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getCityNameUseCoordinates)
  } else {
    yield put(fetchLocationErrorActionCreator(errors.navigatorError))
  }
}

interface ResponseGenerator {
  data?: any
  state?: any
}

function* weatherWorker() {
  /* yield put() */
  const data: ResponseGenerator = yield getWeather()
  const state: ResponseGenerator = yield select()
  console.log(data, state, 'data state')
}

function* weatherWatcher() {}

export function* locationWatcher() {
  yield takeEvery(LocationActionTypes.FETCH_LOCATION, getCurrentPosition)
}

export default function* rootSaga() {
  yield locationWatcher()
  yield weatherWatcher()
}
