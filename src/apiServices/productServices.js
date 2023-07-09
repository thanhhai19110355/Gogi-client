import * as request from '~/utils/request';
import { handleException } from '~/utils/handleException';

export const httpSearchProduct = async (keyword) => {
  try {
    const res = await request.get(`/products/search?s=${keyword}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpGetAllProduct = async (limit = 6, offSet = 1) => {
  try {
    const res = await request.get(`/products?limit=${limit}&offSet=${offSet}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpGetProductById = async (id) => {
  try {
    const res = await request.get(`/products/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpGetProductByCateId = async (id, limit = 6, offSet = 1) => {
  try {
    const res = await request.get(
      `/products/category/${id}?limit=${limit}&offSet=${offSet}`
    );
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpPostProduct = async (payload) => {
  try {
    const res = await request.post('/products', payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPutProduct = async (id, payload) => {
  try {
    const res = await request.put(`/products/${id}`, payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpDeleteProduct = async (id) => {
  try {
    const res = await request.put(`/products/update/status/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpGetAll = async () => {
  try {
    const res = await request.get('/products/all');
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpGetProductsForYou = async () => {
  try {
    const res = await request.get('/products/forYou');
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpGetBestSeller = async () => {
  try {
    const res = await request.get('/products/bestSeller');
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const httpGetCombo = async () => {
  try {
    const res = await request.get('/products/combo');
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};
