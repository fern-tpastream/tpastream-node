/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { TpaStreamApi } from "../../..";
import urlJoin from "url-join";
import * as schemas from "../../../schemas";

export interface Client {
  getAllClaims(request: TpaStreamApi.claim.getAllClaims.Request): Promise<TpaStreamApi.claim.getAllClaims.Response>;
  getClaim(request: TpaStreamApi.claim.getClaim.Request): Promise<TpaStreamApi.claim.getClaim.Response>;
}

export declare namespace Client {
  interface Options {
    _origin: string;
    _credentials?: core.Supplier<core.BasicAuth>;
  }
}

export class Client implements Client {
  constructor(private readonly options: Client.Options) {}

  public async getAllClaims(
    request: TpaStreamApi.claim.getAllClaims.Request
  ): Promise<TpaStreamApi.claim.getAllClaims.Response> {
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
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.claim.AllClaims.parse(response.body as schemas.claim.AllClaims.Raw),
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

  public async getClaim(request: TpaStreamApi.claim.getClaim.Request): Promise<TpaStreamApi.claim.getClaim.Response> {
    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/claims/${request.claimMedicalId}`),
      method: "POST",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.claim.Claim.parse(response.body as schemas.claim.Claim.Raw),
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