import { takeEvery, put, call } from 'redux-saga/effects'

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

interface ResponseGenerator {
  data?: any
}

export function* weatherWorker() {
  /* yield put() */
  const data: ResponseGenerator = yield getWeather()
  console.log(data)
}

export function* weatherWatcher() {
  yield takeEvery('CLICK', weatherWorker)
}

export default function* rootSaga() {
  yield weatherWatcher()
}
