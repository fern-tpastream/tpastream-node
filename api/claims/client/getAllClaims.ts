/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { TpastreamApi } from "../../..";

export interface Request {
  authorization?: core.Supplier<string>;
  /** Default value is 1 */
  page?: number;
  /** Default value is 10 */
  perPage?: number;
}

export type Response = core.APIResponse<TpastreamApi.claims.AllClaims, TpastreamApi.claims.getAllClaims.Error>;
export type Error = Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    errorName: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <Result>(visitor: Error._Visitor<Result>) => Result;
  }

  interface _Visitor<Result> {
    _other: (value: core.Fetcher.Error) => Result;
  }
}