import { CountUpStats } from "@/components/component-blocks/count-up-stats/count-up-stats";
import MainFooter from "@/components/component-blocks/footer/footer";
import MainHeader from "@/components/component-blocks/header/header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ContentfulDataService } from "@/lib/services/contentful-data-service";
import {
  getStravaActivities,
  getStravaActivity,
  getStravaStats
} from "@/lib/services/strava-service";
import { TypeComponentFooter, TypeComponentHeader } from "@/lib/types";
import QUERY_FOOTER_BY_ID from "@/queries/component-blocks/graphql/footer.gql";
import QUERY_HEADER_BY_ID from "@/queries/component-blocks/graphql/header.gql";
import Image from "next/image";

type HeaderDataProps = {
  componentHeader: TypeComponentHeader;
};

type FooterDataProps = {
  componentFooter: TypeComponentFooter;
};

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

  const headerData: HeaderDataProps = await ContentfulDataService.fetchDataById(
    QUERY_HEADER_BY_ID,
    "7lzzftwTe28V0LLUOWx0bz"
  );
  const footerData: FooterDataProps = await ContentfulDataService.fetchDataById(
    QUERY_FOOTER_BY_ID,
    "sUGa0cOvu2oyVuDVyr663"
  );

  return (
    <>
      <header>
        <MainHeader data={headerData.componentHeader} />
      </header>
      <main>
        <CountUpStats header="Strava Ride Stats" stats={overallStats} />

        <section className="container ">
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
                        <AspectRatio ratio={3 / 2}>
                          <Image
                            src={`/api/map?polyline=${encodeURIComponent(activity.map.summary_polyline)}`}
                            alt="Activity Route"
                            fill
                            unoptimized
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
        </section>
      </main>
      <footer>
        <MainFooter data={footerData.componentFooter} />
      </footer>
    </>
  );
}

export default RidesPage;
