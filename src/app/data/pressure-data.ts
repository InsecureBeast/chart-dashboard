export interface PressureData {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: PressureHourlyUnits
  hourly: PressureHourly
}

export interface PressureHourlyUnits {
  time: string
  surface_pressure: string
}

export interface PressureHourly {
  time: string[]
  surface_pressure: number[]
}