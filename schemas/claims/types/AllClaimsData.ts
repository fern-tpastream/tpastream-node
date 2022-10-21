/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpastreamApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const AllClaimsData: core.schemas.Schema<AllClaimsData.Raw, TpastreamApi.claims.AllClaimsData> =
  core.schemas.list(core.schemas.lazyObject(() => schemas.claims.Claim));

export declare namespace AllClaimsData {
  type Raw = schemas.claims.Claim.Raw[];
}
