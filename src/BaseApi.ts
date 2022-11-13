import { Configuration } from "./Configuration";

export class BaseApi {
  private configuration: Configuration;

  constructor(config: Configuration) {
    this.configuration = config;
  }

  public async get(route: string, params?: {}, body?: {}) {
    const endpoint = this.configuration.apiDomain + route + this.serializeParams(params);
    return await fetch(endpoint, this.makeRequest('GET', body));
  }

  public async post(route: string, params?: {}, body?: any) {
    const endpoint = this.configuration.apiDomain + route + this.serializeParams(params);
    return await fetch(endpoint, this.makeRequest('POST', body));
  }

  public async update(route: string, params?: {}, body?: any) {
    const endpoint = this.configuration.apiDomain + route + this.serializeParams(params);
    return await fetch(endpoint, this.makeRequest('PATCH', body));
  }

  public async delete(route: string, params?: {}, body?: any) {
    const endpoint = this.configuration.apiDomain + route + this.serializeParams(params);
    return await fetch(endpoint, this.makeRequest('DELETE', body));
  }

  private makeRequest(method: string, body?: {}): RequestInit {
    return {
      method: method,
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': this.resolveAuth()
      }),
      body: body ? JSON.stringify(body) : null,
    };
  }

  private serializeParams(params) {
    var str: string[] = [];
    for (var p in params)
      if (params.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
      }
    return '?' + str.join("&");
  }

  private resolveAuth() {
    if (this.configuration.apiKey) {
      return 'Bearer ' + this.configuration.apiKey
    } else if (this.configuration.tokens) {
      return 'Bearer ' + this.configuration.tokens.accessToken
    } else {
      // Make custom auth error
      throw new Error();
    }
  }
}