export const getSpeakerImageById = (id: string) =>
  process.env.STORAGE_URL + `/public/common/speakers/${id}.jpg`;
