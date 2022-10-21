/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { TpastreamApi } from "../../..";
import urlJoin from "url-join";
import * as schemas from "../../../schemas";

export interface Client {
  getAllEmployers(
    request: TpastreamApi.employers.getAllEmployers.Request
  ): Promise<TpastreamApi.employers.getAllEmployers.Response>;
}

export declare namespace Client {
  interface Options {
    _origin: string;
    _credentials?: core.Supplier<core.BasicAuth>;
  }
}

export class Client implements Client {
  constructor(private readonly options: Client.Options) {}

  public async getAllEmployers(
    request: TpastreamApi.employers.getAllEmployers.Request
  ): Promise<TpastreamApi.employers.getAllEmployers.Response> {
    const queryParameters = new URLSearchParams();
    if (request.page != null) {
      queryParameters.append("page", request.page.toString());
    }

    if (request.perPage != null) {
      queryParameters.append("per_page", request.perPage.toString());
    }

    const response = await core.fetcher({
      url: urlJoin(this.options._origin, `/employer/${request.employerId}/member`),
      method: "GET",
      headers: {
        Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options._credentials)),
      },
      queryParameters: queryParameters,
    });
    if (response.ok) {
      return {
        ok: true,
        body: schemas.employers.AllAccounts.parse(response.body as schemas.employers.AllAccounts.Raw),
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
