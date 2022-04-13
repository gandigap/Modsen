export type NavigatorFetchDataType = {
  data: { address: { city: string } }
};

export type OpenWeatherFetchGeocodeType = {
  data: [{ lat: number; lon: number }]
};

export type CoordinatesType = {
  lat: number
  lon: number
};
