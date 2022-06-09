export const defaultImplementation = (seconds: number) => {
  const second = seconds < 0 ? 0 : seconds
  const s = Math.floor(second % 60)
  const m = Math.floor((second / 60) % 60)
  const h = Math.floor(second / 3600)
  const gm = Math.floor((600 / 60) % 60)
  const gh = Math.floor(600 / 3600)
  // handle invalid times
  if (Number.isNaN(second) || second === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    return '--:--:--'
  }

  // Check if we need to show hours
  const hour = h > 0 || gh > 0 ? `${h}:` : ''

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  const min = `${(h || gm >= 10) && m < 10 ? `0${m}` : m}:`

  // Check if leading zero is need for seconds
  const sec = s < 10 ? `0${s}` : s

  return hour + min + sec
}
