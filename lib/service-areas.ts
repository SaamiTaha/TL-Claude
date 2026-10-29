export interface ServiceArea {
  name: string;
  slug: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  // Calgary Neighbourhoods
  "Aspen Woods", "Bridgeland", "Cranston", "Dalhousie", "Elbow Park",
  "Fairview", "Garrison Woods", "Hillhurst", "Inglewood", "Kensington",
  "Lake Bonavista", "Mount Royal", "Panorama Hills", "Ramsay", "Signal Hill",
  "Tuscany", "University District", "Varsity", "West Springs", "Woodbine",
  // Surrounding Communities
  "Airdrie", "Okotoks", "Cochrane", "Chestermere",
].map((name) => ({ name, slug: name.toLowerCase().replace(/\s+/g, "-") }));
