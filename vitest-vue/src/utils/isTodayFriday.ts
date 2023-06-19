export default function isTodayFriday() {
  const today = new Date()
  return today.getDay() === 5
}
