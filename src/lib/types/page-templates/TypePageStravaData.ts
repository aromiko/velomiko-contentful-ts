export interface TypePageStravaActivityFull {
  id: number;
  name: string;
  distance: number;
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
