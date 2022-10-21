/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { TpaStreamApi } from "../../..";
import urlJoin from "url-join";
import * as schemas from "../../../schemas";

export interface Client {
  getGpg(): Promise<TpaStreamApi.key.getGpg.Response>;
  createGpg(request: string): Promise<TpaStreamApi.key.createGpg.Response>;
  deleteGpg(request: TpaStreamApi.key.deleteGpg.Request): Promise<TpaStreamApi.key.deleteGpg.Response>;
  getRsa(): Promise<TpaStreamApi.key.getRsa.Response>;
  createRsa(request: string): Promise<TpaStreamApi.key.createRsa.Response>;
  deleteRsa(request: TpaStreamApi.key.deleteRsa.Request): Promise<TpaStreamApi.key.deleteRsa.Response>;
}

export declare namespace Client {
  interface Options {
    _origin: string;
    _credentials?: core.Supplier<core.BasicAuth>;
  }
}

export class Client implements Client {
  constructor(private readonly options: Client.Options) {}

  public async getGpg(): Promise<TpaStreamApi.key.getGpg.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/public_key/gpg"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
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

  public async createGpg(request: string): Promise<TpaStreamApi.key.createGpg.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/public_key/gpg"),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      body: schemas.key.createGpg.Request.json(request),
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

  public async deleteGpg(request: TpaStreamApi.key.deleteGpg.Request): Promise<TpaStreamApi.key.deleteGpg.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/public_key/${request.name}`),
      method: "DELETE",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
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

  public async getRsa(): Promise<TpaStreamApi.key.getRsa.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/public_key/rsa"),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
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

  public async createRsa(request: string): Promise<TpaStreamApi.key.createRsa.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/public_key/rsa"),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      body: schemas.key.createRsa.Request.json(request),
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

  public async deleteRsa(request: TpaStreamApi.key.deleteRsa.Request): Promise<TpaStreamApi.key.deleteRsa.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/public_key/${request.name}`),
      method: "DELETE",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
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
