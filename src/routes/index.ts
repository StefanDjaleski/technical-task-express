import express from 'express';
import { photosRoute } from './photos';

export const routes = express.Router();

routes.use('/photos', photosRoute);
