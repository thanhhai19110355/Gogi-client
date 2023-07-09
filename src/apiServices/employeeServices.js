import * as request from '../utils/request';
import { handleException } from '~/utils/handleException';

export const httpGetAllEmployee = async() => {
  try {
    const res = await request.get(`/employees/`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpGetEmployeeById = async(id) => {
  try {
    const res = await request.get(`/employees/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpGetEmployeeAccountUsername = async(username) => {
  try {
    const res = await request.get(`/employees/account/${username}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPostEmployee = async(payload) => {
  try {
    const res = await request.post('/employees', payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpPutEmployee = async(id, payload) => {
  try {
    const res = await request.put(`/employees/${id}`, payload);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};

export const httpDeleteEmployee = async(id) => {
  try {
    const res = await request.deleteRequest(`/employees/${id}`);
    return res;
  } catch (error) {
    throw handleException(error);
  }
};
