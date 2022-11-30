import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";
import { Account } from "../types/models.ts";

export class AccountsLTI extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }

  public async getAccount(
    account_id: string,
    body?: unknown,
  ): Promise<Account> {
    const endpoint = `/api/v1/api/lti/accounts/${account_id}`;
    const url = new URL(endpoint, this.configuration.domain);

    const response = await this.get(url, JSON.stringify(body));
    if (response.ok) {
      return await response.json() as Account;
    }

    return Promise.reject(response.statusText);
  }
}
