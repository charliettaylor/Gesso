export class Configuration {
  // The base domain of your Canvas, ex. https://csufullerton.instructure.com
  public domain: string;
  // The API domain, ex. https://csufullerton.instructure.com/api/v1
  public tokens: Tokens | undefined;
  public apiKey: string | undefined;

  constructor(
    config: {
      domain: string;
      tokens?: { accessToken: string; refreshToken: string };
      apiKey?: string;
    },
  ) {
    this.domain = config.domain;
    this.tokens = config.tokens;
    this.apiKey = config.apiKey;
  }
}

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};
