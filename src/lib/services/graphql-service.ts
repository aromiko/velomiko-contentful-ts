import { DefaultAppSettings } from "@/lib/defaults/default-app.settings";
import { GraphQLClient } from "graphql-request";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken =
  process.env.CONTENTFUL_API_MODE === "preview"
    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
    : process.env.CONTENTFUL_API_MODE === "delivery"
      ? process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
      : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const environment =
  process.env.CONTENTFUL_ENVIRONMENT ||
  DefaultAppSettings.contentfulEnvironment;
const graphqlEndpoint =
  process.env.CONTENTFUL_GRAPHQL_ENDPOINT ||
  DefaultAppSettings.contentfulGraphqlEndpoint;
const revalidateTime = parseInt(process.env.SSR_REVALIDATE_TIME ?? "60", 10);

const CONTENTFUL_GRAPHQL_URL = `${graphqlEndpoint}/spaces/${spaceId}/environments/${environment}`;

// Initialization of the service before it retrieves content data via GraphQLAPI
const GraphQLService = new GraphQLClient(CONTENTFUL_GRAPHQL_URL, {
  headers: {
    // Authorization header for Contentful API
    Authorization: `Bearer ${accessToken}`
  },
  fetch: async (url, options) => {
    // Custom fetch logic
    const res = await fetch(url, {
      // Merges default options with custom ones
      ...options,
      // property Specific to Next.js's handling of data fetching and caching in the App Router
      next: {
        revalidate: revalidateTime
      }
    }).catch((error) => {
      throw new Error(
        `[GraphQLService]: An error occurred while executing fetch on ${CONTENTFUL_GRAPHQL_URL} 
        \n\turl=${url}
        \n\toptions=${JSON.stringify(options, null, 2)}
        \n${error.stack}`
      );
    });

    // Check for 401 or 400 status and throw an error if found
    if (res.status === 401) {
      throw new Error(
        "[GraphQLService]: Unauthorized (401) - Access token may be invalid or expired"
      );
    } else if (res.status === 400) {
      throw new Error(
        "[GraphQLService]: Bad Request (400) - The request may be malformed"
      );
    }

    return res;
  }
});

export default GraphQLService;
