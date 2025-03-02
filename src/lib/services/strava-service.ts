import {
  TypePageStravaActivity,
  TypePageStravaActivityFull,
  TypePageStravaStats
} from "@/lib/types";

const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
const STRAVA_CLIENT_SECRET = process.env.STRAVA_CLIENT_SECRET;
let ACCESS_TOKEN = process.env.STRAVA_ACCESS_TOKEN;
let REFRESH_TOKEN = process.env.STRAVA_REFRESH_TOKEN;
let EXPIRES_AT = Number(process.env.STRAVA_EXPIRES_AT); // Store the expiry timestamp

async function refreshTokenIfNeeded() {
  const now = Math.floor(Date.now() / 1000); // Current time in seconds

  if (now >= EXPIRES_AT) {
    console.log("🔄 Access token expired, refreshing...");

    const response = await fetch("https://www.strava.com/api/v3/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: STRAVA_CLIENT_ID,
        client_secret: STRAVA_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN
      })
    });

    const data = await response.json();

    if (!response.ok) throw new Error("Failed to refresh token");

    ACCESS_TOKEN = data.access_token;
    REFRESH_TOKEN = data.refresh_token;
    EXPIRES_AT = data.expires_at;

    console.log("✅ New access token obtained");
  }

  return ACCESS_TOKEN;
}

export async function getStravaActivities(): Promise<
  TypePageStravaActivityFull[]
> {
  const token = await refreshTokenIfNeeded();

  const response = await fetch(
    "https://www.strava.com/api/v3/athlete/activities?per_page=10",
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 } // Cache for 1 hour
    }
  );

  if (!response.ok) throw new Error("Failed to fetch Strava activities");

  return response.json();
}

export async function getStravaActivity(
  id: number
): Promise<TypePageStravaActivity> {
  const token = await refreshTokenIfNeeded();

  const response = await fetch(
    `https://www.strava.com/api/v3/activities/${id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 86400 } // Cache for 24 hours
    }
  );

  if (!response.ok) throw new Error("Failed to fetch Strava activity");

  return response.json();
}

export async function getStravaStats(): Promise<TypePageStravaStats> {
  const token = await refreshTokenIfNeeded();

  const response = await fetch(
    "https://www.strava.com/api/v3/athletes/100292193/stats",
    {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 } // Cache for 1 hour
    }
  );

  if (!response.ok) throw new Error("Failed to fetch Strava stats");

  return response.json();
}
