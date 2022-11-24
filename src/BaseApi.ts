import { Configuration } from './Configuration';

type Resolvable = | { [k: string]: Resolvable }
| string | null
| number | Resolvable[];

export class BaseApi {
  public configuration: Configuration;

  constructor(config: Configuration) {
    this.configuration = config;
  }

  public async get(route: URL, body?: any) {
    return await fetch(route, this.makeRequest('GET', body));
  }

  public async post(route: URL, body?: any) {
    return await fetch(route, this.makeRequest('POST', body));
  }

  public async patch(route: URL, body?: any) {
    return await fetch(route, this.makeRequest('PATCH', body));
  }

  public async put(route: URL, body?: any) {
    return await fetch(route, this.makeRequest('PUT', body));
  }

  public async delete(route: URL, body?: any) {
    return await fetch(route, this.makeRequest('DELETE', body));
  }

  private makeRequest(method: string, body?: any): RequestInit {
    return {
      method,
      headers: new Headers({
        // Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.resolveAuth(),
      }),
      body: body ? JSON.stringify(body) : null,
    };
  }

  private resolveAuth() {
    if (this.configuration.apiKey) {
      return 'Bearer ' + this.configuration.apiKey;
    } else if (this.configuration.tokens) {
      return 'Bearer ' + this.configuration.tokens.accessToken;
    } else {
      // Make custom auth error
      throw new Error();
    }
  }
}
