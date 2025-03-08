export interface TypePageStravaActivityFull {
  id: number;
  name: string;
  distance: number;
  type: string;
  average_heartrate: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  start_date: string;
  start_date_local: string;
  timezone: string;
  utc_offset: number;
  total_photo_count: number;
  map?: {
    summary_polyline?: string;
  };
}

export interface TypePageStravaActivity extends TypePageStravaActivityFull {
  photos?: {
    primary?: {
      urls: {
        [key: number]: string;
      };
    };
  };
}

export interface TypePageStravaStats {
  all_ride_totals: {
    count: number;
    distance: number;
    elevation_gain: number;
  };
}
