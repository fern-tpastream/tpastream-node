/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { TpastreamApi } from "../../..";
import urlJoin from "url-join";
import * as schemas from "../../../schemas";

export interface Client {
  get_(): Promise<TpastreamApi.key.get_.Response>;
  create(request: string): Promise<TpastreamApi.key.create.Response>;
  deleteKey(request: TpastreamApi.key.deleteKey.Request): Promise<TpastreamApi.key.deleteKey.Response>;
}

export declare namespace Client {
  interface Options {
    _origin: string;
    authorization?: core.Supplier<string>;
  }
}

export class Client implements Client {
  constructor(private readonly options: Client.Options) {}

  public async get_(): Promise<TpastreamApi.key.get_.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/public_key/gpg/"),
      method: "GET",
      headers: {
        Authorization: await core.Supplier.get(this.options.authorization),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.key.PublicKey.parse(response.body as schemas.key.PublicKey.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async create(request: string): Promise<TpastreamApi.key.create.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/public_key/gpg/"),
      method: "POST",
      headers: {
        Authorization: await core.Supplier.get(this.options.authorization),
      },
      body: schemas.key.create.Request.json(request),
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.key.PublicKey.parse(response.body as schemas.key.PublicKey.Raw),
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }

  public async deleteKey(request: TpastreamApi.key.deleteKey.Request): Promise<TpastreamApi.key.deleteKey.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/public_key/gpg/${request.name}`),
      method: "DELETE",
      headers: {
        Authorization: await core.Supplier.get(this.options.authorization),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: {
        errorName: undefined,
        content: response.error,
        _visit: (visitor) => visitor._other(response.error),
      },
    };
  }
}