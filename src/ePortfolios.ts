import { EPortfolio, Scope } from '../types/models';
import {
  GetAllEportfoliosForUserParams,
  ModerateAllEportfoliosForUserParams,
  ModerateAnEportfolioParams,
} from '../types/params';
import { BaseApi } from './BaseApi';
import { Configuration } from './Configuration';

export class ePortfolios extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAllEportfoliosForUser(
    user_id: string,
    params: GetAllEportfoliosForUserParams,
  ): Promise<EPortfolio[]> {
    const endpoint = `/users/${user_id}/eportfolios`;
    const response = await this.get(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getAnEportfolio(id: string): Promise<EPortfolio> {
    const endpoint = `/eportfolios/${id}`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async deleteAnEportfolio(id: string): Promise<EPortfolio> {
    const endpoint = `/eportfolios/${id}`;
    const response = await this.delete(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async getEportfolioPages(eportfolio_id: string): Promise<EPortfolio[]> {
    const endpoint = `/eportfolios/${eportfolio_id}/pages`;
    const response = await this.get(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async moderateAnEportfolio(eportfolio_id: string, params: ModerateAnEportfolioParams): Promise<EPortfolio> {
    const endpoint = `/eportfolios/${eportfolio_id}/moderate`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async moderateAllEportfoliosForUser(
    user_id: string,
    params: ModerateAllEportfoliosForUserParams,
  ): Promise<Scope> {
    const endpoint = `/users/${user_id}/eportfolios`;
    const response = await this.put(endpoint, params);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }

  public async restoreDeletedEportfolio(eportfolio_id: string): Promise<EPortfolio> {
    const endpoint = `/eportfolios/${eportfolio_id}/restore`;
    const response = await this.put(endpoint);
    if (response.ok) {
      return await response.json();
    }

    return Promise.reject(response);
  }
}
