import { FormattedPhoto } from '../interfaces/FormattedPhoto';
import { ReceivedPhoto } from '../interfaces/ReceivedPhoto';

export const formatPhotos = (photos: ReceivedPhoto[]): FormattedPhoto[] => {
  const formattedPhotos: FormattedPhoto[] = photos.map((photo) => {
    return { url: photo.download_url };
  });

  return formattedPhotos;
};
