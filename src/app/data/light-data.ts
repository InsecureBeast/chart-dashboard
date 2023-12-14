export interface LightData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: LightHourlyUnits
  hourly: LightHourly
}

export interface LightHourlyUnits {
  time: string
  dew_point_2m: string
}

export interface LightHourly {
  time: string[]
  dew_point_2m: number[]
}