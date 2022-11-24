import { BaseApi } from "./BaseApi.ts";
import { Configuration } from "./Configuration.ts";

export class NoWorkClass extends BaseApi {
  constructor(config: Configuration) {
    super(config);
  }
}
