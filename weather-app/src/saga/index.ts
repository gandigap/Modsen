import { takeEvery, select, put, call } from 'redux-saga/effects'

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

const showPosition = (pos: GeolocationPosition) => {
  console.log(pos, 'coordinates')
  return pos.coords
}

const getCurrentPosition = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
}

interface ResponseGenerator {
  data?: any
  state?: any
}

export function* weatherWorker() {
  /* yield put() */
  const data: ResponseGenerator = yield getWeather()
  const state: ResponseGenerator = yield select()
  console.log(data, state, 'data state')
}

export function* weatherWatcher() {
  yield takeEvery('CLICK', weatherWorker)
}

export default function* rootSaga() {
  yield getCurrentPosition()
  yield weatherWatcher()
}
