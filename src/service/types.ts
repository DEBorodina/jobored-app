import { Vacancy } from "../types"

export type AuthParams = {
    access_token: string,
    refresh_token: string,
    ttl: number,
    expires_in: number,
    token_type: string,
}

export type VacancyResponse = {
    objects: Vacancy[],
    total: number,
}
  export interface IHeaders{
    'x-secret-key': string,
    'X-Api-App-Id': string,
    'Authorization'?: string,
  }