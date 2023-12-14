export interface HumidityData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: HumidityHourlyUnits
  hourly: HumidityHourly
}

export interface HumidityHourlyUnits {
  time: string
  relative_humidity_2m: string
}

export interface HumidityHourly {
  time: string[]
  relative_humidity_2m: number[]
}