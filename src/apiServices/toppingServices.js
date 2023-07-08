import * as request from '../utils/request';
import { handleException } from '~/utils/handleException';

export const httpGetAllToppings = async () => {
  try {
    const res = await request.get(`/toppings`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpGetAvailableToppings = async () => {
  try {
    const res = await request.get(`/toppings/available`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
export const httpGetToppingById = async (id) => {
  try {
    const res = await request.get(`/toppings/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPostTopping = async (payload) => {
  try {
    const res = await request.post('/toppings/add', payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPutTopping = async (id, payload) => {
  try {
    const res = await request.put(`/toppings/update/${id}`, payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpDeleteTopping = async (id) => {
  try {
    const res = await request.put(`/toppings/delete/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
