import * as request from '../utils/request';
import { handleException } from '~/utils/handleException';

export const httpGetAllCategories = async () => {
  try {
    const res = await request.get(`/categories`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpGetAvailableCategories = async () => {
  try {
    const res = await request.get(`/categories/available`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpGetCategoryById = async (id) => {
  try {
    const res = await request.get(`/categories/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPostCategory = async (payload) => {
  try {
    const res = await request.post('/categories', payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPutCategory = async (id, payload) => {
  try {
    const res = await request.put(`/categories/${id}`, payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpDeleteCategory = async (id) => {
  try {
    const res = await request.put(`/categories/update/status/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
