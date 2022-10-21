/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../core";
import { Client as ClaimsServiceClient } from "./claims/client/Client";
import { Client as EmployersServiceClient } from "./employers/client/Client";
import { Client as PublicKeyServiceClient } from "./key/client/Client";

export namespace Client {
  export interface Options {
    _origin: string;
    authorization?: core.Supplier<string>;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  #claims: ClaimsServiceClient | undefined;

  public get claims(): ClaimsServiceClient {
    return (this.#claims ??= new ClaimsServiceClient({
      _origin: this.options._origin,
      authorization: this.options.authorization,
    }));
  }

  #employers: EmployersServiceClient | undefined;

  public get employers(): EmployersServiceClient {
    return (this.#employers ??= new EmployersServiceClient({
      _origin: this.options._origin,
      authorization: this.options.authorization,
    }));
  }

  #key: PublicKeyServiceClient | undefined;

  public get key(): PublicKeyServiceClient {
    return (this.#key ??= new PublicKeyServiceClient({
      _origin: this.options._origin,
      authorization: this.options.authorization,
    }));
  }
}
