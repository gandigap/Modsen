export const getDate = (timeStamp: number): string => {
  return new Date(timeStamp * 1000).toDateString()
}
