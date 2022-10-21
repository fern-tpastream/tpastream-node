/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { TpastreamApi } from "../../..";
import urlJoin from "url-join";
import * as schemas from "../../../schemas";

export interface Client {
  getAll(request: TpastreamApi.claims.getAll.Request): Promise<TpastreamApi.claims.getAll.Response>;
  get_(request: TpastreamApi.claims.get_.Request): Promise<TpastreamApi.claims.get_.Response>;
}

export declare namespace Client {
  interface Options {
    _origin: string;
    authorization?: core.Supplier<string>;
  }
}

export class Client implements Client {
  constructor(private readonly options: Client.Options) {}

  public async getAll(request: TpastreamApi.claims.getAll.Request): Promise<TpastreamApi.claims.getAll.Response> {
    const queryParameters = new URLSearchParams();
    if (request.page != null) {
      queryParameters.append("page", request.page.toString());
    }

    if (request.perPage != null) {
      queryParameters.append("per_page", request.perPage.toString());
    }

    const response = await core.fetcher({
      url: urlJoin(this.options._origin, "/claims/"),
      method: "GET",
      headers: {
        Authorization: await core.Supplier.get(this.options.authorization),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.claims.AllClaims.parse(response.body as schemas.claims.AllClaims.Raw),
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

  public async get_(request: TpastreamApi.claims.get_.Request): Promise<TpastreamApi.claims.get_.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/claims/${request.claimMedicalId}`),
      method: "POST",
      headers: {
        Authorization: await core.Supplier.get(this.options.authorization),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.claims.Claim.parse(response.body as schemas.claims.Claim.Raw),
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
