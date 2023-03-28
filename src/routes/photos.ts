import { Router } from 'express';
import needle from 'needle';
import { formatPhotos } from '../utils/formatPhotos';

export const photosRoute = Router();

photosRoute.get('/initial-photos', async (req, res) => {
  try {
    const apiRes = await needle(
      'get',
      'https://picsum.photos/v2/list?limit=10'
    );
    const data = formatPhotos(apiRes.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});

photosRoute.get('/additional-photos', async (req, res) => {
  try {
    const apiRes = await needle('get', 'https://picsum.photos/v2/list?limit=5');
    const data = formatPhotos(apiRes.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error });
  }
});
