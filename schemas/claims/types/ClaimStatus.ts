/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpaStreamApi } from "../../..";
import * as core from "../../../core";

export const ClaimStatus: core.schemas.Schema<ClaimStatus.Raw, TpaStreamApi.claims.ClaimStatus> = core.schemas
  .string()
  .transform<TpaStreamApi.claims.ClaimStatus>({
    parse: (value) => TpaStreamApi.claims.ClaimStatus._parse(value),
    json: ({ value }) => value,
  });

export declare namespace ClaimStatus {
  type Raw = string;
}
