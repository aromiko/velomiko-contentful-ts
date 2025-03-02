import { CountUpStats } from "@/components/component-blocks/count-up-stats/count-up-stats";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  getStravaActivities,
  getStravaActivity,
  getStravaStats
} from "@/lib/services/strava-service";
import Image from "next/image";

async function RidesPage() {
  const activities = await getStravaActivities();
  const stats = await getStravaStats();

  // Fetch only activities that have photos
  const activitiesWithPhotos = await Promise.all(
    activities
      .filter((activity) => activity.total_photo_count > 0) // Only fetch if photos exist
      .map(async (activity) => ({
        ...activity,
        fullData: await getStravaActivity(activity.id)
      }))
  );

  const overallStats = [
    {
      num: stats.all_ride_totals.count,
      suffix: "",
      subheading: "Total Rides"
    },
    {
      num: stats.all_ride_totals.distance / 1000,
      suffix: "km",
      subheading: "Total Distance"
    },
    {
      num: stats.all_ride_totals.elevation_gain,
      suffix: "m",
      subheading: "Total Elevation Gain"
    }
  ];

  return (
    <div className="container">
      <CountUpStats header="Strava Ride Stats" stats={overallStats} />

      <ul className="p-4 space-y-8">
        {activities.map((activity) => {
          const fullActivity = activitiesWithPhotos.find(
            (a) => a.id === activity.id
          );

          return (
            <li key={activity.id}>
              <h3>{activity.name}</h3>
              <p>Distance: {(activity.distance / 1000).toFixed(2)} km</p>

              {/* Show Google Static Map if polyline exists */}
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2">
                  {activity.map?.summary_polyline && (
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={`https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=weight:3%7Ccolor:blue%7Cenc:${encodeURIComponent(
                          activity.map.summary_polyline
                        )}&key=${process.env.GOOGLE_MAPS_API_KEY}`}
                        alt="Activity Route"
                        width="600"
                        height="400"
                      />
                    </AspectRatio>
                  )}
                </div>

                <div className="w-full lg:w-1/2">
                  {fullActivity?.fullData?.photos?.primary?.urls && (
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={fullActivity.fullData.photos.primary.urls[600]} // Strava provides multiple sizes
                        alt="Activity Photo"
                        fill
                        className="object-contain"
                      />
                    </AspectRatio>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RidesPage;
