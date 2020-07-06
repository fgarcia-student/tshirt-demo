import * as contentful from 'contentful';

const API_KEY = process.env.GATSBY_CONTENTFUL_API_KEY ?? "";
const SPACE_ID = process.env.GATSBY_CONTENTFUL_SPACE_ID ?? "";

export const contentfulClient = contentful.createClient({
  accessToken: API_KEY,
  space: SPACE_ID
});

