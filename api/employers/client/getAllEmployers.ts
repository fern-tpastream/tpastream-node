/**
 * This file auto-generated by Fern from our API Definition.
 */

import * as core from "../../../core";
import { TpaStreamApi } from "../../..";

export interface Request {
  _credentials?: core.Supplier<core.BasicAuth>;
  /** Default value is 1 */
  page?: number;
  /** Default value is 10 */
  perPage?: number;
  employerId: number;
}

export type Response = core.APIResponse<
  TpaStreamApi.employers.AllAccounts,
  TpaStreamApi.employers.getAllEmployers.Error
>;
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
