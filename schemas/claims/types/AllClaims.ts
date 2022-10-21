/**
 * This file auto-generated by Fern from our API Definition.
 */

import { TpastreamApi } from "../../..";
import * as core from "../../../core";
import * as schemas from "../..";

export const AllClaims: core.schemas.ObjectSchema<AllClaims.Raw, TpastreamApi.claims.AllClaims> = core.schemas
  .object({
    data: core.schemas.lazyObject(() => schemas.claims.Claim),
  })
  .extend(core.schemas.lazyObject(() => schemas.commons.Pageable));

export declare namespace AllClaims {
  interface Raw extends schemas.commons.Pageable.Raw {
    data: schemas.claims.Claim.Raw;
  }
}
