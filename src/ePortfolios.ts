import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { EPortfolio, Scope } from "../types/models.ts";
import {
  GetAllEportfoliosForUserParams,
  ModerateAllEportfoliosForUserParams,
  ModerateAnEportfolioParams,
} from "../types/params.ts";

export class ePortfolios extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAllEportfoliosForUser(
    user_id: string,
    params?: GetAllEportfoliosForUserParams,
    body?: unknown,
  ): Promise<EPortfolio[]> {
    const endpoint = `/api/v1/users/${user_id}/eportfolios`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as EPortfolio[];
    }

    return Promise.reject(response);
  }

  public async getAnEportfolio(
    id: string,
    body?: unknown,
  ): Promise<EPortfolio> {
    const endpoint = `/api/v1/eportfolios/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as EPortfolio;
    }

    return Promise.reject(response);
  }

  public async deleteAnEportfolio(
    id: string,
    body?: unknown,
  ): Promise<EPortfolio> {
    const endpoint = `/api/v1/eportfolios/${id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.delete(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as EPortfolio;
    }

    return Promise.reject(response);
  }

  public async getEportfolioPages(
    eportfolio_id: string,
    body?: unknown,
  ): Promise<EPortfolio[]> {
    const endpoint = `/api/v1/eportfolios/${eportfolio_id}/pages`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as EPortfolio[];
    }

    return Promise.reject(response);
  }

  public async moderateAnEportfolio(
    eportfolio_id: string,
    params?: ModerateAnEportfolioParams,
    body?: unknown,
  ): Promise<EPortfolio> {
    const endpoint = `/api/v1/eportfolios/${eportfolio_id}/moderate`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as EPortfolio;
    }

    return Promise.reject(response);
  }

  public async moderateAllEportfoliosForUser(
    user_id: string,
    params?: ModerateAllEportfoliosForUserParams,
    body?: unknown,
  ): Promise<Scope> {
    const endpoint = `/api/v1/users/${user_id}/eportfolios`;
    const url = new URL(endpoint, this.configuration.domain);
    if (params !== undefined) {
      for (const [key, value] of Object.entries(params)) {
        url.searchParams.set(key, JSON.stringify(value));
      }
    }
    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Scope;
    }

    return Promise.reject(response);
  }

  public async restoreDeletedEportfolio(
    eportfolio_id: string,
    body?: unknown,
  ): Promise<EPortfolio> {
    const endpoint = `/api/v1/eportfolios/${eportfolio_id}/restore`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.put(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as EPortfolio;
    }

    return Promise.reject(response);
  }
}
