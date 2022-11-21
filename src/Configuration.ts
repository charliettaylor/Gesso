export class Configuration {
  // The base domain of your Canvas, ex. https://csufullerton.instructure.com
  public domain: string;
  // The API domain, ex. https://csufullerton.instructure.com/api/v1
  public apiDomain: string;
  public tokens: Tokens | undefined;
  public apiKey: string | undefined;

  constructor(domain: string, tokens?: { accessToken: string; refreshToken: string }, apiKey?: string) {
    this.domain = domain;
    this.apiDomain = domain + '/api/v1';
    this.tokens = tokens;
    this.apiKey = apiKey;
  }
}

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};
