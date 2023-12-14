export interface TemperatureData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: TemperatureHourlyUnits
  hourly: TemperatureHourly
}

export interface TemperatureHourlyUnits {
  time: string
  temperature_2m: string
}

export interface TemperatureHourly {
  time: string[]
  temperature_2m: number[]
}