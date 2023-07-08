import * as request from '../utils/request';
import { handleException } from '~/utils/handleException';

export const httpGetAllStore = async () => {
  try {
    const res = await request.get(`/stores/`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpGetStoreByAddress = async (provinceId, districtId) => {
  const res = await request.get(`/stores/address/${provinceId}/${districtId}`);
  return res;
};

export const httpGetStoreById = async (id) => {
  try {
    const res = await request.get(`/stores/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPostStore = async (payload) => {
  try {
    const res = await request.post('/stores', payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPutStore = async (id, payload) => {
  try {
    const res = await request.put(`/stores/${id}`, payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpDeleteStore = async (id) => {
  try {
    const res = await request.deleteRequest(`/stores/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
