import * as request from '../utils/request';
import { handleException } from '~/utils/handleException';

export const httpGetAllVoucher = async () => {
  try {
    const res = await request.get(`/vouchers/`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpGetVoucherById = async (id) => {
  try {
    const res = await request.get(`/vouchers/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpSearchVoucher = async (code) => {
  try {
    const res = await request.get(`/vouchers/search?code=${code}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPostVoucher = async (payload) => {
  try {
    const res = await request.post('/vouchers', payload);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const httpPutVoucher = async (id, payload) => {
  try {
    const res = await request.put(`/vouchers/${id}`, payload);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const httpDeleteVoucher = async (id, payload) => {
  try {
    const res = await request.deleteRequest(`/vouchers/${id}`, payload);
    return res;
  } catch (error) {
    console.log(error.response.data.errMsg);
  }
};

export const getVoucherByAccount = async () => {
  try {
    const res = await request.get(`/vouchers/account`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const getVoucherByCode = async (code) => {
  try {
    const res = await request.get(`/vouchers/search?code=${code}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
