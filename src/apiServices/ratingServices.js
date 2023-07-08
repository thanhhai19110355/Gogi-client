import * as request from '../utils/request';
import { handleException } from '~/utils/handleException';

export const httpGetRatesByUsername = async () => {
  try {
    const res = await request.get('/rates/username');
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpPostRating = async (payload) => {
  try {
    const res = await request.post('/rates', payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
