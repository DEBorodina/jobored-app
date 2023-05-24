import axios, { AxiosRequestConfig } from 'axios';

import { API } from '../constants/api';
import { Category, FullVacancy, SearchState } from '../types';
import { LocalStorageService } from '../utils/LocalStorageService';
import { queryCreater } from '../utils/queryCreater';
import { AuthParams, VacancyResponse } from './types';

export class Service {
  static handleError(error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
    } else {
      console.log('unexpected error: ', error);
    }
  }

  static async getAccessToken() {
    try {
      const headers = {
        'x-secret-key': API.X_SECRET_KEY,
        'X-Api-App-Id': API.CLIENT_SECRET,
      };

      const url = `${API.URL}${API.AUTH_URL}?login=${API.LOGIN}&password=${API.PASSWORD}&client_id=${API.CLIENT_ID}&client_secret=${API.CLIENT_SECRET}&hr=${API.HR}`;
      const { data } = await axios.get<AuthParams>(url, { headers });

      LocalStorageService.addToLocalStorage('access_token', data.access_token);
      LocalStorageService.addToLocalStorage(
        'refresh_token',
        data.refresh_token
      );
      LocalStorageService.addToLocalStorage('ttl', data.ttl);

      return data.access_token;
    } catch (error) {
      Service.handleError(error);
    }
  }

  static async refreshToken() {
    try {
      const headers = {
        'x-secret-key': API.X_SECRET_KEY,
        'X-Api-App-Id': API.CLIENT_SECRET,
      };
      const url = `${API.URL}${
        API.REFRESH_URL
      }?refresh_token=${LocalStorageService.getFromLocalStorage(
        'refresh_token'
      )}&client_id=${API.CLIENT_ID}&client_secret=${API.CLIENT_SECRET}`;
      const { data } = await axios.get<AuthParams>(url, { headers });

      LocalStorageService.addToLocalStorage('access_token', data.access_token);
      LocalStorageService.addToLocalStorage(
        'refresh_token',
        data.refresh_token
      );
      LocalStorageService.addToLocalStorage('ttl', data.ttl);

      return data.access_token;
    } catch (error) {
      Service.handleError(error);
    }
  }

  static async getConfig() {
    let accessToken = LocalStorageService.getFromLocalStorage('access_token');
    if (!accessToken) {
      accessToken = await Service.getAccessToken();
    } else {
      const ttl = LocalStorageService.getFromLocalStorage('ttl') as number;
      if (Date.now() / 1000 > ttl) {
        accessToken = await Service.refreshToken();
      }
    }

    const config: AxiosRequestConfig = {
      headers: {
        'x-secret-key': API.X_SECRET_KEY,
        'X-Api-App-Id': API.CLIENT_SECRET,
        Authorization: `Bearer ${accessToken}`,
      },
    };
    return config;
  }

  static async getCategories() {
    try {
      const url = `${API.URL}${API.GET_CATEGORIES_URL}`;
      const config = await Service.getConfig();

      const { data } = await axios.get<Category[]>(url, config);
      return data;
    } catch (error) {
      Service.handleError(error);
      return [];
    }
  }

  static async getVacanciesByParams(searchValues: SearchState, page: number) {
    try {
      const config = await Service.getConfig();
      const url = `${API.URL}${API.GET_VACANCIES_URL}?${queryCreater(
        searchValues
      )}&count=4&page=${page}`;

      const { data } = await axios.get<VacancyResponse>(url, config);
      return { vacancies: data.objects, total: data.total };
    } catch (error) {
      Service.handleError(error);
      return { vacancies: [], total: 0 };
    }
  }

  static async getFavoritesVacancies(ids: number[]) {
    try {
      if (!ids.length) {
        return [];
      }
      let url = `${API.URL}${API.GET_VACANCIES_URL}?`;
      url = ids.reduce((prev_url, id, i) => {
        return i === ids.length - 1
          ? prev_url + `ids[${i}]=${id}`
          : prev_url + `ids[${i}]=${id}&`;
      }, url);

      const config = await Service.getConfig();

      const { data } = await axios.get<VacancyResponse>(url, config);
      return data.objects;
    } catch (error) {
      Service.handleError(error);
      return [];
    }
  }

  static async getVacancyById(id: number) {
    try {
      const config = await Service.getConfig();
      const url = `${API.URL}${API.GET_VACANCIES_URL}${id}`;

      const { data } = await axios.get<FullVacancy>(url, config);
      return data;
    } catch (error) {
      Service.handleError(error);
      return null;
    }
  }
}
